/**
 * Cloudflare Pages Function - Questions API Endpoint
 * Routes: GET /api/questions, POST /api/questions
 */

export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get('subject') || 'all';
    const difficulty = url.searchParams.get('difficulty');
    const limit = parseInt(url.searchParams.get('limit') || '20', 10);

    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 database not bound", fallback: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    let query = "SELECT * FROM questions WHERE 1=1";
    const params = [];

    if (subject !== 'all') {
      query += " AND subject = ?";
      params.push(subject);
    }
    if (difficulty && parseInt(difficulty, 10) > 0) {
      query += " AND difficulty = ?";
      params.push(parseInt(difficulty, 10));
    }

    query += " ORDER BY RANDOM() LIMIT ?";
    params.push(limit);

    const stmt = env.DB.prepare(query).bind(...params);
    const { results } = await stmt.all();

    const formatted = results.map(row => ({
      id: row.id,
      subject: row.subject,
      subjectName: row.subject_name,
      track: row.track,
      difficulty: row.difficulty,
      topic: row.topic,
      question: row.question,
      options: JSON.parse(row.options_json || '[]'),
      correctAnswer: row.correct_answer,
      explanation: row.explanation,
      trap: row.trap,
      shortcutTrick: row.shortcut_trick,
      tags: JSON.parse(row.tags_json || '[]')
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
    const questions = Array.isArray(payload) ? payload : [payload];

    const insertStmt = env.DB.prepare(`
      INSERT OR REPLACE INTO questions 
      (id, subject, subject_name, track, difficulty, topic, question, options_json, correct_answer, explanation, trap, shortcut_trick, tags_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const batch = questions.map(q => insertStmt.bind(
      q.id || `q-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      q.subject || 'math',
      q.subjectName || 'คณิตศาสตร์',
      q.track || 'Gifted',
      q.difficulty || 2,
      q.topic || 'ทั่วไป',
      q.question,
      JSON.stringify(q.options || []),
      q.correctAnswer || 0,
      q.explanation || '',
      q.trap || '',
      q.shortcutTrick || '',
      JSON.stringify(q.tags || [])
    ));

    await env.DB.batch(batch);

    return new Response(JSON.stringify({ success: true, inserted: questions.length }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
