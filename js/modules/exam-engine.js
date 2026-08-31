/**
 * Horwang M.1 AI Exam Master - Exam Engine & OMR Simulator (Polished Edition)
 * Tuned for Grade 5 ergonomics, instant visual active feedback, and smooth sound effects.
 */

window.ExamEngine = (function() {
  function startExam(questions, examTitle) {
    window.APP_STATE.currentExam = questions;
    window.APP_STATE.userAnswers = {};
    window.APP_STATE.timeSpentSeconds = 0;

    const minutesAllowed = Math.max(10, questions.length * window.HORWANG_CONFIG.BENCHMARKS.MINUTES_PER_QUESTION);
    window.APP_STATE.totalExamTime = minutesAllowed * 60;
    window.APP_STATE.timeRemaining = window.APP_STATE.totalExamTime;

    // Toggle UI Containers
    document.getElementById('exam-config-card')?.classList.add('hidden');
    document.getElementById('exam-result-container')?.classList.add('hidden');
    document.getElementById('active-exam-container')?.classList.remove('hidden');
    document.getElementById('sticky-exam-bar')?.classList.remove('hidden');

    // Update Titles
    const activeTitle = document.getElementById('active-exam-title');
    const modeTitle = document.getElementById('exam-mode-title');
    if (activeTitle) activeTitle.innerText = examTitle;
    if (modeTitle) modeTitle.innerText = examTitle;

    const countBadge = document.getElementById('active-exam-count-badge');
    if (countBadge) countBadge.innerText = `${questions.length} ข้อ • ${minutesAllowed} นาที`;
    
    const totalBadge = document.getElementById('total-count-badge');
    if (totalBadge) totalBadge.innerText = questions.length;

    const answeredBadge = document.getElementById('answered-count-badge');
    if (answeredBadge) answeredBadge.innerText = '0';

    renderQuestions(questions);
    renderNavigatorPills(questions.length);
    renderDigitalOmrSheet(questions.length);
    startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderQuestions(questions) {
    const container = document.getElementById('exam-questions-list');
    if (!container) return;
    container.innerHTML = questions.map((q, idx) => {
      const subjConfig = window.HORWANG_CONFIG.SUBJECTS[q.subject] || { name: q.subjectName || "ทั่วไป", badgeClass: "bg-slate-100 text-slate-700" };
      return `
        <div class="clean-card p-5 sm:p-6 space-y-4" id="question-card-${idx}">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold font-heading bg-slate-900 text-white">
                ข้อที่ ${idx + 1}
              </span>
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold ${subjConfig.badgeClass}">
                ${q.subjectName || subjConfig.name}
              </span>
              ${q.topic ? `<span class="text-xs text-slate-500 font-medium hidden sm:inline-block">${q.topic}</span>` : ''}
            </div>
            
            <div class="flex items-center space-x-2">
              <button onclick="window.ExamEngine.speakQuestion(${idx})" id="speak-btn-${idx}" class="text-slate-500 hover:text-horwang-maroon px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition text-xs font-semibold flex items-center space-x-1 border border-slate-200 btn-kid" title="ฟังเสียงอ่านโจทย์">
                <i class="fa-solid fa-volume-high text-amber-500"></i>
                <span class="hidden sm:inline">อ่านโจทย์</span>
              </button>

              <button onclick="window.ExamEngine.toggleFlag(${idx})" id="flag-btn-${idx}" class="text-slate-400 hover:text-amber-500 p-2 rounded-lg hover:bg-slate-100 transition text-sm" title="ปักหมุดไว้ทบทวน">
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>

          <div class="text-base sm:text-lg font-medium text-slate-800 leading-relaxed font-sarabun" id="q-text-${idx}">
            ${window.formatMathText ? window.formatMathText(q.question) : q.question}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            ${q.options.map((opt, optIdx) => `
              <button onclick="window.ExamEngine.selectAnswer(${idx}, ${optIdx})" id="opt-${idx}-${optIdx}" class="option-btn text-left p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-400 text-sm sm:text-base font-sarabun text-slate-700 transition flex items-start space-x-3 group">
                <span id="opt-badge-${idx}-${optIdx}" class="opt-badge w-7 h-7 rounded-lg border border-slate-300 group-hover:border-slate-500 text-xs font-bold font-heading flex items-center justify-center shrink-0 mt-0.5 text-slate-600 bg-slate-50 transition">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <span class="leading-relaxed flex-1">${window.formatMathText ? window.formatMathText(opt) : opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    if (window.renderAllMath) {
      window.renderAllMath(container);
    }
  }

  function renderNavigatorPills(count) {
    const container = document.getElementById('question-navigator-pills');
    if (!container) return;
    container.innerHTML = Array.from({ length: count }, (_, i) => `
      <button onclick="window.ExamEngine.scrollToQuestion(${i})" id="nav-pill-${i}" class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-black font-heading shrink-0 transition flex items-center justify-center border border-slate-700 btn-kid">
        ${i + 1}
      </button>
    `).join('');
  }

  function renderDigitalOmrSheet(count) {
    const grid = document.getElementById('digital-omr-grid');
    if (!grid) return;

    grid.innerHTML = Array.from({ length: count }, (_, idx) => `
      <div id="omr-row-${idx}" class="flex items-center justify-between p-2 rounded-2xl bg-slate-50 hover:bg-amber-50/50 transition">
        <span class="text-xs font-black font-heading text-slate-700 w-6 text-center">
          ${idx + 1}
        </span>
        <div class="flex items-center space-x-2">
          ${['A', 'B', 'C', 'D'].map((letter, optIdx) => `
            <div onclick="window.ExamEngine.selectAnswer(${idx}, ${optIdx})" id="omr-bubble-${idx}-${optIdx}" class="omr-bubble" title="ข้อ ${idx + 1} ตอบ ${letter}">
              ${letter}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function selectAnswer(qIdx, optIdx) {
    try {
      if (window.SoundEngine && typeof window.SoundEngine.bubblePop === 'function') {
        window.SoundEngine.bubblePop();
      }
    } catch (e) {}

    window.APP_STATE.userAnswers[qIdx] = optIdx;

    // 1. Update Option Buttons Styling (Direct, Unambiguous Visual Active State)
    const totalOptions = window.APP_STATE.currentExam[qIdx].options.length;
    for (let i = 0; i < totalOptions; i++) {
      const optBtn = document.getElementById(`opt-${qIdx}-${i}`);
      const optBadge = document.getElementById(`opt-badge-${qIdx}-${i}`);

      if (optBtn) {
        if (i === optIdx) {
          optBtn.classList.add('selected');
          optBtn.style.backgroundColor = '#FFF1F2';
          optBtn.style.borderColor = '#7B001C';
          optBtn.style.boxShadow = '0 8px 20px -2px rgba(123, 0, 28, 0.2), 0 0 0 3px rgba(244, 63, 94, 0.3)';
          optBtn.style.transform = 'translateX(4px)';
          if (optBadge) {
            optBadge.style.backgroundColor = '#7B001C';
            optBadge.style.color = '#FFFFFF';
            optBadge.style.borderColor = '#7B001C';
            optBadge.style.boxShadow = '0 2px 6px rgba(123, 0, 28, 0.4)';
          }
        } else {
          optBtn.classList.remove('selected');
          optBtn.style.backgroundColor = '#FFFFFF';
          optBtn.style.borderColor = '#E2E8F0';
          optBtn.style.boxShadow = 'none';
          optBtn.style.transform = 'none';
          if (optBadge) {
            optBadge.style.backgroundColor = '#FFFFFF';
            optBadge.style.color = '#64748B';
            optBadge.style.borderColor = '#CBD5E1';
            optBadge.style.boxShadow = 'none';
          }
        }
      }
    }

    // 2. Update Digital OMR Bubbles
    for (let i = 0; i < 4; i++) {
      const bubble = document.getElementById(`omr-bubble-${qIdx}-${i}`);
      if (bubble) {
        if (i === optIdx) {
          bubble.classList.add('filled');
          bubble.style.backgroundColor = '#0F172A';
          bubble.style.color = '#FFFFFF';
          bubble.style.borderColor = '#020617';
          bubble.style.boxShadow = 'inset 0 3px 6px rgba(0,0,0,0.5), 0 0 0 3px rgba(245, 176, 29, 0.6)';
          bubble.style.transform = 'scale(1.15)';
        } else {
          bubble.classList.remove('filled');
          bubble.style.backgroundColor = '#FFFFFF';
          bubble.style.color = '#475569';
          bubble.style.borderColor = '#CBD5E1';
          bubble.style.boxShadow = 'none';
          bubble.style.transform = 'none';
        }
      }
    }

    // 3. Update Navigator Pill
    const pill = document.getElementById(`nav-pill-${qIdx}`);
    if (pill) {
      pill.classList.remove('bg-slate-800', 'text-slate-300');
      pill.classList.add('bg-emerald-500', 'text-slate-900', 'font-black', 'ring-2', 'ring-emerald-300');
    }

    // 4. Update Answered Counter Badge
    const answeredCount = Object.keys(window.APP_STATE.userAnswers).length;
    const answeredEl = document.getElementById('answered-count-badge');
    if (answeredEl) answeredEl.innerText = answeredCount.toString();
  }

  function toggleFlag(qIdx) {
    window.SoundEngine.click();
    const btn = document.getElementById(`flag-btn-${qIdx}`);
    const pill = document.getElementById(`nav-pill-${qIdx}`);
    if (!btn) return;

    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid', 'text-amber-500');
      if (pill) pill.classList.add('border-amber-400', 'ring-2', 'ring-amber-400');
    } else {
      icon.classList.remove('fa-solid', 'text-amber-500');
      icon.classList.add('fa-regular');
      if (pill) pill.classList.remove('border-amber-400', 'ring-2', 'ring-amber-400');
    }
  }

  function scrollToQuestion(idx) {
    window.SoundEngine.click();
    const card = document.getElementById(`question-card-${idx}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-4', 'ring-amber-400');
      setTimeout(() => card.classList.remove('ring-4', 'ring-amber-400'), 1200);
    }
  }

  function speakQuestion(idx) {
    if (!('speechSynthesis' in window)) {
      alert("บราวเซอร์นี้ไม่รองรับระบบอ่านออกเสียง");
      return;
    }
    const q = window.APP_STATE.currentExam[idx];
    window.speechSynthesis.cancel();
    const cleanText = q.question.replace(/\\[\(\)]/g, '').replace(/frac/g, '').replace(/\{/g, ' ').replace(/\}/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = q.subject === 'english' ? 'en-US' : 'th-TH';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }

  function startTimer() {
    if (window.APP_STATE.timerInterval) clearInterval(window.APP_STATE.timerInterval);
    updateTimerDisplay();

    window.APP_STATE.timerInterval = setInterval(() => {
      window.APP_STATE.timeRemaining--;
      window.APP_STATE.timeSpentSeconds++;
      updateTimerDisplay();

      if (window.APP_STATE.timeRemaining === 300) {
        window.SoundEngine.warning();
        alert("⏰ เหลือเวลาทำข้อสอบอีก 5 นาทีสุดท้าย!");
      }

      if (window.APP_STATE.timeRemaining <= 0) {
        clearInterval(window.APP_STATE.timerInterval);
        window.SoundEngine.warning();
        alert("⌛ หมดเวลาทำข้อสอบแล้ว! ระบบกำลังประมวลผลคำตอบของคุณ...");
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(Math.max(0, window.APP_STATE.timeRemaining) / 60);
    const seconds = Math.max(0, window.APP_STATE.timeRemaining) % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const timerEl = document.getElementById('exam-timer-display');
    if (timerEl) {
      timerEl.innerText = formatted;
      if (window.APP_STATE.timeRemaining <= 180) {
        timerEl.classList.add('text-rose-400', 'animate-pulse');
      } else {
        timerEl.classList.remove('text-rose-400');
      }
    }
  }

  function confirmSubmit() {
    window.SoundEngine.click();
    const total = window.APP_STATE.currentExam.length;
    const answered = Object.keys(window.APP_STATE.userAnswers).length;
    const unanswered = total - answered;

    let msg = `คุณตอบคำถามแล้ว ${answered}/${total} ข้อ`;
    if (unanswered > 0) {
      msg += `\n(ยังเหลืออีก ${unanswered} ข้อที่ยังไม่ได้ฝนคำตอบ)\n\nต้องการส่งข้อสอบเลยหรือไม่?`;
    } else {
      msg += `\n\nต้องการส่งข้อสอบและดูเฉลยทันทีหรือไม่?`;
    }

    if (confirm(msg)) {
      submitExam();
    }
  }

  function submitExam() {
    if (window.APP_STATE.timerInterval) clearInterval(window.APP_STATE.timerInterval);

    document.getElementById('active-exam-container')?.classList.add('hidden');
    document.getElementById('sticky-exam-bar')?.classList.add('hidden');
    document.getElementById('exam-result-container')?.classList.remove('hidden');

    const questions = window.APP_STATE.currentExam;
    let correctCount = 0;
    const subjectStats = {};

    questions.forEach((q, idx) => {
      const userChoice = window.APP_STATE.userAnswers[idx];
      const isCorrect = userChoice === q.correctAnswer;
      if (isCorrect) correctCount++;

      const subj = q.subject || 'other';
      if (!subjectStats[subj]) subjectStats[subj] = { correct: 0, total: 0 };
      subjectStats[subj].total++;
      if (isCorrect) subjectStats[subj].correct++;
    });

    const percentage = (correctCount / questions.length) * 100;
    const timeUsedMin = Math.floor(window.APP_STATE.timeSpentSeconds / 60);
    const timeUsedSec = window.APP_STATE.timeSpentSeconds % 60;
    const timeUsedFormatted = `${timeUsedMin}:${String(timeUsedSec).padStart(2, '0')}`;

    // Update XP and Save history to active student profile
    const earnedXp = correctCount * 20 + 50;
    const historyEntry = {
      date: new Date().toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }),
      title: document.getElementById('active-exam-title')?.innerText || "ชุดข้อสอบหอวัง",
      score: correctCount,
      total: questions.length,
      percentage: percentage.toFixed(1),
      timeUsed: timeUsedFormatted,
      subjectStats: subjectStats
    };

    if (window.UserProfile && typeof window.UserProfile.recordExamToCurrentProfile === 'function') {
      window.UserProfile.recordExamToCurrentProfile(historyEntry, earnedXp);
    } else {
      window.APP_STATE.userXp += earnedXp;
      window.APP_STATE.examHistory.unshift(historyEntry);
      localStorage.setItem('hw_user_xp', window.APP_STATE.userXp.toString());
      localStorage.setItem('hw_exam_history', JSON.stringify(window.APP_STATE.examHistory));
      const xpDisplay = document.getElementById('user-xp-display');
      if (xpDisplay) xpDisplay.innerText = `${window.APP_STATE.userXp} แต้ม`;
    }

    // Render scorecard
    document.getElementById('result-score-num').innerText = correctCount;
    document.getElementById('result-total-num').innerText = `/ ${questions.length}`;
    document.getElementById('result-correct-count').innerText = correctCount;
    document.getElementById('result-incorrect-count').innerText = questions.length - correctCount;
    document.getElementById('result-time-used').innerText = timeUsedFormatted;

    const pBadge = document.getElementById('result-percentage-badge');
    const commentEl = document.getElementById('result-benchmark-comment');

    if (percentage >= 80) {
      window.SoundEngine.celebrate();
      if (window.confetti) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
      if (pBadge) {
        pBadge.innerText = `${percentage.toFixed(1)}% (ยอดเยี่ยมมาก • ระดับ Gifted หอวัง)`;
        pBadge.className = "px-3.5 py-1 rounded-full text-xs font-black bg-emerald-500/30 text-emerald-300 border border-emerald-400/40";
      }
      if (commentEl) commentEl.innerText = "🌟 ผลงานยอดเยี่ยม! คะแนนของคุณอยู่ในเกณฑ์ลุ้นสอบติดห้องเรียนพิเศษ Gifted / EP หอวัง อันดับต้นๆ สบายมาก!";
    } else if (percentage >= 60) {
      window.SoundEngine.success();
      if (pBadge) {
        pBadge.innerText = `${percentage.toFixed(1)}% (ผ่านเกณฑ์ห้องเรียนปกติ)`;
        pBadge.className = "px-3.5 py-1 rounded-full text-xs font-black bg-amber-500/30 text-amber-300 border border-amber-400/40";
      }
      if (commentEl) commentEl.innerText = "👍 ทำได้ดีมาก! ผ่านเกณฑ์ห้องปกติแล้ว ลองดูเฉลยข้อที่ผิดเพื่อฝึกเพิ่มอีกนิด รับรองติด Gifted แน่นอนครับ!";
    } else {
      window.SoundEngine.error();
      if (pBadge) {
        pBadge.innerText = `${percentage.toFixed(1)}% (ต้องทบทวนเพิ่ม)`;
        pBadge.className = "px-3.5 py-1 rounded-full text-xs font-black bg-rose-500/30 text-rose-300 border border-rose-400/40";
      }
      if (commentEl) commentEl.innerText = "💪 ไม่เป็นไรนะคนเก่ง! ค่อยๆ อ่านวิธีคิดและสูตรลัดของพี่ฮูกด้านล่าง แล้วลองทำใหม่อีกรอบได้เลยครับ";
    }

    renderSolutions(questions);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderSolutions(questions) {
    const container = document.getElementById('solutions-list-container');
    if (!container) return;

    container.innerHTML = questions.map((q, idx) => {
      const userChoice = window.APP_STATE.userAnswers[idx];
      const isCorrect = userChoice === q.correctAnswer;
      const isAnswered = userChoice !== undefined;
      const subjConfig = window.HORWANG_CONFIG.SUBJECTS[q.subject] || { name: q.subjectName || "ทั่วไป", badgeClass: "bg-slate-100 text-slate-700" };
      const hybridBadge = q.hybridBadge || "📚 ข้อสอบคัดเลือก";

      return `
        <div class="clean-card p-5 sm:p-6 space-y-4 border ${isCorrect ? 'border-emerald-300' : 'border-rose-300'}">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-lg ${isCorrect ? 'bg-emerald-600' : 'bg-rose-600'} text-white font-heading font-bold text-xs">
                ข้อที่ ${idx + 1}
              </span>
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold ${subjConfig.badgeClass}">
                ${q.subjectName || subjConfig.name}
              </span>
              <span class="text-xs font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">
                ${isCorrect ? '<i class="fa-solid fa-check mr-1"></i>ตอบถูกต้อง' : (isAnswered ? '<i class="fa-solid fa-xmark mr-1"></i>ตอบผิด' : '<i class="fa-solid fa-minus mr-1"></i>ไม่ได้ตอบ')}
              </span>
            </div>

            <button onclick="window.StudyClub.sendQuestionFromExam(${idx})" class="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition flex items-center space-x-1 btn-kid">
              <i class="fa-solid fa-paper-plane text-xs text-slate-500"></i>
              <span>ถามในชุมชน</span>
            </button>
          </div>

          <div class="text-base sm:text-lg font-semibold text-slate-900 font-sarabun">
            ${window.formatMathText ? window.formatMathText(q.question) : q.question}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm font-sarabun">
            ${q.options.map((opt, optIdx) => {
              let style = "bg-slate-50 border-slate-200 text-slate-700";
              let icon = "";
              if (optIdx === q.correctAnswer) {
                style = "bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold";
                icon = '<i class="fa-solid fa-check text-emerald-600 ml-auto"></i>';
              } else if (optIdx === userChoice && !isCorrect) {
                style = "bg-rose-50 border-2 border-rose-400 text-rose-950 line-through";
                icon = '<i class="fa-solid fa-xmark text-rose-500 ml-auto"></i>';
              }
              return `
                <div class="p-3 rounded-xl border ${style} flex items-center justify-between">
                  <span><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${window.formatMathText ? window.formatMathText(opt) : opt}</span>
                  ${icon}
                </div>
              `;
            }).join('')}
          </div>

          <!-- 3-Pillar Interactive Solution Hub -->
          <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
            <!-- Solution Tab Navigation -->
            <div class="flex items-center border-b border-slate-200 bg-slate-100/90 p-1.5 gap-1.5 overflow-x-auto text-xs font-heading font-bold select-none">
              <button type="button" onclick="window.ExamEngine.switchSolutionTab('${idx}', 'concept')" id="sol-tab-btn-${idx}-concept" class="sol-tab-btn px-3 py-1.5 rounded-xl transition flex items-center space-x-1.5 bg-amber-400 text-slate-950 shadow-sm">
                <span>💡 วิธีคิด (Concept)</span>
              </button>
              <button type="button" onclick="window.ExamEngine.switchSolutionTab('${idx}', 'steps')" id="sol-tab-btn-${idx}-steps" class="sol-tab-btn px-3 py-1.5 rounded-xl transition flex items-center space-x-1.5 text-slate-600 hover:bg-slate-200">
                <span>📝 วิธีทำละเอียด (Steps)</span>
              </button>
              <button type="button" onclick="window.ExamEngine.switchSolutionTab('${idx}', 'hack')" id="sol-tab-btn-${idx}-hack" class="sol-tab-btn px-3 py-1.5 rounded-xl transition flex items-center space-x-1.5 text-slate-600 hover:bg-slate-200">
                <span>⚡ สูตรลัด & จุดหลอก</span>
              </button>
              <button type="button" onclick="window.ExamEngine.switchSolutionTab('${idx}', 'all')" id="sol-tab-btn-${idx}-all" class="sol-tab-btn ml-auto px-2.5 py-1.5 rounded-xl transition text-slate-500 hover:bg-slate-200 text-[11px]">
                <span>ดูทั้งหมด</span>
              </button>
            </div>

            <!-- Solution Contents -->
            <div class="p-4 sm:p-5 space-y-3.5 font-sarabun text-sm">
              <!-- Pillar 1: Concept & Thinking Process -->
              <div id="sol-content-${idx}-concept" class="sol-tab-content space-y-2">
                <div class="font-bold text-amber-950 font-heading flex items-center space-x-1.5 text-xs">
                  <span class="w-5 h-5 rounded-md bg-amber-400 text-slate-950 flex items-center justify-center text-xs">💡</span>
                  <span>๑. วิธีคิด & ตรรกะเบื้องหลัง (Thinking Process & Concept):</span>
                </div>
                <div class="text-slate-800 leading-relaxed bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80">
                  ${window.formatMathText ? window.formatMathText(q.thinkingConcept || `วิเคราะห์แก่นหลักของหัวข้อ ${q.topic || 'บทเรียน'}: ทำความเข้าใจความสัมพันธ์ของข้อมูลในโจทย์เพื่อวางแผนแก้ปัญหาอย่างเป็นระบบ`) : q.thinkingConcept}
                </div>
              </div>

              <!-- Pillar 2: Formal Step-by-Step Procedure -->
              <div id="sol-content-${idx}-steps" class="sol-tab-content hidden space-y-2">
                <div class="font-bold text-sky-950 font-heading flex items-center space-x-1.5 text-xs">
                  <span class="w-5 h-5 rounded-md bg-sky-500 text-white flex items-center justify-center text-xs">📝</span>
                  <span>๒. ขั้นตอนการแสดงวิธีทำมาตรฐาน (Formal Procedure):</span>
                </div>
                <div class="text-slate-800 leading-relaxed bg-sky-50/70 p-3.5 rounded-xl border border-sky-200/80 whitespace-pre-line">
                  ${window.formatMathText ? window.formatMathText(q.formalSteps || q.explanation) : (q.formalSteps || q.explanation)}
                </div>
              </div>

              <!-- Pillar 3: Exam Hacks & Trap Alert -->
              <div id="sol-content-${idx}-hack" class="sol-tab-content hidden space-y-2.5">
                <div class="font-bold text-emerald-950 font-heading flex items-center space-x-1.5 text-xs">
                  <span class="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs">⚡</span>
                  <span>๓. เทคนิคลัด 15 วิ & จุดหลอกห้องสอบ (Exam Hacks & Traps):</span>
                </div>
                
                <div class="p-3 bg-emerald-50/80 border border-emerald-300 rounded-xl text-emerald-950 space-y-1">
                  <div class="font-bold text-xs flex items-center space-x-1.5 text-emerald-800">
                    <i class="fa-solid fa-bolt text-emerald-600"></i>
                    <span>สูตรลัด / ทริกตัดช้อยส์เร็ว:</span>
                  </div>
                  <div class="leading-relaxed text-sm">
                    ${window.formatMathText ? window.formatMathText(q.shortcutTrick || 'สังเกตคีย์เวิร์ดสำคัญในโจทย์และตัดตัวเลือกที่ไม่สมเหตุสมผลออกทันที') : q.shortcutTrick}
                  </div>
                </div>

                <div class="p-3 bg-rose-50/80 border border-rose-300 rounded-xl text-rose-950 space-y-1">
                  <div class="font-bold text-xs flex items-center space-x-1.5 text-rose-800">
                    <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
                    <span>จุดหลอกที่พบบ่อย (Trap Alert):</span>
                  </div>
                  <div class="leading-relaxed text-sm">
                    ${window.formatMathText ? window.formatMathText(q.trap || 'ระวังการอ่านเงื่อนไขของโจทย์ไม่ครบถ้วน หรือลืมตรวจทานหน่วย') : q.trap}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.renderAllMath) {
      window.renderAllMath(container);
    }
  }

  function switchSolutionTab(idx, tabName) {
    window.SoundEngine.click();
    const tabs = ['concept', 'steps', 'hack'];
    const btns = {
      concept: document.getElementById(`sol-tab-btn-${idx}-concept`),
      steps: document.getElementById(`sol-tab-btn-${idx}-steps`),
      hack: document.getElementById(`sol-tab-btn-${idx}-hack`),
      all: document.getElementById(`sol-tab-btn-${idx}-all`)
    };

    if (tabName === 'all') {
      tabs.forEach(t => {
        document.getElementById(`sol-content-${idx}-${t}`)?.classList.remove('hidden');
      });
      tabs.forEach(t => {
        if (btns[t]) btns[t].className = 'sol-tab-btn px-2.5 py-1.5 rounded-xl transition text-slate-600 hover:bg-slate-200 text-xs font-heading font-bold';
      });
      if (btns.all) btns.all.className = 'sol-tab-btn ml-auto px-2.5 py-1.5 rounded-xl transition bg-slate-800 text-white shadow-sm text-xs font-heading font-bold';
      return;
    }

    tabs.forEach(t => {
      const content = document.getElementById(`sol-content-${idx}-${t}`);
      const btn = btns[t];
      if (t === tabName) {
        content?.classList.remove('hidden');
        if (btn) {
          const bgStyles = {
            concept: 'bg-amber-400 text-slate-950 shadow-sm',
            steps: 'bg-sky-500 text-white shadow-sm',
            hack: 'bg-emerald-600 text-white shadow-sm'
          };
          btn.className = `sol-tab-btn px-3 py-1.5 rounded-xl transition flex items-center space-x-1.5 ${bgStyles[t]} text-xs font-heading font-bold`;
        }
      } else {
        content?.classList.add('hidden');
        if (btn) btn.className = 'sol-tab-btn px-3 py-1.5 rounded-xl transition flex items-center space-x-1.5 text-slate-600 hover:bg-slate-200 text-xs font-heading font-bold';
      }
    });
    if (btns.all) btns.all.className = 'sol-tab-btn ml-auto px-2.5 py-1.5 rounded-xl transition text-slate-500 hover:bg-slate-200 text-[11px] font-heading font-bold';
  }

  function toggleOmrPanel() {
    window.SoundEngine.click();
    const sidebar = document.getElementById('digital-omr-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }

  /**
   * Fisher-Yates (Knuth) Shuffle — statistically unbiased O(n)
   * Unlike .sort(() => Math.random()-0.5) which has O(n log n) bias.
   */
  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return {
    startExam,
    selectAnswer,
    toggleFlag,
    scrollToQuestion,
    speakQuestion,
    confirmSubmit,
    submitExam,
    toggleOmrPanel,
    shuffleArray,
    switchSolutionTab
  };
})();

// Expose shuffleArray globally for MegaBankEngine & BankBrowser
window.shuffleArray = window.ExamEngine.shuffleArray;
