/**
 * Enhanced Master Question Bank Generator (776 Questions)
 * Adds 3-Pillar Learning Fields:
 * - thinkingConcept (วิธีคิด & ตรรกะเบื้องหลัง)
 * - formalSteps (ขั้นตอนการแสดงวิธีทำมาตรฐาน)
 * - shortcutTrick (เทคนิคลัด 15 วิ & สูตรลัด)
 * - trap (จุดหลอกที่พบบ่อย)
 */

const fs = require('fs');
const path = require('path');

function decodeCP874(buf) {
  let str = '';
  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    if (b < 0x80) {
      str += String.fromCharCode(b);
    } else if (b >= 0xA1 && b <= 0xFB) {
      str += String.fromCharCode(0x0E00 + (b - 0xA0));
    } else {
      str += ' ';
    }
  }
  return str;
}

function parseCSV(text) {
  const lines = [];
  let row = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i+1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(cur.trim());
      cur = '';
    } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      row.push(cur.trim());
      cur = '';
      if (row.length > 1 && row.some(cell => cell.length > 0)) {
        lines.push(row);
      }
      row = [];
    } else {
      cur += ch;
    }
  }
  if (cur.length > 0 || row.length > 0) {
    row.push(cur.trim());
    if (row.length > 1) lines.push(row);
  }
  return lines;
}

function mapAnsToIndex(ans) {
  if (!ans) return 0;
  const a = ans.trim().toUpperCase();
  if (a === 'A' || a === '1' || a === 'ก') return 0;
  if (a === 'B' || a === '2' || a === 'ข') return 1;
  if (a === 'C' || a === '3' || a === 'ค') return 2;
  if (a === 'D' || a === '4' || a === 'ง') return 3;
  return 0;
}

function mapLevelToDiff(lvl) {
  if (lvl === 'L1') return 1;
  if (lvl === 'L2') return 2;
  if (lvl === 'L3') return 3;
  if (lvl === 'L4') return 4;
  if (lvl === 'L5') return 5;
  if (lvl === 'M') return 2;
  return 2;
}

const dir = 'C:\\Users\\relex\\.gemini\\antigravity\\brain\\faf163db-c8ac-4b48-8603-ce475041110a\\.user_uploaded';
const csvFiles = {
  math: { file: 'media_1788097073205.csv', name: 'คณิตศาสตร์' },
  social: { file: 'media_1788097222041.csv', name: 'สังคมศึกษา' },
  thai: { file: 'media_1788097222047.csv', name: 'ภาษาไทย' },
  science: { file: 'media_1788097222063.csv', name: 'วิทยาศาสตร์' }
};

const allQuestions = [];

