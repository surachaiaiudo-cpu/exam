/**
 * Horwang M.1 AI Exam Master - Printable PDF Worksheet & OMR Generator
 */

window.OmrPrinter = (function() {
  function printCurrentExam() {
    window.SoundEngine.click();
    const questions = window.APP_STATE.currentExam || window.QUESTIONS_DB;
    const title = document.getElementById('active-exam-title')?.innerText || "แบบทดสอบจำลองสอบเข้า ม.1 โรงเรียนหอวัง";
    const printContainer = document.getElementById('printable-exam-sheet');
    if (!printContainer) return;

    printContainer.innerHTML = `
      <div style="font-family: 'Sarabun', sans-serif; color: #1e293b; line-height: 1.45;">
        <!-- Header -->
        <div style="text-align: center; border-bottom: 2px solid #7B001C; padding-bottom: 12px; margin-bottom: 18px;">
          <h2 style="font-size: 22px; font-weight: bold; margin: 0; color: #7B001C; font-family: 'Prompt', sans-serif;">
            🎓 โรงเรียนหอวัง (Horwang School)
          </h2>
          <h3 style="font-size: 16px; font-weight: 600; margin: 6px 0; color: #334155; font-family: 'Prompt', sans-serif;">
            ${title}
          </h3>
          <div style="font-size: 13px; margin-top: 8px; display: flex; justify-content: space-between; border-top: 1px dashed #cbd5e1; padding-top: 6px;">
            <span>ชื่อ-นามสกุล: ............................................................................</span>
            <span>ชั้น ป.5 / ......</span>
            <span>เลขที่: ..........</span>
            <span>วันที่: ....................</span>
          </div>
        </div>

        <!-- 2 Columns Layout for Questions -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 12.5px;">
          ${questions.map((q, idx) => `
            <div style="page-break-inside: avoid; margin-bottom: 8px; border: 1px solid #e2e8f0; padding: 10px; border-radius: 8px; background-color: #fafafa;">
              <div style="font-weight: bold; margin-bottom: 4px; color: #7B001C; font-family: 'Prompt', sans-serif;">
                ข้อที่ ${idx + 1} [${q.subjectName || window.HORWANG_CONFIG.SUBJECTS[q.subject]?.name || 'วิชาการ'}]
              </div>
              <div style="margin-bottom: 8px; color: #1e293b;">${q.question}</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
                ${q.options.map((opt, optIdx) => `
                  <div style="padding: 2px 4px;">
                    <strong>(${String.fromCharCode(65 + optIdx)})</strong> ${opt}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- OMR Answer Sheet Section at Bottom -->
        <div style="page-break-before: always; margin-top: 25px; border: 2px solid #0f172a; padding: 18px; border-radius: 8px; background: white;">
          <div style="text-align: center; margin-bottom: 12px;">
            <h3 style="font-size: 18px; font-weight: bold; margin: 0; color: #7B001C; font-family: 'Prompt', sans-serif;">
              กระดาษคำตอบ OMR (มาตรฐานสอบเข้า ม.1 โรงเรียนหอวัง)
            </h3>
            <p style="font-size: 12px; color: #475569; margin: 4px 0 0 0;">
              คำสั่ง: ให้ใช้ดินสอ 2B ฝนทับในวงกลมตัวเลือกที่ถูกต้องที่สุดเพียงตัวเลือกเดียวให้ดำสนิทเต็มวง
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            ${Array.from({ length: Math.ceil(questions.length / 5) }, (_, colIdx) => `
              <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px; background-color: #f8fafc;">
                ${Array.from({ length: Math.min(5, questions.length - colIdx * 5) }, (_, rowIdx) => {
                  const qNum = colIdx * 5 + rowIdx + 1;
                  return `
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; border-bottom: 1px dotted #cbd5e1; padding-bottom: 3px;">
                      <span style="font-weight: bold; width: 25px; font-family: 'Prompt', sans-serif;">${qNum}.</span>
                      <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #334155; border-radius: 50%; text-align: center; line-height: 15px; font-size: 10px; font-weight: bold;">A</span>
                      <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #334155; border-radius: 50%; text-align: center; line-height: 15px; font-size: 10px; font-weight: bold;">B</span>
                      <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #334155; border-radius: 50%; text-align: center; line-height: 15px; font-size: 10px; font-weight: bold;">C</span>
                      <span style="display: inline-block; width: 18px; height: 18px; border: 1.5px solid #334155; border-radius: 50%; text-align: center; line-height: 15px; font-size: 10px; font-weight: bold;">D</span>
                    </div>
                  `;
                }).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    if (window.renderMathInBody) {
      renderMathInBody(printContainer);
    }

    window.print();
  }

  return {
    printCurrentExam
  };
})();
