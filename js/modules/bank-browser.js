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
      questions = questions.filter(q => q.difficulty === difficulty);
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

      return `
        <div class="clean-card p-5 space-y-3.5 border ${isSelected ? 'border-horwang-maroon ring-2 ring-horwang-maroon/20' : 'border-slate-200'}">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${subjConfig.badgeClass}">
                ${q.subjectName || subjConfig.name}
              </span>
              <span class="text-xs text-slate-500 font-medium">ระดับ ${q.difficulty || 2}</span>
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

          <!-- Solution Accordion -->
          <details class="text-xs sm:text-sm font-sarabun text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-200 cursor-pointer">
            <summary class="font-bold text-horwang-maroon font-heading outline-none">
              <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i>ดูเฉลยละเอียดและเทคนิคคิดเร็ว
            </summary>
            <div class="pt-2.5 pl-2 space-y-2 border-t border-slate-200 mt-2">
              <div class="whitespace-pre-line text-slate-700 leading-relaxed"><strong>วิธีคิด:</strong>\n${window.formatMathText ? window.formatMathText(q.explanation) : q.explanation}</div>
              ${q.trap ? `<div class="text-rose-700 bg-rose-50 p-2 rounded-lg border border-rose-200"><strong>จุดหลอก:</strong> ${q.trap}</div>` : ''}
              ${q.shortcutTrick ? `<div class="text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200"><strong>สูตรลัด:</strong> ${q.shortcutTrick}</div>` : ''}
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

  return {
    renderView,
    toggleSelectQuestion,
    selectAllFiltered,
    clearSelection,
    startSelectedExam,
    exportBankAsJson
  };
})();