for (const [subKey, info] of Object.entries(csvFiles)) {
  const filePath = path.join(dir, info.file);
  const buf = fs.readFileSync(filePath);
  const text = decodeCP874(buf);
  const rows = parseCSV(text);
  const dataRows = rows.slice(1);

  dataRows.forEach((r, idx) => {
    const id = r[0] || `${subKey.toUpperCase()}_${idx+1}`;
    const subject = subKey;
    const subjectName = info.name;
    const topic = r[2] || 'ความรู้ทั่วไป';
    const level = r[3] || (id.includes('_L1_')?'L1':id.includes('_L2_')?'L2':id.includes('_L3_')?'L3':id.includes('_L4_')?'L4':id.includes('_L5_')?'L5':'M');
    const difficulty = mapLevelToDiff(level);
    const track = (difficulty >= 3) ? 'Gifted / ห้องพิเศษ' : 'ห้องเรียนปกติ';
    const question = r[5] || '';
    const options = [r[6] || 'ข้อ ก', r[7] || 'ข้อ ข', r[8] || 'ข้อ ค', r[9] || 'ข้อ ง'];
    const correctAnswer = mapAnsToIndex(r[10]);
    const explanation = r[11] || 'วิเคราะห์ตามหลักการและเนื้อหาของบทเรียน';
    const studyGuide = r[12] || 'อ่านโจทย์และตัดตัวเลือกที่ไม่สอดคล้องออกก่อน';
    
    // Generate 3-Pillar Fields
    let thinkingConcept = `💡 **แนวคิดหลัก (${topic}):** วิเคราะห์ความสัมพันธ์ของสิ่งที่โจทย์กำหนด เพื่อสร้างภาพในหัวก่อนเริ่มแก้ปัญหา`;
    let formalSteps = `• ขั้นที่ 1: วิเคราะห์ข้อมูลจากโจทย์\n• ขั้นที่ 2: ดำเนินการตามหลักวิชาการ: ${explanation}\n• ขั้นที่ 3: สรุปคำตอบที่ถูกต้องคือตัวเลือก (${String.fromCharCode(65 + correctAnswer)})`;
    let shortcutTrick = `⚡ **เทคนิคลัด:** ${studyGuide}`;
    let trap = `⚠️ **จุดหลอกที่พบบ่อย:** ระวังการอ่านเงื่อนไขโจทย์ไม่ครบถ้วน หรือลืมตรวจทานหน่วย`;

    if (subKey === 'math') {
      thinkingConcept = `💡 **การมองโจทย์แบบภาพ (Visual / Concept):** ทำความเข้าใจความสัมพันธ์ของตัวเลขในหัวข้อ ${topic} เพื่อวางแผนขั้นตอนการคำนวณ`;
      formalSteps = `• ขั้นที่ 1: ตั้งประโยคสัญลักษณ์หรือตัวแปรจากโจทย์\n• ขั้นที่ 2: แสดงวิธีคิดคำนวณ: ${explanation}\n• ขั้นที่ 3: ได้ผลลัพธ์ตรงกับตัวเลือก (${String.fromCharCode(65 + correctAnswer)})`;
      shortcutTrick = `⚡ **สูตรลัดห้องสอบ:** ${studyGuide}`;
      trap = `⚠️ **จุดหลอก:** ระวังการบวกลบคูณหารผิด หรือโจทย์ถามสิ่งที่ต่างจากค่า x`;
    } else if (subKey === 'science') {
      thinkingConcept = `💡 **กลไกทางวิทยาศาสตร์ (Scientific Concept):** นึกถึงแบบจำลองหรือปรากฏการณ์ธรรมชาติของเรื่อง ${topic}`;
      formalSteps = `• ขั้นที่ 1: สังเกตตัวแปรและข้อมูลในโจทย์\n• ขั้นที่ 2: อ้างอิงทฤษฎี/การทดลอง: ${explanation}\n• ขั้นที่ 3: สรุปเหตุและผลได้ตรงกับตัวเลือก (${String.fromCharCode(65 + correctAnswer)})`;
      shortcutTrick = `⚡ **คีย์เวิร์ดช่วยจำ:** ${studyGuide}`;
      trap = `⚠️ **จุดหลอก:** ระวังคำลวงที่มีคำว่า "เสมอ", "ทุกกรณี" หรือการสลับหน้าที่โครงสร้าง`;
    } else if (subKey === 'thai') {
      thinkingConcept = `💡 **หลักการภาษาและวรรณคดี (Linguistic Logic):** ทำความเข้าใจกฎเกณฑ์ไตรยางศ์ เสียง หรือบริบทของเรื่อง ${topic}`;
      formalSteps = `• ขั้นที่ 1: วิเคราะห์รูปคำ/โครงสร้างประโยค\n• ขั้นที่ 2: เทียบกฎเกณฑ์ทางภาษาไทย: ${explanation}\n• ขั้นที่ 3: สรุปคำตอบที่ถูกต้องคือตัวเลือก (${String.fromCharCode(65 + correctAnswer)})`;
      shortcutTrick = `⚡ **กลอนท่องจำ / ทริกตัดช้อยส์:** ${studyGuide}`;
      trap = `⚠️ **จุดหลอก:** ระวังเสียงวรรณยุกต์ไม่ตรงกับรูปวรรณยุกต์ หรือคำยืมรูปใกล้เคียงกัน`;
    } else if (subKey === 'social') {
      thinkingConcept = `💡 **ความเชื่อมโยงเหตุและผล (Social Logic):** เข้าใจบริบททางประวัติศาสตร์ กฎหมาย หรือหลักธรรมของเรื่อง ${topic}`;
      formalSteps = `• ขั้นที่ 1: ระบุแก่นสำคัญของประเด็นคำถาม\n• ขั้นที่ 2: วิเคราะห์หลักฐาน/ข้อเท็จจริง: ${explanation}\n• ขั้นที่ 3: สรุปคำตอบคือตัวเลือก (${String.fromCharCode(65 + correctAnswer)})`;
      shortcutTrick = `⚡ **ทริกจับคู่คีย์เวิร์ด:** ${studyGuide}`;
      trap = `⚠️ **จุดหลอก:** ระวังวันสำคัญทางศาสนาที่สับสนง่าย หรือหลักธรรมที่มีจำนวนข้อย่อยคล้ายกัน`;
    }

    if (question && question.trim().length > 0) {
      allQuestions.push({
        id,
        subject,
        subjectName,
        track,
        difficulty,
        level,
        topic,
        question,
        options,
        correctAnswer,
        explanation,
        thinkingConcept,
        formalSteps,
        shortcutTrick,
        trap
      });
    }
  });
}

