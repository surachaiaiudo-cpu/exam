/**
 * Complete Authentic Exam Bank Builder
 * Replaces ALL previous questions with ONLY the new authentic dataset provided by the user.
 * Subjects: Mathematics (155), Science (155), Thai (155), Social Studies (155), English (155)
 */

const fs = require('fs');
const path = require('path');

// Helper to convert CSV string row to question object
function parseRow(rowStr, defaultSubject, defaultSubjectName) {
  // Regex to match CSV with quoted fields
  const regex = /(?:^|,)(?:"([^"]*)"|([^,]*))/g;
  const matches = [];
  let match;
  while ((match = regex.exec(rowStr)) !== null) {
    if (match.index === regex.lastIndex) regex.lastIndex++;
    matches.push(match[1] !== undefined ? match[1] : match[2]);
  }

  if (matches.length < 11) return null;

  const [id, subjectRaw, topic, level, style, question, optA, optB, optC, optD, ansLetter, explanation, studyGuide] = matches;

  if (!id || id === 'ID') return null;

  const ansMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
  const ansIdx = ansMap[(ansLetter || '').trim().toUpperCase()] !== undefined ? ansMap[(ansLetter || '').trim().toUpperCase()] : 0;

  // Track & Difficulty based on Level (L1 = 1, L2 = 2, L3 = 3, L4 = 3, L5 = 3)
  let diff = 2;
  let track = "Regular";
  if (level === 'L1') { diff = 1; track = "Regular"; }
  else if (level === 'L2') { diff = 2; track = "Regular"; }
  else if (level === 'L3') { diff = 3; track = "Gifted"; }
  else if (level === 'L4') { diff = 3; track = "Gifted"; }
  else if (level === 'L5') { diff = 3; track = "Gifted"; }
  else if (level === 'L1') { diff = 1; }

  let subKey = defaultSubject;
  if (id.startsWith('MATH_')) subKey = 'math';
  else if (id.startsWith('SCI_')) subKey = 'science';
  else if (id.startsWith('THAI_')) subKey = 'thai';
  else if (id.startsWith('SOC_')) subKey = 'social';
  else if (id.startsWith('ENG_')) subKey = 'english';

  return {
    id: id.trim(),
    subject: subKey,
    subjectName: defaultSubjectName,
    track: track,
    difficulty: diff,
    level: level ? level.trim() : 'L2',
    style: style ? style.trim() : 'Classic',
    topic: topic ? topic.trim() : 'ทั่วไป',
    question: (question || '').trim(),
    options: [
      (optA || '').trim(),
      (optB || '').trim(),
      (optC || '').trim(),
      (optD || '').trim()
    ],
    correctAnswer: ansIdx,
    explanation: (explanation || '').trim(),
    trap: (studyGuide || '').trim() ? `ข้อควรจำ: ${studyGuide.trim()}` : "อ่านโจทย์และเงื่อนไขให้ละเอียด",
    shortcutTrick: (studyGuide || '').trim() || "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  };
}

console.log("Authentic parser module initialized.");
