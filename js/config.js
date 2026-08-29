/**
 * Horwang M.1 AI Exam Master - Configuration & State Module (Clean Production State)
 */

window.HORWANG_CONFIG = {
  APP_NAME: "Horwang M.1 AI Exam Master & Study Club",
  VERSION: "2.5.0",
  DEFAULT_MODEL: "gemini-2.5-flash-preview-09-2025",
  BENCHMARKS: {
    GIFTED_PASS_PCT: 80,
    REGULAR_PASS_PCT: 65,
    MINUTES_PER_QUESTION: 2
  },
  SUBJECTS: {
    all: { name: "รวม 5 วิชาหลัก", badgeClass: "bg-slate-100 text-slate-700" },
    math: { name: "คณิตศาสตร์", badgeClass: "bg-rose-100 text-rose-800 border border-rose-200" },
    science: { name: "วิทยาศาสตร์", badgeClass: "bg-emerald-100 text-emerald-800 border border-emerald-200" },
    english: { name: "ภาษาอังกฤษ", badgeClass: "bg-sky-100 text-sky-800 border border-sky-200" },
    thai: { name: "ภาษาไทย", badgeClass: "bg-amber-100 text-amber-900 border border-amber-200" },
    social: { name: "สังคมศึกษา", badgeClass: "bg-purple-100 text-purple-800 border border-purple-200" }
  },
  ROADMAP_STAGES: [
    {
      stage: 1,
      title: "ระยะที่ 1: ป.5 เทอม 1 (ช่วงเวลาปัจจุบัน)",
      badge: "Focus",
      badgeClass: "bg-amber-200 text-amber-900",
      containerClass: "bg-amber-50 border-amber-200 text-amber-900",
      desc: "ปูพื้นฐาน ป.5 ให้แน่นปึ้ก: ทำความเข้าใจเศษส่วน ทศนิยม ร้อยละ และระเบียบวิธีทางวิทยาศาสตร์ ฝึกทำโจทย์สปีดวันละ 5-10 ข้อ"
    },
    {
      stage: 2,
      title: "ระยะที่ 2: ป.5 เทอม 2",
      badge: "Next Step",
      badgeClass: "bg-slate-200 text-slate-800",
      containerClass: "bg-slate-50 border-slate-200 text-slate-800",
      desc: "เริ่มข้ามเนื้อหา ป.6 ล่วงหน้า: เรขาคณิต สมการเบื้องต้น วงจรไฟฟ้า และ Grammar Tenses หลัก"
    },
    {
      stage: 3,
      title: "ระยะที่ 3: ป.6 เทอม 1",
      badge: "Advanced",
      badgeClass: "bg-slate-200 text-slate-800",
      containerClass: "bg-slate-50 border-slate-200 text-slate-800",
      desc: "ตะลุยโจทย์แนว Gifted / สพฐ. / สสวท.: ฝึกทำข้อสอบเก่าแข่งขันหอวัง 5 ปีย้อนหลัง สกัดจุดหลอก"
    },
    {
      stage: 4,
      title: "ระยะที่ 4: ป.6 เทอม 2 (โค้งสุดท้าย)",
      badge: "Final Countdown",
      badgeClass: "bg-slate-200 text-slate-800",
      containerClass: "bg-slate-50 border-slate-200 text-slate-800",
      desc: "จำลองสอบเสมือนจริง 40-60 นาที: ฝึกฝนการฝน OMR และบริหารเวลาอย่างแม่นยำ พร้อมลุยสนามสอบจริง!"
    }
  ]
};

// Global Reactive State Container (Clean Initial State - Zero Mockup)
window.APP_STATE = {
  apiKey: localStorage.getItem('hw_gemini_api_key') || '',
  currentTab: 'generator',
  audioEnabled: true,
  userXp: parseInt(localStorage.getItem('hw_user_xp') || '0', 10),
  examHistory: JSON.parse(localStorage.getItem('hw_exam_history') || '[]'),
  currentExam: null,
  userAnswers: {},
  timerInterval: null,
  timeRemaining: 0,
  totalExamTime: 0,
  timeSpentSeconds: 0,
  isOmrMode: false,
  posts: JSON.parse(localStorage.getItem('hw_club_posts') || '[]'),
  sharedExams: JSON.parse(localStorage.getItem('hw_shared_exams') || '[]')
};

// Bulletproof Real-time KaTeX Math & Fraction Formatter
window.formatMathText = function(text) {
  if (!text || typeof text !== 'string') return text || '';
  if (!window.katex) return text;

  let formatted = text;

  // Replace $$...$$ (Display Block)
  formatted = formatted.replace(/\$\$([\s\S]*?)\$\$/g, (m, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
    } catch (e) { return m; }
  });

  // Replace \[...\] (Display Block)
  formatted = formatted.replace(/\\\[([\s\S]*?)\\\]/g, (m, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
    } catch (e) { return m; }
  });

  // Replace \(...\) (Inline Math)
  formatted = formatted.replace(/\\\(([\s\S]*?)\\\)/g, (m, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
    } catch (e) { return m; }
  });

  return formatted;
};
