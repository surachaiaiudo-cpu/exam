/**
 * Horwang M.1 AI Exam Master - Question Bank Browser & Custom Exam Builder
 */

window.BankBrowser = (function() {
  let selectedQuestionIds = new Set();

  function renderView() {
    const container = document.getElementById('bank-questions-grid');
    if (!container) return;

    const subject = document.getElementById('bank-filter-subject')?.value || 'all';
    const difficulty = parseInt(document.getElementById('bank-filter-difficulty')?.value || '0', 10);
    const keyword = document.getElementById('bank-search-input')?.value?.trim() || '';

    let questions = window.MegaBankEngine.getAllBankQuestions();

    if (subject !== 'all') {
      questions = questions.filter(q => q.subject === subject);
    }
    if (difficulty > 0) {
      questions = questions.filter(q => q.difficulty === difficulty || q.level === 'L' + difficulty);
    }
    if (keyword) {
      const kw = keyword.toLowerCase();
      questions = questions.filter(q => 
        (q.question && q.question.toLowerCase().includes(kw)) ||
        (q.topic && q.topic.toLowerCase().includes(kw)) ||
        (q.explanation && q.explanation.toLowerCase().includes(kw))
      );
    }

    const countBadge = document.getElementById('bank-found-count');
    if (countBadge) countBadge.innerText = `${questions.length} ข้อ`;

    container.innerHTML = questions.map((q, idx) => {
      const isSelected = selectedQuestionIds.has(q.id || `q-${idx}`);
      const subjConfig = window.HORWANG_CONFIG.SUBJECTS[q.subject] || { name: q.subjectName || "ทั่วไป", badgeClass: "bg-slate-100 text-slate-700" };
      const levelLabel = q.level ? `ระดับ ${q.level}` : `ระดับ ${q.difficulty || 2}`;

      return `
        <div class="clean-card p-5 space-y-3.5 border ${isSelected ? 'border-horwang-maroon ring-2 ring-horwang-maroon/20' : 'border-slate-200'}">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${subjConfig.badgeClass}">
                ${q.subjectName || subjConfig.name}
              </span>
              <span class="text-xs bg-slate-900 text-white font-bold px-2 py-0.5 rounded-lg">${levelLabel}</span>
              ${q.topic ? `<span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">${q.topic}</span>` : ''}
            </div>
            <div class="flex items-center space-x-2">
              <button onclick="BankBrowser.toggleSelectQuestion('${q.id || `q-${idx}`}')" class="px-2.5 py-1 rounded-lg text-xs font-bold font-heading transition ${isSelected ? 'bg-horwang-maroon text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
                ${isSelected ? '<i class="fa-solid fa-check mr-1"></i>เลือกแล้ว' : '+ เลือกข้อนี้'}
              </button>
            </div>
          </div>

          <div class="text-sm sm:text-base font-medium text-slate-800 font-sarabun leading-relaxed">
            ${window.formatMathText ? window.formatMathText(q.question) : q.question}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-sarabun">
            ${q.options.map((opt, optIdx) => `
              <div class="p-2.5 rounded-xl border ${optIdx === q.correctAnswer ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-600'}">
                <strong>(${String.fromCharCode(65 + optIdx)})</strong> ${window.formatMathText ? window.formatMathText(opt) : opt}
              </div>
            `).join('')}
          </div>

          <!-- 3-Pillar Interactive Solution Details -->
          <details class="text-xs sm:text-sm font-sarabun text-slate-600 bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden">
            <summary class="font-bold text-horwang-maroon font-heading p-3.5 cursor-pointer hover:bg-slate-100/60 transition flex items-center justify-between outline-none">
              <span class="flex items-center space-x-1.5">
                <i class="fa-solid fa-lightbulb text-amber-500"></i>
                <span>ดูเฉลย ๓ มิติ (💡 วิธีคิด | 📝 วิธีทำ | ⚡ สูตรลัด)</span>
              </span>
              <span class="text-xs text-slate-400 font-normal">แตะเพื่อเปิด/ปิด</span>
            </summary>
            
            <div class="p-3.5 pt-0 space-y-3 border-t border-slate-200 bg-white">
              <!-- Solution Tab Navigation -->
              <div class="flex items-center bg-slate-100 p-1 rounded-xl gap-1 overflow-x-auto text-xs font-heading font-bold select-none mt-2">
                <button type="button" onclick="window.BankBrowser.switchTab('${idx}', 'concept')" id="bank-sol-btn-${idx}-concept" class="px-2.5 py-1 rounded-lg transition bg-amber-400 text-slate-950 shadow-sm text-xs">
                  💡 วิธีคิด
                </button>
                <button type="button" onclick="window.BankBrowser.switchTab('${idx}', 'steps')" id="bank-sol-btn-${idx}-steps" class="px-2.5 py-1 rounded-lg transition text-slate-600 hover:bg-slate-200 text-xs">
                  📝 วิธีทำละเอียด
                </button>
                <button type="button" onclick="window.BankBrowser.switchTab('${idx}', 'hack')" id="bank-sol-btn-${idx}-hack" class="px-2.5 py-1 rounded-lg transition text-slate-600 hover:bg-slate-200 text-xs">
                  ⚡ สูตรลัด & จุดหลอก
                </button>
              </div>

              <!-- Content 1: Concept -->
              <div id="bank-sol-content-${idx}-concept" class="space-y-1.5 text-xs sm:text-sm">
                <div class="font-bold text-amber-950 text-xs">💡 วิธีคิด & ตรรกะเบื้องหลัง:</div>
                <div class="text-slate-800 bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 leading-relaxed">
                  ${window.formatMathText ? window.formatMathText(q.thinkingConcept || `ทำความเข้าใจแก่น Concept ของหัวข้อ ${q.topic || 'บทเรียน'}: วิเคราะห์ความสัมพันธ์ของสิ่งที่โจทย์กำหนดให้เพื่อวางแผนขั้นตอนการแก้ปัญหา`) : q.thinkingConcept}
                </div>
              </div>

              <!-- Content 2: Steps -->
              <div id="bank-sol-content-${idx}-steps" class="hidden space-y-1.5 text-xs sm:text-sm">
                <div class="font-bold text-sky-950 text-xs">📝 ขั้นตอนแสดงวิธีทำมาตรฐาน:</div>
                <div class="text-slate-800 bg-sky-50/70 p-3 rounded-xl border border-sky-200/80 leading-relaxed whitespace-pre-line">
                  ${window.formatMathText ? window.formatMathText(q.formalSteps || q.explanation) : (q.formalSteps || q.explanation)}
                </div>
              </div>

              <!-- Content 3: Hacks & Traps -->
              <div id="bank-sol-content-${idx}-hack" class="hidden space-y-2 text-xs sm:text-sm">
                <div class="p-2.5 bg-emerald-50/80 border border-emerald-300 rounded-xl text-emerald-950 space-y-1">
                  <strong class="font-bold text-emerald-800 block text-xs">⚡ สูตรลัด 15 วิ / ทริกตัดช้อยส์:</strong>
                  <div>${window.formatMathText ? window.formatMathText(q.shortcutTrick || 'สังเกตคีย์เวิร์ดสำคัญและตัดตัวเลือกที่ไม่สอดคล้องออกทันที') : q.shortcutTrick}</div>
                </div>
                <div class="p-2.5 bg-rose-50/80 border border-rose-300 rounded-xl text-rose-950 space-y-1">
                  <strong class="font-bold text-rose-800 block text-xs">⚠️ จุดหลอกที่ต้องระวัง:</strong>
                  <div>${window.formatMathText ? window.formatMathText(q.trap || 'ระวังการสับสนคำที่มีความหมายใกล้เคียง หรือลืมตรวจทานเงื่อนไข') : q.trap}</div>
                </div>
              </div>
            </div>
          </details>
        </div>
      `;
    }).join('');

    updateSelectedCount();
    if (window.renderAllMath) window.renderAllMath(container);
  }

  function toggleSelectQuestion(id) {
    window.SoundEngine.click();
    if (selectedQuestionIds.has(id)) {
      selectedQuestionIds.delete(id);
    } else {
      selectedQuestionIds.add(id);
    }
    renderView();
  }

  function selectAllFiltered() {
    window.SoundEngine.click();
    const all = window.MegaBankEngine.getAllBankQuestions();
    all.forEach((q, idx) => selectedQuestionIds.add(q.id || `q-${idx}`));
    renderView();
  }

  function clearSelection() {
    window.SoundEngine.click();
    selectedQuestionIds.clear();
    renderView();
  }

  function updateSelectedCount() {
    const el = document.getElementById('bank-selected-count-badge');
    if (el) el.innerText = `${selectedQuestionIds.size} ข้อที่เลือก`;
    const btn = document.getElementById('btn-start-selected-exam');
    if (btn) {
      btn.disabled = selectedQuestionIds.size === 0;
      if (selectedQuestionIds.size === 0) {
        btn.classList.add('opacity-50', 'pointer-events-none');
      } else {
        btn.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
  }

  function startSelectedExam() {
    window.SoundEngine.click();
    if (selectedQuestionIds.size === 0) {
      alert("กรุณาเลือกข้อสอบอย่างน้อย 1 ข้อ");
      return;
    }
    const all = window.MegaBankEngine.getAllBankQuestions();
    const selectedQuestions = all.filter((q, idx) => selectedQuestionIds.has(q.id || `q-${idx}`));
    window.ExamEngine.startExam(selectedQuestions, `ชุดข้อสอบเลือกเอง (${selectedQuestions.length} ข้อ)`);
  }

  function exportBankAsJson() {
    window.SoundEngine.click();
    const all = window.MegaBankEngine.getAllBankQuestions();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(all, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "horwang_m1_mega_bank_export.json");
    dlAnchorElem.click();
  }

  function switchTab(idx, tabName) {
    window.SoundEngine.click();
    const tabs = ['concept', 'steps', 'hack'];
    const btns = {
      concept: document.getElementById(`bank-sol-btn-${idx}-concept`),
      steps: document.getElementById(`bank-sol-btn-${idx}-steps`),
      hack: document.getElementById(`bank-sol-btn-${idx}-hack`)
    };

    tabs.forEach(t => {
      const content = document.getElementById(`bank-sol-content-${idx}-${t}`);
      const btn = btns[t];
      if (t === tabName) {
        content?.classList.remove('hidden');
        if (btn) {
          const bgColors = {
            concept: 'bg-amber-400 text-slate-950 shadow-sm',
            steps: 'bg-sky-500 text-white shadow-sm',
            hack: 'bg-emerald-600 text-white shadow-sm'
          };
          btn.className = `px-2.5 py-1 rounded-lg transition ${bgColors[t]} text-xs font-bold`;
        }
      } else {
        content?.classList.add('hidden');
        if (btn) btn.className = 'px-2.5 py-1 rounded-lg transition text-slate-600 hover:bg-slate-200 text-xs font-bold';
      }
    });
  }

  return {
    renderView,
    toggleSelectQuestion,
    selectAllFiltered,
    clearSelection,
    startSelectedExam,
    exportBankAsJson,
    switchTab
  };
})();
