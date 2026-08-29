/**
 * Horwang M.1 AI Exam Master - Student Profile & Multi-User Membership System
 * Allows each student to have their own avatar, nickname, XP level, and exam history.
 */

window.UserProfile = (function() {
  const AVATARS = [
    { id: 'owl', emoji: '🦉', name: 'พี่ฮูกหอวัง', bg: 'bg-amber-100' },
    { id: 'lion', emoji: '🦁', name: 'สิงโตผู้กล้า', bg: 'bg-orange-100' },
    { id: 'fox', emoji: '🦊', name: 'จิ้งจอกเจ้าปัญญา', bg: 'bg-rose-100' },
    { id: 'unicorn', emoji: '🦄', name: 'ยูนิคอร์นเวทมนตร์', bg: 'bg-purple-100' },
    { id: 'astronaut', emoji: '🚀', name: 'นักบินอวกาศ', bg: 'bg-sky-100' },
    { id: 'cat', emoji: '🐱', name: 'แมวนักสืบ', bg: 'bg-emerald-100' },
    { id: 'panda', emoji: '🐼', name: 'แพนด้าจอมพลัง', bg: 'bg-teal-100' },
    { id: 'rabbit', emoji: '🐰', name: 'กระต่ายสายฟ้า', bg: 'bg-pink-100' }
  ];

  function getProfiles() {
    try {
      const data = localStorage.getItem('hw_student_profiles');
      if (data) return JSON.parse(data);
    } catch(e) {}
    // Default initial profile
    const defaultProfile = {
      id: 'prof_default',
      name: 'น้องคนเก่ง ป.5',
      avatar: 'owl',
      target: 'gifted',
      xp: parseInt(localStorage.getItem('hw_user_xp') || '0', 10),
      history: JSON.parse(localStorage.getItem('hw_exam_history') || '[]'),
      createdAt: new Date().toISOString()
    };
    saveProfiles([defaultProfile]);
    return [defaultProfile];
  }

  function saveProfiles(profiles) {
    localStorage.setItem('hw_student_profiles', JSON.stringify(profiles));
  }

  function getCurrentProfile() {
    const profiles = getProfiles();
    const currentId = localStorage.getItem('hw_active_profile_id') || profiles[0].id;
    return profiles.find(p => p.id === currentId) || profiles[0];
  }

  function setCurrentProfile(profileId) {
    const profiles = getProfiles();
    const target = profiles.find(p => p.id === profileId);
    if (!target) return;

    localStorage.setItem('hw_active_profile_id', target.id);
    window.APP_STATE.userXp = target.xp || 0;
    window.APP_STATE.examHistory = target.history || [];
    localStorage.setItem('hw_user_xp', window.APP_STATE.userXp.toString());
    localStorage.setItem('hw_exam_history', JSON.stringify(window.APP_STATE.examHistory));

    updateHeaderUI();
    if (window.AnalyticsEngine) window.AnalyticsEngine.renderView();
    if (window.StudyClub) window.StudyClub.renderFeed();
  }

  function updateHeaderUI() {
    const profile = getCurrentProfile();
    const av = AVATARS.find(a => a.id === profile.avatar) || AVATARS[0];

    const nameEl = document.getElementById('header-profile-name');
    const avatarEl = document.getElementById('header-profile-avatar');
    const rankEl = document.getElementById('user-rank-title');
    const xpEl = document.getElementById('user-xp-display');

    if (nameEl) nameEl.innerText = profile.name;
    if (avatarEl) avatarEl.innerText = av.emoji;
    if (xpEl) xpEl.innerText = `${profile.xp || 0} แต้ม`;

    if (typeof updateAdventureRank === 'function') {
      updateAdventureRank();
    }
  }

  function openProfileModal() {
    window.SoundEngine.click();
    renderProfileModalContent();
    const modal = document.getElementById('profile-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  function renderProfileModalContent() {
    const current = getCurrentProfile();
    const profiles = getProfiles();

    // 1. Render Current Profile Card
    const curAv = AVATARS.find(a => a.id === current.avatar) || AVATARS[0];
    const cardContainer = document.getElementById('profile-active-card');
    if (cardContainer) {
      cardContainer.innerHTML = `
        <div class="flex items-center space-x-4 bg-gradient-to-r from-horwang-darkMaroon to-horwang-maroon p-4 rounded-2xl text-white shadow-md">
          <div class="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl shadow ring-2 ring-horwang-gold/50 animate-bounce">
            ${curAv.emoji}
          </div>
          <div class="space-y-1 flex-1">
            <div class="flex items-center justify-between">
              <span class="text-base font-black font-heading text-amber-200">${current.name}</span>
              <span class="text-xs bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full">${current.target === 'gifted' ? '🌟 มุ่งสู่ Gifted' : '🏫 มุ่งสู่ห้องปกติ'}</span>
            </div>
            <div class="text-xs text-slate-200">
              ⭐ แต้มดาวสะสม: <strong class="text-horwang-gold font-bold text-sm">${current.xp || 0} แต้ม</strong>
            </div>
            <div class="text-xs text-slate-300">
              📝 ทำข้อสอบไปแล้ว: <strong>${(current.history || []).length} ชุด</strong>
            </div>
          </div>
        </div>
      `;
    }

    // 2. Render Avatar Selector Grid
    const avGrid = document.getElementById('profile-avatar-grid');
    if (avGrid) {
      avGrid.innerHTML = AVATARS.map(av => `
        <button onclick="window.UserProfile.selectAvatar('${av.id}')" id="av-btn-${av.id}" class="av-btn p-2.5 rounded-2xl border-2 ${av.id === current.avatar ? 'border-horwang-maroon bg-rose-50 ring-2 ring-rose-300' : 'border-slate-200 bg-white hover:bg-slate-50'} transition text-center flex flex-col items-center space-y-1 btn-kid">
          <span class="text-3xl">${av.emoji}</span>
          <span class="text-[10px] font-bold text-slate-700 truncate w-full">${av.name}</span>
        </button>
      `).join('');
    }

    // 3. Set Form Inputs
    const nameInput = document.getElementById('profile-name-input');
    const targetSelect = document.getElementById('profile-target-select');
    if (nameInput) nameInput.value = current.name;
    if (targetSelect) targetSelect.value = current.target || 'gifted';

    // 4. Render All Profiles List (Switch Profile)
    const listEl = document.getElementById('profile-switch-list');
    if (listEl) {
      listEl.innerHTML = profiles.map(p => {
        const av = AVATARS.find(a => a.id === p.avatar) || AVATARS[0];
        const isActive = p.id === current.id;
        return `
          <div class="flex items-center justify-between p-3 rounded-2xl border-2 ${isActive ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-200' : 'border-slate-200 bg-white hover:bg-slate-50'} transition">
            <div class="flex items-center space-x-3 cursor-pointer" onclick="window.UserProfile.switchProfile('${p.id}')">
              <span class="text-3xl">${av.emoji}</span>
              <div>
                <div class="text-sm font-bold font-heading text-slate-800 flex items-center space-x-1.5">
                  <span>${p.name}</span>
                  ${isActive ? '<span class="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">กำลังใช้งาน</span>' : ''}
                </div>
                <div class="text-xs text-slate-500">⭐ ${p.xp || 0} แต้ม • ${(p.history || []).length} ข้อสอบ</div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              ${!isActive ? `
                <button onclick="window.UserProfile.switchProfile('${p.id}')" class="px-3 py-1.5 rounded-xl bg-slate-800 text-white text-xs font-bold font-heading hover:bg-slate-700 btn-kid">
                  สลับ
                </button>
                <button onclick="window.UserProfile.deleteProfile('${p.id}')" class="p-1.5 rounded-xl text-rose-500 hover:bg-rose-50 transition text-xs" title="ลบโปรไฟล์นี้">
                  <i class="fa-solid fa-trash"></i>
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  let selectedAvatarId = null;

  function selectAvatar(avatarId) {
    window.SoundEngine.click();
    selectedAvatarId = avatarId;
    document.querySelectorAll('.av-btn').forEach(b => {
      b.classList.remove('border-horwang-maroon', 'bg-rose-50', 'ring-2', 'ring-rose-300');
      b.classList.add('border-slate-200', 'bg-white');
    });
    const btn = document.getElementById(`av-btn-${avatarId}`);
    if (btn) {
      btn.classList.add('border-horwang-maroon', 'bg-rose-50', 'ring-2', 'ring-rose-300');
    }
  }

  function saveProfileChanges() {
    window.SoundEngine.success();
    const current = getCurrentProfile();
    const profiles = getProfiles();

    const name = document.getElementById('profile-name-input')?.value?.trim() || current.name;
    const target = document.getElementById('profile-target-select')?.value || 'gifted';
    const avatar = selectedAvatarId || current.avatar;

    const idx = profiles.findIndex(p => p.id === current.id);
    if (idx !== -1) {
      profiles[idx].name = name;
      profiles[idx].target = target;
      profiles[idx].avatar = avatar;
      saveProfiles(profiles);
    }

    updateHeaderUI();
    closeProfileModal();
    alert("✨ บันทึกข้อมูลโปรไฟล์เรียบร้อยแล้วครับ!");
  }

  function createNewProfile() {
    window.SoundEngine.click();
    const name = prompt("พิมพ์ชื่อเล่นหรือชื่อของน้อง (เช่น น้องวินเนอร์ ป.5):");
    if (!name || !name.trim()) return;

    const profiles = getProfiles();
    const newId = `prof_${Date.now()}`;
    const newProfile = {
      id: newId,
      name: name.trim(),
      avatar: 'lion',
      target: 'gifted',
      xp: 0,
      history: [],
      createdAt: new Date().toISOString()
    };
    profiles.push(newProfile);
    saveProfiles(profiles);
    setCurrentProfile(newId);
    renderProfileModalContent();
  }

  function switchProfile(profileId) {
    window.SoundEngine.click();
    setCurrentProfile(profileId);
    renderProfileModalContent();
  }

  function deleteProfile(profileId) {
    window.SoundEngine.click();
    if (!confirm("ต้องการลบโปรไฟล์นี้และข้อมูลคะแนนทั้งหมดใช่หรือไม่?")) return;
    let profiles = getProfiles();
    profiles = profiles.filter(p => p.id !== profileId);
    if (profiles.length === 0) {
      localStorage.removeItem('hw_student_profiles');
    } else {
      saveProfiles(profiles);
    }
    setCurrentProfile(profiles[0]?.id || 'prof_default');
    renderProfileModalContent();
  }

  function recordExamToCurrentProfile(historyEntry, earnedXp) {
    const current = getCurrentProfile();
    const profiles = getProfiles();

    const idx = profiles.findIndex(p => p.id === current.id);
    if (idx !== -1) {
      if (!profiles[idx].history) profiles[idx].history = [];
      profiles[idx].history.unshift(historyEntry);
      profiles[idx].xp = (profiles[idx].xp || 0) + earnedXp;
      saveProfiles(profiles);

      window.APP_STATE.userXp = profiles[idx].xp;
      window.APP_STATE.examHistory = profiles[idx].history;
      localStorage.setItem('hw_user_xp', window.APP_STATE.userXp.toString());
      localStorage.setItem('hw_exam_history', JSON.stringify(window.APP_STATE.examHistory));
      updateHeaderUI();
    }
  }

  return {
    init: function() {
      const current = getCurrentProfile();
      setCurrentProfile(current.id);
      updateHeaderUI();
    },
    getCurrentProfile,
    updateHeaderUI,
    openProfileModal,
    closeProfileModal,
    selectAvatar,
    saveProfileChanges,
    createNewProfile,
    switchProfile,
    deleteProfile,
    recordExamToCurrentProfile
  };
})();
