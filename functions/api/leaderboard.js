/**
 * Cloudflare Pages Function - Leaderboard API Endpoint
 * Route: GET /api/leaderboard
 */

export async function onRequestGet({ env }) {
  try {
    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 database not bound", fallback: true }), { status: 200 });
    }

    const { results } = await env.DB.prepare(
      "SELECT user_id, user_name, xp, badge, avatar FROM leaderboard ORDER BY xp DESC LIMIT 20"
    ).all();

    const formatted = results.map((row, idx) => ({
      rank: idx + 1,
      name: row.user_name,
      xp: row.xp,
      badge: row.badge,
      avatar: row.avatar || 'HW',
      color: idx === 0 ? 'bg-amber-500' : (idx === 1 ? 'bg-slate-400' : (idx === 2 ? 'bg-amber-700' : 'bg-horwang-maroon'))
    }));

    return new Response(JSON.stringify({ success: true, data: formatted }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
