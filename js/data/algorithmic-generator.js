/**
 * Horwang M.1 AI Exam Master - Algorithmic Question Generator (100% No-API / Local Procedural Math & Science)
 * Generates infinite fresh randomized problems with dynamic step-by-step solutions!
 */

window.AlgorithmicGenerator = (function() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // 1. Procedural Fraction Challenge
  function genFractionProblem() {
    const a = getRandomInt(1, 4);
    const b = getRandomInt(2, 5);
    const c = getRandomInt(2, 4);
    const d = getRandomInt(2, 5);

    // Expression: a + 1 / (b + 1 / (c + 1/d))
    // Step 1: c + 1/d = (c*d + 1) / d
    const n1 = c * d + 1;
    const d1 = d;

    // Step 2: 1 / (n1/d1) = d1 / n1
    // b + d1/n1 = (b*n1 + d1) / n1
    const n2 = b * n1 + d1;
    const d2 = n1;

    // Step 3: 1 / (n2/d2) = d2 / n2
    // a + d2/n2 = (a*n2 + d2) / n2
    const num = a * n2 + d2;
    const den = n2;
    const g = gcd(num, den);
    const finalNum = num / g;
    const finalDen = den / g;

    const correct = `\\( \\frac{${finalNum}}{${finalDen}} \\)`;
    const dist1 = `\\( \\frac{${finalNum + 2}}{${finalDen}} \\)`;
    const dist2 = `\\( \\frac{${finalNum - 2 > 0 ? finalNum - 2 : finalNum + 4}}{${finalDen}} \\)`;
    const dist3 = `\\( \\frac{${finalNum}}{${finalDen + 3}} \\)`;

    const options = [correct, dist1, dist2, dist3].sort(() => Math.random() - 0.5);
    const correctIdx = options.indexOf(correct);

    return {
      id: `algo-m-${Date.now()}-${getRandomInt(100, 999)}`,
      subject: "math",
      subjectName: "คณิตศาสตร์ (สุ่มตัวแปร)",
      track: "Gifted / ห้องพิเศษ",
      difficulty: 3,
      topic: "เศษส่วนซ้อนหลายชั้น",
      question: `จงหาผลลัพธ์ของ \\( ${a} + \\frac{1}{${b} + \\frac{1}{${c} + \\frac{1}{${d}}}} \\) ในรูปเศษส่วนอย่างต่ำ`,
      options: options,
      correctAnswer: correctIdx,
      explanation: `1) คิดจากชั้นล่างสุด: \\( ${c} + \\frac{1}{${d}} = \\frac{${n1}}{${d1}} \\)\n2) กลับเศษเป็นส่วน: \\( \\frac{1}{\\frac{${n1}}{${d1}}} = \\frac{${d1}}{${n1}} \\)\n3) นำไปบวก: \\( ${b} + \\frac{${d1}}{${n1}} = \\frac{${n2}}{${d2}} \\)\n4) กลับเศษเป็นส่วน: \\( \\frac{${d2}}{${n2}} \\)\n5) บวกชั้นบนสุด: \\( ${a} + \\frac{${d2}}{${n2}} = \\frac{${finalNum}}{${finalDen}} \\)`,
      trap: "ระวังการบวกจากบนลงล่าง หรือลืมกลับเศษเป็นส่วนหลังจากบวกแต่ละชั้น",
      shortcutTrick: "เทคนิคคิดเร็ว: คำนวณจากชั้นล่างสุดขึ้นมาทีละขั้น (Bottom-Up Method)"
    };
  }

  // 2. Procedural Percentage & Commercial Math
  function genPercentageProblem() {
    const cost = getRandomInt(3, 15) * 100; // e.g. 300 - 1500
    const profitPct = getRandomInt(2, 6) * 10; // 20%, 30%, 40%
    const markedPrice = cost * (1 + profitPct / 100);
    const discountPct = getRandomInt(1, 3) * 10; // 10%, 20%
    const sellingPrice = markedPrice * (1 - discountPct / 100);
    const actualProfit = sellingPrice - cost;

    const correct = `${actualProfit} บาท`;
    const dist1 = `${actualProfit + 30} บาท`;
    const dist2 = `${actualProfit - 20 > 0 ? actualProfit - 20 : actualProfit + 50} บาท`;
    const dist3 = `${Math.round(markedPrice * (profitPct - discountPct) / 100)} บาท`;

    const options = [correct, dist1, dist2, dist3].sort(() => Math.random() - 0.5);
    const correctIdx = options.indexOf(correct);

    return {
      id: `algo-m-${Date.now()}-${getRandomInt(100, 999)}`,
      subject: "math",
      subjectName: "คณิตศาสตร์ (สุ่มตัวแปร)",
      track: "Regular & Gifted",
      difficulty: 2,
      topic: "ร้อยละและกำไรขาดทุน",
      question: `พ่อค้าติดราคาขายสินค้าชิ้นหนึ่งไว้ ${markedPrice} บาท โดยตั้งกำไรไว้ ${profitPct}% จากราคาต้นทุน หากต่อมาจัดโปรโมชันลดราคาให้ผู้ซื้อ ${discountPct}% พ่อค้าจะยังคงได้กำไรหรือขาดทุนเท่าใด`,
      options: options,
      correctAnswer: correctIdx,
      explanation: `1) คำนวณราคาทุนเดิม:\n   ทุน = (${markedPrice} × 100) / ${100 + profitPct} = ${cost} บาท\n2) คำนวณราคาขายจริงหลังลด ${discountPct}%:\n   ราคาขายจริง = ${markedPrice} - (${markedPrice} × ${discountPct / 100}) = ${sellingPrice} บาท\n3) กำไรสุทธิ = ราคาขายจริง - ทุน = ${sellingPrice} - ${cost} = ${actualProfit} บาท`,
      trap: "ห้ามนำเปอร์เซ็นต์กำไรมาลบกับเปอร์เซ็นต์ส่วนลดโดยตรง เพราะฐานเงินทุนและราคาป้ายไม่เท่ากัน",
      shortcutTrick: "สูตรคิดเร็ว: ขายจริง = ราคาป้าย × (1 - ส่วนลด) แล้วเทียบกับทุนเดิม"
    };
  }

  // 3. Procedural Train & Tunnel Speed
  function genSpeedProblem() {
    const speedKmh = [36, 54, 72, 90, 108][getRandomInt(0, 4)];
    const speedMs = speedKmh * (5 / 18);
    const trainLen = getRandomInt(10, 25) * 10; // 100 - 250 m
    const tunnelLen = getRandomInt(20, 60) * 10; // 200 - 600 m
    const totalDist = trainLen + tunnelLen;
    const timeSec = Math.round(totalDist / speedMs);

    const correct = `${timeSec} วินาที`;
    const dist1 = `${timeSec + 5} วินาที`;
    const dist2 = `${Math.round(tunnelLen / speedMs)} วินาที`;
    const dist3 = `${timeSec - 5 > 0 ? timeSec - 5 : timeSec + 10} วินาที`;

    const options = [correct, dist1, dist2, dist3].sort(() => Math.random() - 0.5);
    const correctIdx = options.indexOf(correct);

    return {
      id: `algo-m-${Date.now()}-${getRandomInt(100, 999)}`,
      subject: "math",
      subjectName: "คณิตศาสตร์ (สุ่มตัวแปร)",
      track: "Gifted / ห้องพิเศษ",
      difficulty: 3,
      topic: "ความเร็ว ระยะทาง และเวลา",
      question: `รถไฟขบวนหนึ่งยาว ${trainLen} เมตร วิ่งด้วยความเร็วคงที่ ${speedKmh} กิโลเมตร/ชั่วโมง จะต้องใช้เวลากี่วินาทีในการวิ่งผ่านพ้นสะพาน/อุโมงค์ที่มีความยาว ${tunnelLen} เมตร พอดี`,
      options: options,
      correctAnswer: correctIdx,
      explanation: `1) แปลงหน่วยความเร็วจาก km/h เป็น m/s:\n   ${speedKmh} × (5/18) = ${speedMs} เมตร/วินาที\n2) ระยะทางทั้งหมดที่ต้องเคลื่อนที่เพื่อพ้น = ความยาวรถไฟ + ความยาวสะพาน = ${trainLen} + ${tunnelLen} = ${totalDist} เมตร\n3) เวลา = ระยะทาง / ความเร็ว = ${totalDist} / ${speedMs} = ${timeSec} วินาที`,
      trap: "ระวังคิดเฉพาะระยะทางของสะพานโดยลืมบวกความยาวของตัวรถไฟเอง",
      shortcutTrick: "แปลง km/h เป็น m/s ให้คูณด้วย 5/18 เสมอ!"
    };
  }

  // 4. Procedural Physics / Electricity (Ohm's Law & Parallel Resistors)
  function genElectricityProblem() {
    const v = getRandomInt(6, 24);
    const r1 = getRandomInt(2, 6) * 2;
    const r2 = getRandomInt(2, 6) * 2;
    const rParallel = (r1 * r2) / (r1 + r2);
    const current = (v / rParallel).toFixed(2);

    const correct = `${current} แอมแปร์`;
    const dist1 = `${(v / (r1 + r2)).toFixed(2)} แอมแปร์`;
    const dist2 = `${(v / r1).toFixed(2)} แอมแปร์`;
    const dist3 = `${(parseFloat(current) + 1.5).toFixed(2)} แอมแปร์`;

    const options = [correct, dist1, dist2, dist3].sort(() => Math.random() - 0.5);
    const correctIdx = options.indexOf(correct);

    return {
      id: `algo-s-${Date.now()}-${getRandomInt(100, 999)}`,
      subject: "science",
      subjectName: "วิทยาศาสตร์ (สุ่มตัวแปร)",
      track: "Gifted / ห้องพิเศษ",
      difficulty: 2,
      topic: "ไฟฟ้ากระแสตรงและกฎของโอห์ม",
      question: `วงจรไฟฟ้าหนึ่งมีแหล่งกำเนิดไฟฟ้า ${v} โวลต์ ต่อกับตัวต้านทาน 2 ตัวขนาด ${r1} โอห์ม และ ${r2} โอห์ม แบบขนาน จงหากระแสไฟฟ้ารวมที่ไหลผ่านวงจรนี้`,
      options: options,
      correctAnswer: correctIdx,
      explanation: `1) หาความต้านทานรวมแบบขนาน:\n   \\( \\frac{1}{R_t} = \\frac{1}{${r1}} + \\frac{1}{${r2}} \\) หรือ \\( R_t = \\frac{${r1} \\times ${r2}}{${r1} + ${r2}} = ${rParallel.toFixed(2)} \\) โอห์ม\n2) จากกฎของโอห์ม \\( I = \\frac{V}{R} \\):\n   \\( I = \\frac{${v}}{${rParallel.toFixed(2)}} = ${current} \\) แอมแปร์`,
      trap: "อย่าคิดความต้านทานรวมแบบอนุกรม (ห้ามนำความต้านทานมาบวกกันตรงๆ ในวงจรขนาน)",
      shortcutTrick: "สูตรลัดตัวต้านทาน 2 ตัวต่อขนาน: ผลคูณหารด้วยผลบวก (R1×R2)/(R1+R2)"
    };
  }

  function generateBatch(count = 20, subject = 'all') {
    const list = [];
    const generators = [genFractionProblem, genPercentageProblem, genSpeedProblem, genElectricityProblem];

    // Mix procedural with offline DB questions to ensure rich 5-subject coverage
    const offlinePool = [...window.QUESTIONS_DB];
    if (subject !== 'all') {
      const filtered = offlinePool.filter(q => q.subject === subject);
      if (filtered.length > 0) offlinePool.length = 0, offlinePool.push(...filtered);
    }
    offlinePool.sort(() => Math.random() - 0.5);

    // Add dynamic math & science questions
    if (subject === 'all' || subject === 'math' || subject === 'science') {
      for (let i = 0; i < Math.min(Math.floor(count / 2), 6); i++) {
        const fn = generators[i % generators.length];
        list.push(fn());
      }
    }

    // Fill remaining with offline bank
    for (let q of offlinePool) {
      if (list.length >= count) break;
      list.push(q);
    }

    // If still need more, generate procedural
    while (list.length < count) {
      const fn = generators[list.length % generators.length];
      list.push(fn());
    }

    return list.sort(() => Math.random() - 0.5);
  }

  return {
    generateBatch
  };
})();