// Ingest English unique questions
const existingDBCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'data', 'questions-db.js'), 'utf8');
const vm = require('vm');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(existingDBCode, ctx);

const fullDB = ctx.window.QUESTIONS_DB || [];
const engList = fullDB.filter(q => q.subject === 'english');

engList.forEach(q => {
  q.thinkingConcept = `💡 **Grammar & Context Logic (${q.topic}):** Understand the timeline, sentence relationship, or functional usage.`;
  q.formalSteps = `• Step 1: Identify the sentence subject, predicate, and main clause.\n• Step 2: Apply grammatical rules: ${q.explanation}\n• Step 3: Conclude that the correct choice is (${String.fromCharCode(65 + q.correctAnswer)}).`;
  q.shortcutTrick = `⚡ **Exam Hack:** ${q.shortcutTrick || 'Look for time markers (yesterday, since, if) and eliminate mismatched options immediately.'}`;
  q.trap = `⚠️ **Common Pitfall:** ${q.trap || 'Beware of distractor choices that look similar but violate subject-verb agreement or tense harmony.'}`;
  allQuestions.push(q);
});

console.log(`\n========================================`);
console.log(`TOTAL 3-PILLAR AUTHENTIC QUESTIONS: ${allQuestions.length}`);
console.log(`========================================`);

// Write to js/data/questions-db.js
const root = path.join(__dirname, '..');
const jsContent = `/**
 * Horwang M.1 AI Exam Master — 3-Pillar Authentic Master Question Bank (776 Questions)
 * Formatted with 3 Distinct Pedagogical Pillars:
 * 1) 💡 Thinking Concept (วิธีคิด & ตรรกะเบื้องหลัง)
 * 2) 📝 Formal Steps (ขั้นตอนการแสดงวิธีทำมาตรฐาน)
 * 3) ⚡ Exam Hacks & Traps (สูตรลัด 15 วิ & จุดหลอกห้องสอบ)
 */
window.QUESTIONS_DB = ${JSON.stringify(allQuestions, null, 2)};
window.DEFAULT_CLUB_POSTS = [];
window.DEFAULT_SHARED_EXAMS = [];
window.DEFAULT_LEADERBOARD = [];
`;

fs.writeFileSync(path.join(root, 'js/data/questions-db.js'), jsContent, 'utf8');

// Write to seed_questions.sql
let sql = '-- Horwang M1 Hero — 3-Pillar Authentic Questions\nDELETE FROM questions;\n';
allQuestions.forEach(q => {
  const e = s => (s||'').replace(/'/g,"''");
  sql += `INSERT INTO questions (id,subject,subject_name,track,difficulty,level,topic,question,options_json,correct_answer,explanation,trap,shortcut_trick) VALUES ('${e(q.id)}','${e(q.subject)}','${e(q.subjectName)}','${e(q.track)}',${q.difficulty},'${e(q.level)}','${e(q.topic)}','${e(q.question)}','${JSON.stringify(q.options).replace(/'/g,"''")}',${q.correctAnswer},'${e(q.explanation)}','${e(q.trap)}','${e(q.shortcutTrick)}');\n`;
});
fs.writeFileSync(path.join(root, 'seed_questions.sql'), sql, 'utf8');

console.log('✅ Successfully compiled 3-Pillar questions into js/data/questions-db.js and seed_questions.sql');
