/**
 * Horwang M.1 AI Exam Master - Mega Hybrid Engine
 * Combines:
 * 1) Procedural Dynamic Variable Synthesis (Math & Science randomized parameters)
 * 2) Curated Master Bank (Authentic Horwang / Gifted / ONET questions)
 * 3) Grammar & Context Mutators (English & Thai vocabulary/names variations)
 * 4) Smart Distractor Shuffler
 */

window.MegaBankEngine = (function() {
  function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const THAI_NAMES = ["น้องภูริ", "น้องมินนี่", "น้องกานต์", "น้องข้าวหอม", "น้องอเล็กซ์", "น้องวิน", "น้องพลอย", "น้องเบส"];
  const ITEMS = ["หนังสือรวมโจทย์", "เสื้อแจ็คเก็ต", "จักรยานพับได้", "หูฟังบลูทูธ", "กล้องจุลทรรศน์", "โมเดลโครงกระดูก"];

  // =========================================================================
  // 1. PROCEDURAL DYNAMIC GENERATORS (Math, Science, English Contexts)
  // =========================================================================
  const proceduralGenerators = {
    // 1.1 Continued Fractions
    mathFraction: function() {
      const a = rnd(1, 4), b = rnd(2, 5), c = rnd(2, 4), d = rnd(2, 5);
      const n1 = c * d + 1, d1 = d;
      const n2 = b * n1 + d1, d2 = n1;
      const num = a * n2 + d2, den = n2;
      const g = gcd(num, den);
      const fNum = num / g, fDen = den / g;
      const correct = `\\( \\frac{${fNum}}{${fDen}} \\)`;
      const options = [correct, `\\( \\frac{${fNum + 2}}{${fDen}} \\)`, `\\( \\frac{${Math.max(1, fNum - 2)}}{${fDen}} \\)`, `\\( \\frac{${fNum}}{${fDen + 2}} \\)`].sort(() => Math.random() - 0.5);
      return {
        id: `hybrid-m1-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "procedural",
        hybridBadge: "⚡ สดใหม่: สุ่มตัวแปร",
        subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted / ห้องพิเศษ", difficulty: 3,
        topic: "เศษส่วนซ้อนหลายชั้น", tags: ["ข้อสอบหอวัง Gifted", "เศษส่วน", "สพฐ."],
        question: `จงหาค่าของ \\( A = ${a} + \\frac{1}{${b} + \\frac{1}{${c} + \\frac{1}{${d}}}} \\) ในรูปเศษส่วนอย่างต่ำ`,
        options: options, correctAnswer: options.indexOf(correct),
        explanation: `1) คิดจากชั้นล่างสุด: \\( ${c} + \\frac{1}{${d}} = \\frac{${n1}}{${d1}} \\)\n2) กลับเศษส่วน: \\( \\frac{${d1}}{${n1}} \\) แล้วนำไปบวก: \\( ${b} + \\frac{${d1}}{${n1}} = \\frac{${n2}}{${d2}} \\)\n3) กลับเศษส่วนแล้วบวกหน้าสุด: \\( ${a} + \\frac{${d2}}{${n2}} = \\frac{${fNum}}{${fDen}} \\)`,
        trap: "ระวังลืมกลับเศษเป็นส่วนหลังจากบวกเลขแต่ละชั้น",
        shortcutTrick: "เทคนิคคิดเร็ว: คำนวณจากชั้นล่างสุดขึ้นมาด้านบน (Bottom-Up Method)"
      };
    },

    // 1.2 Profit, Loss & Discount with randomized names and items
    mathProfit: function() {
      const name = pick(THAI_NAMES);
      const item = pick(ITEMS);
      const cost = rnd(4, 18) * 100;
      const profitRate = rnd(2, 5) * 10;
      const mark = cost * (1 + profitRate / 100);
      const discRate = rnd(1, 3) * 10;
      const sell = mark * (1 - discRate / 100);
      const profit = sell - cost;
      const correct = `${profit} บาท`;
      const options = [correct, `${profit + 40} บาท`, `${Math.max(10, profit - 30)} บาท`, `${Math.round(cost * (profitRate - discRate) / 100)} บาท`].sort(() => Math.random() - 0.5);
      return {
        id: `hybrid-m2-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "procedural",
        hybridBadge: "⚡ สดใหม่: สุ่มตัวแปร",
        subject: "math", subjectName: "คณิตศาสตร์", track: "Regular & Gifted", difficulty: 2,
        topic: "ร้อยละและกำไรขาดทุน", tags: ["ข้อสอบหอวัง", "ร้อยละ", "โจทย์ประยุกต์"],
        question: `${name} ติดป้ายราคาขาย${item}ไว้ ${mark} บาท โดยตั้งราคาให้ได้กำไร ${profitRate}% จากราคาทุน หากต่อมาติดป้ายลดราคาให้ลูกค้า ${discRate}% ${name}จะยังคงได้กำไรกี่บาท`,
        options: options, correctAnswer: options.indexOf(correct),
        explanation: `1) หาราคาทุนเดิม: (${mark} × 100) / ${100 + profitRate} = ${cost} บาท\n2) ราคาขายจริงหลังลด ${discRate}%: ${mark} × (1 - ${discRate/100}) = ${sell} บาท\n3) กำไรที่ได้จริง = ราคาขายจริง - ทุน = ${sell} - ${cost} = ${profit} บาท`,
        trap: "ห้ามนำ % กำไร ลบกับ % ส่วนลดโดยตรง เพราะฐานเงินทุนกับราคาป้ายเป็นคนละจำนวน",
        shortcutTrick: "คำนวณราคาขายจริงก่อนแล้วเทียบกับทุนเดิม"
      };
    },

    // 1.3 Speed, Train & Bridge
    mathSpeed: function() {
      const speeds = [36, 54, 72, 90, 108];
      const speedKmh = speeds[rnd(0, speeds.length - 1)];
      const speedMs = speedKmh * (5 / 18);
      const trainLen = rnd(12, 28) * 10;
      const tunnelLen = rnd(25, 75) * 10;
      const totalDist = trainLen + tunnelLen;
      const timeSec = Math.round(totalDist / speedMs);
      const correct = `${timeSec} วินาที`;
      const options = [correct, `${timeSec + 6} วินาที`, `${Math.round(tunnelLen / speedMs)} วินาที`, `${Math.max(5, timeSec - 6)} วินาที`].sort(() => Math.random() - 0.5);
      return {
        id: `hybrid-m3-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "procedural",
        hybridBadge: "⚡ สดใหม่: สุ่มตัวแปร",
        subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted / ห้องพิเศษ", difficulty: 3,
        topic: "อัตราเร็ว ระยะทาง และเวลา", tags: ["ข้อสอบหอวัง Gifted", "ความเร็ว", "TEDET"],
        question: `รถไฟด่วนขบวนหนึ่งยาว ${trainLen} เมตร วิ่งด้วยความเร็วสม่ำเสมอ ${speedKmh} กิโลเมตรต่อชั่วโมง จะต้องใช้เวลากี่วินาทีในการวิ่งผ่านพ้นสะพาน/อุโมงค์ที่มีความยาว ${tunnelLen} เมตร พ้นทั้งขบวนพอดี`,
        options: options, correctAnswer: options.indexOf(correct),
        explanation: `1) แปลง km/h เป็น m/s: ${speedKmh} × (5/18) = ${speedMs} เมตร/วินาที\n2) ระยะทางทั้งหมดที่รถไฟต้องเคลื่อนที่ = ความยาวรถไฟ + ความยาวสะพาน = ${trainLen} + ${tunnelLen} = ${totalDist} เมตร\n3) เวลา = ระยะทาง / ความเร็ว = ${totalDist} / ${speedMs} = ${timeSec} วินาที`,
        trap: "ระวังลืมบวกความยาวของตัวรถไฟเอง",
        shortcutTrick: "แปลง km/h เป็น m/s ให้คูณ 5/18 เสมอ"
      };
    },

    // 1.4 Geometry: Rectangular Area with variation
    mathGeometry: function() {
      const diff = rnd(3, 9);
      const width = rnd(8, 22);
      const length = width + diff;
      const perimeter = 2 * (width + length);
      const area = width * length;
      const correct = `${area} ตร.ซม.`;
      const options = [correct, `${area + 20} ตร.ซม.`, `${perimeter * 2} ตร.ซม.`, `${(width + 2) * (length - 2)} ตร.ซม.`].sort(() => Math.random() - 0.5);
      return {
        id: `hybrid-m4-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "procedural",
        hybridBadge: "⚡ สดใหม่: สุ่มตัวแปร",
        subject: "math", subjectName: "คณิตศาสตร์", track: "Regular & Gifted", difficulty: 2,
        topic: "เรขาคณิตและพื้นที่", tags: ["ข้อสอบหอวัง", "เรขาคณิต"],
        question: `แปลงผักรูปสี่เหลี่ยมผืนผ้าแปลงหนึ่ง มีความยาวมากกว่าความกว้าง ${diff} เมตร ถ้าวัดความยาวรอบแปลงได้ ${perimeter} เมตร แปลงผักนี้มีพื้นที่กี่ตารางเมตร`,
        options: options, correctAnswer: options.indexOf(correct),
        explanation: `1) กึ่งหนึ่งของเส้นรอบรูป (กว้าง + ยาว) = ${perimeter} / 2 = ${width + length} เมตร\n2) ด้านกว้าง = (${width + length} - ${diff}) / 2 = ${width} เมตร\n3) ด้านยาว = ${width} + ${diff} = ${length} เมตร\n4) พื้นที่ = กว้าง × ยาว = ${width} × ${length} = ${area} ตารางเมตร`,
        trap: "ระวังลืมนำเส้นรอบรูปมาหาร 2 ก่อนหาผลบวกด้านกว้างกับยาว",
        shortcutTrick: "กึ่งหนึ่งของเส้นรอบรูป แล้วใช้สูตรผลบวกผลต่างหาด้านทั้งสอง"
      };
    },

    // 1.5 Physics: Randomized Density & Buoyancy
    scienceBuoyancy: function() {
      const mass = rnd(5, 9) * 10; // 50, 60, 70, 80, 90 g
      const vol = 100; // cm3
      const density = (mass / vol).toFixed(2);
      const submergedPct = Math.round((mass / vol) * 100);
      const floatingPct = 100 - submergedPct;

      const correct = `ลอยน้ำ โดยมีปริมาตรจมน้ำ ${submergedPct}% และโผล่พ้นน้ำ ${floatingPct}%`;
      const dist1 = `ลอยน้ำ โดยมีปริมาตรจมน้ำ ${floatingPct}% และโผล่พ้นน้ำ ${submergedPct}%`;
      const dist2 = `จมมิดลงสู่ก้นภาชนะทันที`;
      const dist3 = `ลอยปริ่มน้ำพอดีโดยไม่โผล่พ้นน้ำเลย`;

      const options = [correct, dist1, dist2, dist3].sort(() => Math.random() - 0.5);
      return {
        id: `hybrid-s1-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "procedural",
        hybridBadge: "⚡ สดใหม่: สุ่มตัวแปร",
        subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted / ห้องพิเศษ", difficulty: 2,
        topic: "แรงพยุงและความหนาแน่น", tags: ["ข้อสอบหอวัง Gifted", "ฟิสิกส์"],
        question: `วัตถุชิ้นหนึ่งมีปริมาตร ${vol} ลูกบาศก์เซนติเมตร และมีมวล ${mass} กรัม เมื่อนำไปลอยในน้ำบริสุทธิ์ (ความหนาแน่น 1 g/cm³) วัตถุนี้จะมีลักษณะอย่างไร`,
        options: options, correctAnswer: options.indexOf(correct),
        explanation: `1) ความหนาแน่นของวัตถุ = มวล / ปริมาตร = ${mass} / ${vol} = ${density} g/cm³\n2) เนื่องจากความหนาแน่นน้อยกว่าน้ำ (${density} < 1.0) วัตถุจึงลอยน้ำ\n3) สัดส่วนปริมาตรที่จม = ความหนาแน่นวัตถุ / ความหนาแน่นน้ำ = ${density} / 1.0 = ${submergedPct}% (และโผล่พ้นน้ำ ${floatingPct}%)`,
        trap: "อย่าสับสนระหว่างเปอร์เซ็นต์ส่วนที่จมน้ำกับส่วนที่โผล่พ้นน้ำ",
        shortcutTrick: "ความหนาแน่นของวัตถุเมื่อเทียบกับน้ำ = สัดส่วนปริมาตรที่จมน้ำเสมอ"
      };
    },

    // 1.6 English Mutator: Conditional Clause
    englishConditional: function() {
      const name = pick(THAI_NAMES);
      const items = ["a new laptop", "a science telescope", "an English grammar book", "a bicycle"];
      const chosenItem = pick(items);

      const correct = "had";
      const options = [correct, "have", "will have", "would have"].sort(() => Math.random() - 0.5);
      return {
        id: `hybrid-e1-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "procedural",
        hybridBadge: "⚡ สดใหม่: สุ่มบริบท",
        subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted & EP", difficulty: 3,
        topic: "If-Clauses (Second Conditional)", tags: ["ข้อสอบหอวัง Gifted", "Grammar"],
        question: `Choose the correct verb form: 'If ${name} ______ enough money right now, he would buy ${chosenItem}.'`,
        options: options, correctAnswer: options.indexOf(correct),
        explanation: `ประโยคนี้เป็น Second Conditional (สมมติสิ่งที่ไม่จริงในปัจจุบัน): โครงสร้างคือ If + Past Simple (S + V2), S + would + V1. ดังนั้นใน If-clause ต้องใช้ 'had'`,
        trap: "ระวังใช้ have (Type 1) หรือ would have ซ้ำซ้อน",
        shortcutTrick: "ประโยคหลักมี 'would + V.inf' -> ใน If-clause ต้องใช้ 'V.2 (Past Simple)'"
      };
    }
  };

  // =========================================================================
  // 2. HYBRID EXAM COMPOSER: BLENDING RATIOS
  // =========================================================================
  function generateHybridExam(count = 20, subject = 'all', track = 'gifted', difficulty = 2, mixPreset = 'balanced') {
    let proceduralRatio = 0.40; // Default Balanced Blend: 40% procedural + 60% curated master bank
    if (mixPreset === 'math-speed') proceduralRatio = 0.70;
    if (mixPreset === 'curated-trap') proceduralRatio = 0.20;

    const proceduralCount = Math.max(2, Math.round(count * proceduralRatio));
    const bankCount = count - proceduralCount;

    const hybridList = [];

    // 1. Generate Procedural Fresh Questions
    const proceduralFns = Object.values(proceduralGenerators);
    for (let i = 0; i < proceduralCount; i++) {
      const fn = proceduralFns[i % proceduralFns.length];
      const q = fn();
      if (subject === 'all' || q.subject === subject) {
        hybridList.push(q);
      }
    }

    // 2. Fetch Curated Master Bank Questions
    let bankPool = window.MegaBankEngine.getAllBankQuestions();
    if (subject !== 'all') {
      bankPool = bankPool.filter(q => q.subject === subject);
    }
    const diffNum = parseInt(difficulty, 10);
    if (diffNum > 0) {
      const matchDiff = bankPool.filter(q => q.difficulty === diffNum || q.level === 'L' + diffNum);
      if (matchDiff.length > 0) bankPool = matchDiff;
    }
    bankPool.sort(() => Math.random() - 0.5);

    for (let q of bankPool) {
      if (hybridList.length >= count) break;
      // Attach badge to bank question
      const enhancedQ = {
        ...q,
        id: q.id || `hybrid-bank-${Date.now()}-${rnd(100, 999)}`,
        hybridType: "curated",
        hybridBadge: q.track && q.track.includes("Gifted") ? "🏆 ข้อสอบจริง: Gifted หอวัง" : "📚 คลังข้อสอบมาตรฐาน"
      };
      hybridList.push(enhancedQ);
    }

    // 3. Fallback filler if still under target count
    while (hybridList.length < count) {
      const fn = proceduralFns[hybridList.length % proceduralFns.length];
      hybridList.push(fn());
    }

    return hybridList.sort(() => Math.random() - 0.5);
  }

  // Preserve existing methods for backward compatibility
  function getAllBankQuestions() {
    return [
      ...window.QUESTIONS_DB
    ];
  }

  function getMegaBatch(count = 20, subject = 'all', track = 'gifted', difficulty = 2) {
    return generateHybridExam(count, subject, track, difficulty, 'balanced');
  }

  return {
    generateHybridExam,
    getMegaBatch,
    getAllBankQuestions
  };
})();
