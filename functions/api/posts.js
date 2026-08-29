/**
 * Cloudflare Pages Function - Study Club Posts & Comments API Endpoint
 * Routes: GET /api/posts, POST /api/posts
 */

export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get('subject') || 'all';

    if (!env.DB) {
      return new Response(JSON.stringify({ error: "D1 database not bound", fallback: true }), { status: 200 });
    }

    let query = "SELECT * FROM club_posts";
    const params = [];
    if (subject !== 'all') {
      query += " WHERE subject = ?";
      params.push(subject);
    }
    query += " ORDER BY created_at DESC LIMIT 30";

    const { results: posts } = await env.DB.prepare(query).bind(...params).all();

    // Fetch comments for these posts
    const postIds = posts.map(p => p.id);
    let commentsByPost = {};
    if (postIds.length > 0) {
      const placeholders = postIds.map(() => '?').join(',');
      const { results: comments } = await env.DB.prepare(
        `SELECT * FROM club_comments WHERE post_id IN (${placeholders}) ORDER BY created_at ASC`
      ).bind(...postIds).all();

      comments.forEach(c => {
        if (!commentsByPost[c.post_id]) commentsByPost[c.post_id] = [];
        commentsByPost[c.post_id].push({
          id: c.id,
          author: c.author_name,
          time: new Date(c.created_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
          text: c.comment_text
        });
      });
    }

    const formatted = posts.map(p => ({
      id: p.id,
      subject: p.subject,
      author: p.author_name,
      avatarText: p.author_avatar || 'HW',
      timeAgo: new Date(p.created_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
      title: p.title,
      content: p.content,
      likes: p.likes || 0,
      aiAnalysis: (p.ai_trap || p.ai_shortcut) ? {
        trap: p.ai_trap,
        shortcut: p.ai_shortcut
      } : null,
      comments: commentsByPost[p.id] || []
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

    // Type 1: Add Comment
    if (payload.action === 'comment') {
      const commentId = `comm-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      await env.DB.prepare(`
        INSERT INTO club_comments (id, post_id, author_name, comment_text)
        VALUES (?, ?, ?, ?)
      `).bind(commentId, payload.postId, payload.author || 'คุณ', payload.text).run();

      return new Response(JSON.stringify({ success: true, commentId }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // Type 2: Like Post
    if (payload.action === 'like') {
      await env.DB.prepare(`UPDATE club_posts SET likes = likes + 1 WHERE id = ?`).bind(payload.postId).run();
      return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    }

    // Type 3: New Post
    const postId = payload.id || `post-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    await env.DB.prepare(`
      INSERT INTO club_posts (id, subject, author_name, author_avatar, title, content, likes, ai_trap, ai_shortcut)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      postId,
      payload.subject || 'math',
      payload.author || 'คุณ (ป.5 Challenger)',
      payload.avatarText || 'HW',
      payload.title,
      payload.content,
      payload.likes || 1,
      payload.aiAnalysis?.trap || '',
      payload.aiAnalysis?.shortcut || ''
    ).run();

    return new Response(JSON.stringify({ success: true, postId }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
