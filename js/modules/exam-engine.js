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
      const hybridBadge = q.hybridBadge || (q.track && q.track.includes("Gifted") ? "🏆 ข้อสอบจริง Gifted หอวัง" : "📚 คลังข้อสอบมาตรฐาน");

      return `
        <div id="question-card-${idx}" class="question-card bg-white rounded-3xl p-6 sm:p-7 shadow-sm border-2 border-slate-200 space-y-4 transition hover:border-horwang-maroon/40 card-kid">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-horwang-darkMaroon to-horwang-maroon text-white font-heading font-black text-sm flex items-center justify-center shadow-md ring-2 ring-horwang-maroon/20">
                ${idx + 1}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold ${subjConfig.badgeClass}">
                ${q.subjectName || subjConfig.name}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                ${hybridBadge}
              </span>
              <span class="text-xs text-slate-400 font-medium">ระดับ ${q.difficulty || 2}</span>
            </div>
            
            <div class="flex items-center space-x-2">
              <button onclick="window.ExamEngine.speakQuestion(${idx})" id="speak-btn-${idx}" title="อ่านโจทย์ให้ฟัง" class="text-slate-500 hover:text-horwang-maroon px-2.5 py-1.5 rounded-xl hover:bg-rose-50 transition text-xs font-bold flex items-center space-x-1 border border-slate-200 btn-kid">
                <i class="fa-solid fa-volume-high text-amber-500"></i>
                <span class="hidden sm:inline">ฟังโจทย์</span>
              </button>
              <button onclick="window.ExamEngine.toggleFlag(${idx})" id="flag-btn-${idx}" title="ปักหมุดข้อที่ต้องการทบทวน" class="text-slate-400 hover:text-amber-500 p-2 rounded-xl hover:bg-slate-100 transition text-sm">
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>

          <div class="text-base sm:text-lg font-medium text-slate-800 leading-relaxed font-sarabun" id="q-text-${idx}">
            ${q.question}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            ${q.options.map((opt, optIdx) => `
              <button onclick="window.ExamEngine.selectAnswer(${idx}, ${optIdx})" id="opt-${idx}-${optIdx}" class="option-btn text-left p-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-horwang-maroon/50 hover:bg-rose-50/50 text-sm sm:text-base font-sarabun text-slate-700 transition flex items-start space-x-3 group">
                <span id="opt-badge-${idx}-${optIdx}" class="w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-horwang-maroon text-xs font-black font-heading flex items-center justify-center shrink-0 mt-0.5 text-slate-500 group-hover:text-horwang-maroon bg-white shadow-sm transition">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <span class="leading-relaxed flex-1">${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    if (window.renderMathInBody) {
      renderMathInBody(container);
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

    // Update XP
    const earnedXp = correctCount * 20 + 50;
    window.APP_STATE.userXp += earnedXp;
    localStorage.setItem('hw_user_xp', window.APP_STATE.userXp.toString());
    const xpDisplay = document.getElementById('user-xp-display');
    if (xpDisplay) xpDisplay.innerText = `${window.APP_STATE.userXp} แต้ม`;

    // Save history
    const historyEntry = {
      date: new Date().toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }),
      title: document.getElementById('active-exam-title')?.innerText || "ชุดข้อสอบหอวัง",
      score: correctCount,
      total: questions.length,
      percentage: percentage.toFixed(1),
      timeUsed: timeUsedFormatted,
      subjectStats: subjectStats
    };
    window.APP_STATE.examHistory.unshift(historyEntry);
    localStorage.setItem('hw_exam_history', JSON.stringify(window.APP_STATE.examHistory));

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
        <div class="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border-2 ${isCorrect ? 'border-emerald-200' : 'border-rose-200'} space-y-4 card-kid">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="w-9 h-9 rounded-2xl ${isCorrect ? 'bg-emerald-600' : 'bg-rose-600'} text-white font-heading font-black text-sm flex items-center justify-center shadow-md">
                ${idx + 1}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold ${subjConfig.badgeClass}">
                ${q.subjectName || subjConfig.name}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                ${hybridBadge}
              </span>
              <span class="text-xs font-black ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">
                ${isCorrect ? '<i class="fa-solid fa-circle-check mr-1 text-base"></i>ตอบถูกต้อง' : (isAnswered ? '<i class="fa-solid fa-circle-xmark mr-1 text-base"></i>ตอบผิด' : '<i class="fa-solid fa-circle-minus mr-1 text-base"></i>ไม่ได้ตอบ')}
              </span>
            </div>

            <button onclick="window.StudyClub.sendQuestionFromExam(${idx})" class="px-3.5 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold font-heading border border-sky-200 transition flex items-center space-x-1.5 btn-kid">
              <i class="fa-solid fa-paper-plane text-sky-500"></i>
              <span>ส่งถามเพื่อนในคลับ</span>
            </button>
          </div>

          <div class="text-base sm:text-lg font-bold text-slate-800 font-sarabun">
            ${q.question}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-sarabun">
            ${q.options.map((opt, optIdx) => {
              let style = "bg-slate-50 border-slate-200 text-slate-600";
              let icon = "";
              if (optIdx === q.correctAnswer) {
                style = "bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-400/30";
                icon = '<i class="fa-solid fa-check text-emerald-600 text-base ml-auto"></i>';
              } else if (optIdx === userChoice && !isCorrect) {
                style = "bg-rose-50 border-2 border-rose-400 text-rose-950 line-through";
                icon = '<i class="fa-solid fa-xmark text-rose-500 text-base ml-auto"></i>';
              }
              return `
                <div class="p-3.5 rounded-2xl border ${style} flex items-center justify-between">
                  <span><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}</span>
                  ${icon}
                </div>
              `;
            }).join('')}
          </div>

          <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3.5 font-sarabun text-sm sm:text-base">
            <div class="font-black text-horwang-maroon font-heading flex items-center space-x-2 text-sm">
              <i class="fa-solid fa-lightbulb text-amber-500 text-base"></i>
              <span>เฉลยวิธีคิดทีละขั้นตอน (Step-by-step):</span>
            </div>
            <div class="text-slate-700 whitespace-pre-line leading-relaxed pl-3 border-l-4 border-amber-400">
              ${q.explanation}
            </div>

            ${q.trap ? `
              <div class="p-3.5 bg-rose-50/80 border border-rose-200 rounded-2xl text-xs sm:text-sm text-rose-900 space-y-1">
                <strong class="font-heading flex items-center space-x-1.5 text-rose-950 font-black">
                  <i class="fa-solid fa-triangle-exclamation text-rose-500"></i>
                  <span>จุดหลอก / กับดักข้อสอบที่ต้องระวัง:</span>
                </strong>
                <p class="leading-relaxed pl-5">${q.trap}</p>
              </div>
            ` : ''}

            ${q.shortcutTrick ? `
              <div class="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-950 space-y-1">
                <strong class="font-heading flex items-center space-x-1.5 text-amber-900 font-black">
                  <i class="fa-solid fa-bolt text-amber-500"></i>
                  <span>สูตรลัดพี่ฮูก / เทคนิคคิดเร็ว:</span>
                </strong>
                <p class="leading-relaxed pl-5">${q.shortcutTrick}</p>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    if (window.renderMathInBody) {
      renderMathInBody(container);
    }
  }

  function toggleOmrPanel() {
    window.SoundEngine.click();
    const sidebar = document.getElementById('digital-omr-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }

  return {
    startExam,
    selectAnswer,
    toggleFlag,
    scrollToQuestion,
    speakQuestion,
    confirmSubmit,
    submitExam,
    toggleOmrPanel
  };
})();
