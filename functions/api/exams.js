/**
 * Cloudflare Pages Function - Exam Results API Endpoint
 * Routes: GET /api/exams, POST /api/exams
 */

export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 database not bound", fallback: true }), { status: 200 });
    }

    let query = "SELECT * FROM exam_results";
    const params = [];
    if (userId) {
      query += " WHERE user_id = ?";
      params.push(userId);
    }
    query += " ORDER BY created_at DESC LIMIT 50";

    const { results } = await env.DB.prepare(query).bind(...params).all();

    const formatted = results.map(r => ({
      id: r.id,
      userId: r.user_id,
      userName: r.user_name,
      title: r.exam_title,
      score: r.score,
      total: r.total_questions,
      percentage: r.percentage,
      timeUsed: `${Math.floor(r.time_used_sec / 60)}:${String(r.time_used_sec % 60).padStart(2, '0')}`,
      isGiftedPass: Boolean(r.is_gifted_pass),
      date: new Date(r.created_at).toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }),
      subjectStats: JSON.parse(r.subject_stats_json || '{}')
    }));

    return new Response(JSON.stringify({ success: true, count: formatted.length, data: formatted }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 database not bound" }), { status: 500 });
    }

    const payload = await request.json();
    const id = payload.id || `exam-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const userId = payload.userId || 'guest';
    const userName = payload.userName || 'คุณ (ผู้ใช้งาน)';
    const score = parseInt(payload.score || '0', 10);
    const total = parseInt(payload.total || '20', 10);
    const percentage = parseFloat(payload.percentage || ((score / total) * 100).toFixed(1));
    const timeUsedSec = parseInt(payload.timeUsedSec || '0', 10);
    const isGifted = percentage >= 80;

    // 1. Insert Exam Result
    await env.DB.prepare(`
      INSERT INTO exam_results 
      (id, user_id, user_name, exam_title, subject, score, total_questions, percentage, time_used_sec, subject_stats_json, is_gifted_pass)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      userId,
      userName,
      payload.title || 'ชุดจำลองสอบ ม.1 หอวัง',
      payload.subject || 'all',
      score,
      total,
      percentage,
      timeUsedSec,
      JSON.stringify(payload.subjectStats || {}),
      isGifted ? 1 : 0
    ).run();

    // 2. Update Leaderboard XP
    const xpGained = score * 20 + 50;
    await env.DB.prepare(`
      INSERT INTO leaderboard (user_id, user_name, xp, badge, avatar)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        xp = xp + ?,
        updated_at = CURRENT_TIMESTAMP
    `).bind(userId, userName, xpGained, isGifted ? 'Top Gifted Master 👑' : 'Challenger 🚀', 'HW', xpGained).run();

    return new Response(JSON.stringify({ success: true, examId: id, xpGained }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
