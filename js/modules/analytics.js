/**
 * Horwang M.1 AI Exam Master - Analytics & Roadmap Module
 */

window.AnalyticsEngine = (function() {
  let chartInstance = null;

  function renderView() {
    const history = window.APP_STATE.examHistory || [];
    const countEl = document.getElementById('metric-exams-count');
    if (countEl) countEl.innerText = history.length;

    if (history.length > 0) {
      const avg = history.reduce((acc, curr) => acc + parseFloat(curr.percentage), 0) / history.length;
      const avgScoreEl = document.getElementById('metric-avg-score');
      const avgSubEl = document.getElementById('metric-avg-sub');
      if (avgScoreEl) avgScoreEl.innerText = `${avg.toFixed(1)}%`;
      if (avgSubEl) {
        avgSubEl.innerText = avg >= window.HORWANG_CONFIG.BENCHMARKS.GIFTED_PASS_PCT 
          ? 'อยู่ในเกณฑ์ Gifted 🌟' 
          : (avg >= window.HORWANG_CONFIG.BENCHMARKS.REGULAR_PASS_PCT ? 'อยู่ในเกณฑ์ห้องปกติ 👍' : 'ต้องเร่งสะสมพื้นฐาน 💪');
      }
    } else {
      const avgScoreEl = document.getElementById('metric-avg-score');
      if (avgScoreEl) avgScoreEl.innerText = "0%";
      const avgSubEl = document.getElementById('metric-avg-sub');
      if (avgSubEl) avgSubEl.innerText = "เกณฑ์ Gifted: ≥80%";
    }

    // Aggregate Subject Strengths
    const subjectTotals = { math: { c: 0, t: 0 }, science: { c: 0, t: 0 }, english: { c: 0, t: 0 }, thai: { c: 0, t: 0 }, social: { c: 0, t: 0 } };
    history.forEach(h => {
      if (h.subjectStats) {
        for (let s in h.subjectStats) {
          if (subjectTotals[s]) {
            subjectTotals[s].c += h.subjectStats[s].correct;
            subjectTotals[s].t += h.subjectStats[s].total;
          }
        }
      }
    });

    const hasAnyHistory = history.length > 0;
    const subjectPcts = {
      math: subjectTotals.math.t > 0 ? (subjectTotals.math.c / subjectTotals.math.t) * 100 : (hasAnyHistory ? 0 : 0),
      science: subjectTotals.science.t > 0 ? (subjectTotals.science.c / subjectTotals.science.t) * 100 : (hasAnyHistory ? 0 : 0),
      english: subjectTotals.english.t > 0 ? (subjectTotals.english.c / subjectTotals.english.t) * 100 : (hasAnyHistory ? 0 : 0),
      thai: subjectTotals.thai.t > 0 ? (subjectTotals.thai.c / subjectTotals.thai.t) * 100 : (hasAnyHistory ? 0 : 0),
      social: subjectTotals.social.t > 0 ? (subjectTotals.social.c / subjectTotals.social.t) * 100 : (hasAnyHistory ? 0 : 0)
    };

    const bestEl = document.getElementById('metric-best-subject');
    const weakEl = document.getElementById('metric-weak-subject');

    if (hasAnyHistory) {
      const sorted = Object.entries(subjectPcts).sort((a, b) => b[1] - a[1]);
      const bestSubj = window.HORWANG_CONFIG.SUBJECTS[sorted[0][0]]?.name || sorted[0][0];
      const weakSubj = window.HORWANG_CONFIG.SUBJECTS[sorted[sorted.length - 1][0]]?.name || sorted[sorted.length - 1][0];
      if (bestEl) bestEl.innerText = `${bestSubj} (${sorted[0][1].toFixed(0)}%)`;
      if (weakEl) weakEl.innerText = `${weakSubj} (${sorted[sorted.length - 1][1].toFixed(0)}%)`;
    } else {
      if (bestEl) bestEl.innerText = "-";
      if (weakEl) weakEl.innerText = "-";
    }

    renderChart(subjectPcts);
    renderRoadmap();
  }

  function renderChart(subjectPcts) {
    const ctx = document.getElementById('subjectMasteryChart');
    if (!ctx || !window.Chart) return;

    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ', 'ภาษาไทย', 'สังคมศึกษา'],
        datasets: [{
          label: 'ความแม่นยำ (%)',
          data: [subjectPcts.math, subjectPcts.science, subjectPcts.english, subjectPcts.thai, subjectPcts.social],
          backgroundColor: [
            'rgba(123, 0, 28, 0.85)',
            'rgba(16, 185, 129, 0.85)',
            'rgba(14, 165, 233, 0.85)',
            'rgba(245, 176, 29, 0.85)',
            'rgba(139, 92, 246, 0.85)'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { callback: v => v + '%' }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    if (!container) return;

    container.innerHTML = window.HORWANG_CONFIG.ROADMAP_STAGES.map(stage => `
      <div class="p-3.5 rounded-2xl border ${stage.containerClass} space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-bold font-heading text-xs">${stage.title}</span>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold ${stage.badgeClass}">${stage.badge}</span>
        </div>
        <p class="text-xs leading-relaxed font-sarabun opacity-90">${stage.desc}</p>
      </div>
    `).join('');
  }

  function resetAllScoresAndHistory() {
    window.SoundEngine.click();
    const confirmed = confirm("⚠️ คุณต้องการล้างคะแนนสะสม (แต้มดาว) และประวัติการทำข้อสอบทั้งหมดเพื่อเริ่มใหม่หรือไม่?");
    if (!confirmed) return;

    window.APP_STATE.userXp = 0;
    window.APP_STATE.examHistory = [];
    localStorage.removeItem('hw_user_xp');
    localStorage.removeItem('hw_exam_history');
    localStorage.removeItem('hw_mistake_vault');

    // Update Header XP Display
    const xpEl = document.getElementById('user-xp-display');
    if (xpEl) xpEl.innerText = "0 แต้ม";

    renderView();
    window.SoundEngine.success();
    alert("✨ ล้างคะแนนสะสมและประวัติทั้งหมดเรียบร้อยแล้ว เริ่มต้นฝึกชุดใหม่ได้เลยครับ!");
  }

  return {
    renderView,
    resetAllScoresAndHistory,
    clearHistory: resetAllScoresAndHistory
  };
})();
