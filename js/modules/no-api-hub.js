/**
 * Horwang M.1 AI Exam Master - No-API Bridge & Custom Exam Importer
 * Enables 100% Free Web AI (ChatGPT / Gemini.com / Claude) Copy-Paste & Custom JSON Import without API Key!
 */

window.NoApiHub = (function() {
  function getCopyablePrompt(subject = 'all', track = 'gifted', difficulty = 2, count = 20, topic = '') {
    const subjName = window.HORWANG_CONFIG.SUBJECTS[subject]?.name || 'รวม 5 วิชาหลัก';
    return `จงทำหน้าที่เป็นครูผู้เชี่ยวชาญการออกข้อสอบคัดเลือกเข้า ม.1 โรงเรียนหอวัง (Horwang School M.1 Entrance Exam)
ออกข้อสอบ 4 ตัวเลือกสำหรับนักเรียน ป.5 จำนวน ${count} ข้อ โดยมีรายละเอียดดังนี้:

- กลุ่มวิชา: ${subjName} (เกลี่ยให้ครบทุกวิชาอย่างสมดุล)
- ระดับห้องเรียน: ${track === 'gifted' ? 'ห้องเรียนพิเศษ Gifted / EP' : 'ห้องเรียนปกติ'}
- ระดับความยาก: ระดับ ${difficulty} (ข้อสอบแข่งขันพร้อมจุดหลอกและวิธีคิดเร็ว)
${topic ? `- หัวข้อที่เน้นเป็นพิเศษ: ${topic}` : ''}

ตอบกลับมาเป็นรูปแบบ JSON Array แท้ๆ เท่านั้น (ห้ามมีคำอธิบายอื่นนอกเหนือจาก JSON) ตาม Schema นี้:
[
  {
    "id": "q1",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": ${difficulty},
    "topic": "ชื่อหัวข้อย่อย",
    "question": "ข้อความโจทย์...",
    "options": ["ตัวเลือก ก", "ตัวเลือก ข", "ตัวเลือก ค", "ตัวเลือก ง"],
    "correctAnswer": 0,
    "explanation": "เฉลยวิธีคิดทีละสเต็ปอย่างละเอียด",
    "trap": "จุดหลอก/กับดักข้อสอบที่นักเรียนชอบผิด",
    "shortcutTrick": "สูตรลัดหรือเทคนิคคิดเร็ว"
  }
]`;
  }

  function copyPromptToClipboard() {
    window.SoundEngine.click();
    const subject = document.getElementById('select-subject')?.value || 'all';
    const track = document.getElementById('select-track')?.value || 'gifted';
    const difficulty = parseInt(document.getElementById('select-difficulty')?.value || '2', 10);
    const count = parseInt(document.getElementById('select-count')?.value || '20', 10);
    const topic = document.getElementById('custom-topic-input')?.value?.trim() || '';

    const promptText = getCopyablePrompt(subject, track, difficulty, count, topic);
    navigator.clipboard.writeText(promptText).then(() => {
      alert("📋 คัดลอกคำสั่ง Prompt เรียบร้อยแล้ว!\n\nคุณสามารถนำไปวางใน ChatGPT (chatgpt.com), Gemini ฟรี (gemini.google.com) หรือ Claude ได้ทันที เมื่อได้ผลลัพธ์แล้วให้นำข้อความ JSON มาวางในช่อง 'นำเข้าข้อสอบจาก AI' ได้เลยครับ");
    }).catch(err => {
      prompt("กรุณาคัดลอกคำสั่งด้านล่างนี้ไปวางใน Web AI ฟรี:", promptText);
    });
  }

  function importJsonExam(jsonString) {
    try {
      let cleanJson = jsonString.trim();
      cleanJson = cleanJson.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
      const parsed = JSON.parse(cleanJson);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error("รูปแบบ JSON ไม่ถูกต้อง (ต้องเป็น Array ของคำถาม)");
      }
      return parsed;
    } catch (e) {
      throw new Error("ไม่สามารถอ่านรูปแบบ JSON ได้: " + e.message);
    }
  }

  function handleImportSubmit() {
    window.SoundEngine.click();
    const textarea = document.getElementById('import-json-textarea');
    const content = textarea ? textarea.value.trim() : '';
    if (!content) {
      alert("กรุณาวางข้อความ JSON ที่ได้จาก AI ลงในช่องข้อความ");
      return;
    }

    try {
      const questions = importJsonExam(content);
      closeImportModal();
      window.ExamEngine.startExam(questions, `ชุดข้อสอบนำเข้า (${questions.length} ข้อ)`);
      if (textarea) textarea.value = '';
    } catch (err) {
      alert("⚠️ เกิดข้อผิดพลาด: " + err.message + "\n\nกรุณาตรวจสอบว่าคุณได้คัดลอกข้อความ JSON มาครบถ้วน");
    }
  }

  return {
    getCopyablePrompt,
    copyPromptToClipboard,
    importJsonExam,
    handleImportSubmit
  };
})();
