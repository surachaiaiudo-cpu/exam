/**
 * Horwang M.1 AI Exam Master - Gemini AI Engine
 */

window.AiEngine = (function() {
  async function generateExamQuestions(subject, track, difficulty, count, customTopic) {
    const apiKey = (window.APP_STATE && window.APP_STATE.apiKey ? window.APP_STATE.apiKey.trim() : '');
    if (!apiKey) {
      throw new Error("NO_API_KEY");
    }

    const promptSystem = `You are a master Thai curriculum test creator specializing in prestigious secondary school entrance exams (Horwang School M.1 entrance examination - โรงเรียนหอวัง).
Create high-quality, authentic multiple-choice exam questions suitable for Grade 5 students preparing for Horwang Grade 7 (M.1) entrance exam.

SPECIFICATIONS:
- Subject: ${subject === 'all' ? 'Comprehensive 5 Core Subjects (Math, Science, English, Thai, Social Studies distributed equally)' : subject}
- Target Track: ${track === 'gifted' ? 'Gifted / English Program (Advanced competition style with traps and shortcuts)' : 'Regular Program'}
- Difficulty Level: ${difficulty} (1 = Solid G.5 foundation, 2 = G.5 applied + early G.6, 3 = Advanced Horwang real exam style)
- Number of Questions: ${count}
${customTopic ? `- Specific Focus Topic: ${customTopic}` : ''}

You MUST return a STRICT JSON array of objects with the exact schema:
[
  {
    "id": "q1",
    "subject": "math|science|english|thai|social",
    "subjectName": "ชื่อวิชาภาษาไทย เช่น คณิตศาสตร์, วิทยาศาสตร์",
    "track": "ห้องเรียนพิเศษ Gifted หรือ ห้องเรียนปกติ",
    "difficulty": 1-3,
    "topic": "หัวข้อย่อย",
    "question": "ข้อความโจทย์ภาษาไทย (สามารถใช้ LaTeX เช่น \\( \\frac{1}{2} \\) ได้สำหรับคณิต/วิทย์)",
    "options": ["ตัวเลือก ก", "ตัวเลือก ข", "ตัวเลือก ค", "ตัวเลือก ง"],
    "correctAnswer": 0,
    "explanation": "เฉลยวิธีคิดทีละขั้นตอนอย่างละเอียด (Step-by-step)",
    "trap": "จุดหลอก/กับดักข้อสอบที่นักเรียนชอบผิด",
    "shortcutTrick": "สูตรลัดหรือเทคนิคคิดเร็ว"
  }
]
Do NOT include markdown backticks or any surrounding text, ONLY the pure raw JSON string.`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${window.HORWANG_CONFIG.DEFAULT_MODEL}:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: promptSystem }]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.4
      }
    };

    // Exponential Backoff Retry (1s, 2s, 4s, 8s, 16s)
    const maxRetries = 4;
    let delay = 1000;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          const errData = await res.text();
          throw new Error(`HTTP ${res.status}: ${errData}`);
        }

        const data = await res.json();
        const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!candidateText) throw new Error("Empty candidate response from Gemini API");

        const cleanJson = candidateText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
        const parsedQuestions = JSON.parse(cleanJson);
        if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
          throw new Error("Invalid questions array returned");
        }
        return parsedQuestions;
      } catch (err) {
        console.warn(`Gemini API attempt ${attempt + 1} failed:`, err);
        if (attempt === maxRetries) throw err;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  }

  async function analyzeStudyClubQuestion(subject, title, content) {
    const apiKey = (window.APP_STATE && window.APP_STATE.apiKey ? window.APP_STATE.apiKey.trim() : '');
    if (!apiKey) {
      return {
        trap: `จุดหลอกที่ควรระวังในวิชา ${subject} คือการตีความโจทย์ไม่ครบถ้วนและลืมเช็คเงื่อนไขขอบเขต`,
        shortcut: "คำแนะนำ AI: แยกองค์ประกอบของสิ่งที่โจทย์กำหนดให้ กับสิ่งที่โจทย์ถาม แล้วใช้สูตรลัดหรือตัดตัวเลือกที่ไม่สมเหตุสมผลออกก่อน"
      };
    }

    const promptText = `As Horwang School Entrance Exam Research Specialist, analyze this question asked by a Grade 5 student:
Subject: ${subject}
Question Title: ${title}
Content: ${content}

Provide a short, punchy JSON response with:
{
  "trap": "Thai explanation of the most common trap/pitfall for this type of problem (1-2 sentences)",
  "shortcut": "Thai shortcut formula, quick mental math trick, or mnemonic rule (1-2 sentences)"
}`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${window.HORWANG_CONFIG.DEFAULT_MODEL}:generateContent?key=${apiKey}`;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: promptText }] }],
          generationConfig: { responseMimeType: "application/json", temperature: 0.3 }
        })
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return JSON.parse(text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim());
        }
      }
    } catch (e) {
      console.warn("AI Analysis error:", e);
    }

    return {
      trap: `จุดหลอกที่ควรระวังในวิชา ${subject} คือการตีความโจทย์ไม่ครบถ้วนและลืมเช็คเงื่อนไขขอบเขต`,
      shortcut: "คำแนะนำ AI: แยกองค์ประกอบของสิ่งที่โจทย์กำหนดให้ กับสิ่งที่โจทย์ถาม แล้วใช้สูตรลัดหรือตัดตัวเลือกที่ไม่สมเหตุสมผลออกก่อน"
    };
  }

  return {
    generateExamQuestions,
    analyzeStudyClubQuestion
  };
})();
