/**
 * Horwang M.1 AI Exam Master - Study Club & Research Hub (Clean Production State)
 */

window.StudyClub = (function() {
  function init() {
    if (!window.APP_STATE.posts) {
      window.APP_STATE.posts = JSON.parse(localStorage.getItem('hw_club_posts') || '[]');
    }
    if (!window.APP_STATE.sharedExams) {
      window.APP_STATE.sharedExams = JSON.parse(localStorage.getItem('hw_shared_exams') || '[]');
    }
  }

  async function renderFeed(filter = 'all') {
    init();
    const container = document.getElementById('club-posts-stream');
    if (!container) return;

    // Try fetching live posts from Cloudflare D1 if online
    if (window.CloudflareSync && window.CloudflareSync.isOnline()) {
      try {
        const res = await fetch(`/api/posts?subject=${filter}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            window.APP_STATE.posts = data.data;
          }
        }
      } catch (e) {
        console.warn("Cloudflare posts fetch fallback to local:", e);
      }
    }

    let postsToDisplay = window.APP_STATE.posts || [];
    if (filter !== 'all') {
      postsToDisplay = postsToDisplay.filter(p => p.subject === filter);
    }

    const countText = document.getElementById('feed-count-text');
    if (countText) countText.innerText = `กระทู้ทั้งหมด ${postsToDisplay.length} รายการ`;

    if (postsToDisplay.length === 0) {
      container.innerHTML = `
        <div class="bg-white rounded-2xl p-8 text-center border border-dashed border-slate-300 space-y-3">
          <div class="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto text-xl">
            <i class="fa-solid fa-comments"></i>
          </div>
          <h4 class="font-bold font-heading text-slate-700">ยังไม่มีกระทู้ในหมวดนี้</h4>
          <p class="text-xs text-slate-500 font-sarabun max-w-md mx-auto">
            หากทำข้อสอบแล้วติดขัด หรือต้องการไขโจทย์ข้อไหน สามารถกดปุ่ม "ตั้งกระทู้ถามโจทย์ใหม่" ด้านบนเพื่อเริ่มพูดคุยและให้ AI ช่วยวิเคราะห์ได้เลย
          </p>
          <button onclick="openNewPostModal()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold font-heading shadow transition">
            <i class="fa-solid fa-plus-circle mr-1"></i>ตั้งกระทู้แรกของคลับ
          </button>
        </div>
      `;
    } else {
      container.innerHTML = postsToDisplay.map(post => `
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-horwang-maroon text-white font-bold font-heading text-xs flex items-center justify-center shadow-sm">
                ${post.avatarText || 'HW'}
              </div>
              <div>
                <h4 class="font-bold text-sm text-slate-800 font-heading">${post.author || 'คุณ (ผู้ใช้งาน)'}</h4>
                <div class="flex items-center space-x-2 text-[11px] text-slate-400">
                  <span class="px-2 py-0.2 rounded bg-slate-100 text-slate-600 font-medium">${post.subjectName || post.subject}</span>
                  <span>•</span>
                  <span>${post.timeAgo || 'เมื่อสักครู่'}</span>
                </div>
              </div>
            </div>
            
            <button onclick="StudyClub.likePost('${post.id}')" class="flex items-center space-x-1.5 text-xs text-rose-600 hover:bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 transition">
              <i class="fa-solid fa-heart"></i>
              <span id="likes-count-${post.id}">${post.likes || 0}</span>
            </button>
          </div>

          <div class="space-y-1.5">
            <h3 class="text-base font-bold font-heading text-slate-900">${post.title}</h3>
            <p class="text-sm text-slate-600 font-sarabun leading-relaxed">${post.content}</p>
          </div>

          ${post.aiAnalysis ? `
            <div class="bg-gradient-to-br from-slate-900 to-sky-950 text-slate-100 rounded-xl p-4 border border-sky-500/30 space-y-2 text-xs font-sarabun shadow">
              <div class="flex items-center justify-between text-sky-300 font-heading font-bold">
                <span class="flex items-center space-x-1.5">
                  <i class="fa-solid fa-robot text-sm"></i>
                  <span>AI Research Agent: สกัดจุดหลอก & เทคนิคจำ</span>
                </span>
                <span class="bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded text-[10px] border border-sky-400/30">Auto Analysis</span>
              </div>
              
              ${post.aiAnalysis.trap ? `
                <div class="space-y-0.5">
                  <strong class="text-rose-300"><i class="fa-solid fa-triangle-exclamation mr-1"></i>จุดหลอกของโจทย์ข้อนี้:</strong>
                  <p class="text-slate-300 pl-4">${post.aiAnalysis.trap}</p>
                </div>
              ` : ''}

              ${post.aiAnalysis.shortcut ? `
                <div class="space-y-0.5">
                  <strong class="text-amber-300"><i class="fa-solid fa-bolt mr-1"></i>สูตรลัด / คีย์เวิร์ดตัดตัวเลือก:</strong>
                  <p class="text-slate-300 pl-4">${post.aiAnalysis.shortcut}</p>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Comments Section -->
          <div class="border-t border-slate-100 pt-3 space-y-3">
            <div class="space-y-2" id="comments-container-${post.id}">
              ${(post.comments || []).map(c => `
                <div class="bg-slate-50 rounded-xl p-3 text-xs font-sarabun space-y-1">
                  <div class="flex items-center justify-between font-bold text-slate-700">
                    <span>${c.author}</span>
                    <span class="text-[10px] text-slate-400 font-normal">${c.time}</span>
                  </div>
                  <p class="text-slate-600">${c.text}</p>
                </div>
              `).join('')}
            </div>

            <!-- Add Comment Input -->
            <div class="flex items-center space-x-2">
              <input type="text" id="comment-input-${post.id}" placeholder="พิมพ์ความคิดเห็นหรือแนวคิดเพื่อช่วยเพื่อน..." class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-sarabun focus:ring-2 focus:ring-sky-500" />
              <button onclick="StudyClub.addComment('${post.id}')" class="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold font-heading transition">
                ส่ง
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    renderSharedExams();
    renderLeaderboard();
  }

  function renderSharedExams() {
    const container = document.getElementById('shared-exams-list');
    if (!container) return;

    const list = window.APP_STATE.sharedExams || [];
    if (list.length === 0) {
      container.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center text-xs text-slate-400 font-sarabun">
          ยังไม่มีชุดข้อสอบที่แชร์ (ทำข้อสอบเสร็จแล้วกดแชร์เข้าคลับได้)
        </div>
      `;
    } else {
      container.innerHTML = list.map(item => `
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-horwang-maroon/30 transition space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">${item.tag || 'ข้อสอบ'}</span>
            <span class="text-[10px] text-slate-400">${item.questionsCount} ข้อ</span>
          </div>
          <h4 class="font-bold text-xs text-slate-800 font-heading line-clamp-1">${item.title}</h4>
          <div class="flex items-center justify-between pt-1">
            <span class="text-[10px] text-slate-500">โดย: ${item.author}</span>
            <button onclick="StudyClub.startSharedExam('${item.id}')" class="text-xs font-bold text-horwang-maroon hover:underline font-heading">
              เริ่มทำ &rarr;
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  async function renderLeaderboard() {
    const container = document.getElementById('leaderboard-list');
    if (!container) return;

    let list = null;
    if (window.CloudflareSync) {
      list = await window.CloudflareSync.fetchLeaderboard();
    }

    if (!list || list.length === 0) {
      const userXp = window.APP_STATE.userXp || 0;
      list = [
        { rank: 1, name: "คุณ (ผู้ใช้งาน)", xp: userXp, badge: userXp >= 100 ? "Active Challenger 🚀" : "New Explorer 🌟", avatar: "HW", color: "bg-horwang-maroon" }
      ];
    }

    container.innerHTML = list.map(item => `
      <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100">
        <div class="flex items-center space-x-2.5">
          <span class="w-5 text-center font-black font-heading text-xs text-slate-400">#${item.rank}</span>
          <div class="w-7 h-7 rounded-full ${item.color || 'bg-horwang-maroon'} text-white font-bold text-[10px] font-heading flex items-center justify-center">
            ${item.avatar || 'HW'}
          </div>
          <div>
            <div class="font-bold text-xs text-slate-800 font-heading">${item.name}</div>
            <div class="text-[10px] text-slate-400">${item.badge}</div>
          </div>
        </div>
        <div class="font-black text-xs font-heading text-horwang-maroon">
          ${item.xp} <span class="text-[10px] text-slate-400 font-normal">XP</span>
        </div>
      </div>
    `).join('');
  }

  function likePost(postId) {
    window.SoundEngine.click();
    const post = window.APP_STATE.posts.find(p => p.id === postId);
    if (post) {
      post.likes = (post.likes || 0) + 1;
      const countEl = document.getElementById(`likes-count-${postId}`);
      if (countEl) countEl.innerText = post.likes;
      localStorage.setItem('hw_club_posts', JSON.stringify(window.APP_STATE.posts));
    }
  }

  function addComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    if (!input || !input.value.trim()) return;

    window.SoundEngine.click();
    const post = window.APP_STATE.posts.find(p => p.id === postId);
    if (post) {
      if (!post.comments) post.comments = [];
      post.comments.push({
        author: "คุณ (ผู้ใช้งาน)",
        time: "เมื่อสักครู่",
        text: input.value.trim()
      });
      localStorage.setItem('hw_club_posts', JSON.stringify(window.APP_STATE.posts));
      input.value = '';
      renderFeed();
    }
  }

  async function createNewPost(subject, title, content) {
    window.SoundEngine.success();
    const newPost = {
      id: `post-${Date.now()}`,
      subject: subject,
      subjectName: window.HORWANG_CONFIG.SUBJECTS[subject]?.name || subject,
      author: "คุณ (ผู้ใช้งาน)",
      avatarText: "HW",
      avatarBg: "bg-horwang-maroon",
      timeAgo: "เมื่อสักครู่",
      title: title,
      content: content,
      likes: 1,
      aiAnalysis: {
        trap: "ระวังการสับสนเงื่อนไขหลักและตัวลวงในโจทย์หมวดนี้",
        shortcut: "คีย์เวิร์ด: วิเคราะห์ตัดช้อยส์ที่เป็นไปไม่ได้ออกก่อน"
      },
      comments: []
    };

    window.APP_STATE.posts.unshift(newPost);
    localStorage.setItem('hw_club_posts', JSON.stringify(window.APP_STATE.posts));
    renderFeed();
  }

  function filterFeed(sub) {
    window.SoundEngine.click();
    document.querySelectorAll('.club-filter-btn').forEach(b => {
      b.className = "club-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100";
    });
    const activeBtn = document.getElementById(`club-filter-${sub}`);
    if (activeBtn) activeBtn.className = "club-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold font-heading bg-horwang-maroon text-white";
    renderFeed(sub);
  }

  function shareActiveExam() {
    window.SoundEngine.success();
    if (!window.APP_STATE.currentExam) return;
    const title = document.getElementById('active-exam-title')?.innerText || "ชุดข้อสอบหอวัง";
    const sharedPack = {
      id: `pack-${Date.now()}`,
      title: title,
      author: "คุณ (ผู้ใช้งาน)",
      questionsCount: window.APP_STATE.currentExam.length,
      difficultyText: "ระดับ 2 (แนะนำ ป.5)",
      tag: "ข้อสอบที่แชร์"
    };
    window.APP_STATE.sharedExams.unshift(sharedPack);
    localStorage.setItem('hw_shared_exams', JSON.stringify(window.APP_STATE.sharedExams));
    alert("🎉 แชร์ชุดข้อสอบนี้เข้าคลัง Study Club เรียบร้อยแล้ว!");
    switchTab('study-club');
  }

  return {
    renderFeed,
    filterFeed,
    likePost,
    addComment,
    createNewPost,
    shareActiveExam
  };
})();
