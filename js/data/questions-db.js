/**
 * Horwang M.1 AI Exam Master - Mega Master Question Bank (100+ Authentic Questions)
 * Standard Horwang M.1 Gifted / EP / Regular Entrance Exam Questions
 * Subjects: Mathematics (25), Science (25), English (20), Thai (15), Social Studies (15)
 */

window.QUESTIONS_DB = [
  // =========================================================================
  // 1. MATHEMATICS (คณิตศาสตร์ - 25 ข้อ)
  // =========================================================================
  {
    id: "m01", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "เศษส่วนต่อเนื่องหลายชั้น",
    question: "ถ้า \\( A = 1 + \\frac{1}{2 + \\frac{1}{3 + \\frac{1}{4}}} \\) จงหาค่าของเศษส่วนอย่างต่ำของ \\( A \\)",
    options: ["\\( \\frac{43}{30} \\)", "\\( \\frac{41}{30} \\)", "\\( \\frac{37}{26} \\)", "\\( \\frac{43}{33} \\)"],
    correctAnswer: 0,
    explanation: "1) ล่างสุด: 3 + 1/4 = 13/4\n2) กลับเศษส่วน: 4/13\n3) บวกต่อ: 2 + 4/13 = 30/13\n4) กลับเศษส่วน: 13/30\n5) บวกตัวหน้า: 1 + 13/30 = 43/30",
    trap: "ระวังลืมกลับเศษเป็นส่วนก่อนบวกในแต่ละชั้น",
    shortcutTrick: "คำนวณจากชั้นล่างสุดขึ้นมา (Bottom-Up Method)"
  },
  {
    id: "m02", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 2,
    topic: "เรขาคณิตและพื้นที่",
    question: "รูปสี่เหลี่ยมผืนผ้ารูปหนึ่ง มีด้านยาว ยาวกว่าด้านกว้าง 4 เซนติเมตร ถ้าเส้นรอบรูปยาว 48 เซนติเมตร รูปสี่เหลี่ยมนี้มีพื้นที่กี่ตารางเซนติเมตร",
    options: ["140 ตร.ซม.", "144 ตร.ซม.", "160 ตร.ซม.", "192 ตร.ซม."],
    correctAnswer: 0,
    explanation: "กึ่งหนึ่งของเส้นรอบรูป = 24 ซม. -> กว้าง = (24-4)/2 = 10 ซม., ยาว = 14 ซม. -> พื้นที่ = 10 × 14 = 140 ตารางเซนติเมตร",
    trap: "ระวังลืมนำเส้นรอบรูปมาหาร 2 ก่อนหาผลรวมด้านกว้าง+ยาว",
    shortcutTrick: "กึ่งหนึ่งของเส้นรอบรูป = 24 -> แยกเป็น 10 กับ 14 -> 10 × 14 = 140"
  },
  {
    id: "m03", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "ร้อยละและกำไรขาดทุน",
    question: "ร้านค้าติดราคาขายเสื้อตัวหนึ่งไว้ 600 บาท โดยคิดกำไรไว้ 20% หากติดป้ายลดราคาให้ลูกค้า 10% ทางร้านจะยังคงได้กำไรกี่บาท",
    options: ["40 บาท", "50 บาท", "60 บาท", "90 บาท"],
    correctAnswer: 0,
    explanation: "ทุน = (600 × 100)/120 = 500 บาท -> ราคาขายจริงหลังลด 10% = 540 บาท -> กำไรจริง = 540 - 500 = 40 บาท",
    trap: "ห้ามนำ % กำไร ลบ % ลดโดยตรง เพราะฐานเงินทุนกับราคาป้ายเป็นคนละจำนวน",
    shortcutTrick: "คิดราคาขายจริงก่อน = 540 บาท เทียบกับทุน 500 บาท ได้กำไร 40 บาท"
  },
  {
    id: "m04", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "อัตราเร็ว ระยะทาง และเวลา",
    question: "รถไฟขบวนหนึ่งยาว 150 เมตร วิ่งด้วยความเร็วคงที่ 72 กิโลเมตรต่อชั่วโมง จะต้องใช้เวลากี่วินาทีในการวิ่งผ่านพ้นอุโมงค์ที่มีความยาว 450 เมตร พ้นทั้งขบวนพอดี",
    options: ["30 วินาที", "25 วินาที", "20 วินาที", "35 วินาที"],
    correctAnswer: 0,
    explanation: "ความเร็ว 72 km/h = 20 m/s -> ระยะทางรวม = 150 + 450 = 600 ม. -> เวลา = 600 / 20 = 30 วินาที",
    trap: "ระวังลืมบวกความยาวของตัวรถไฟเอง",
    shortcutTrick: "แปลง km/h เป็น m/s คูณ 5/18 เสมอ (72 × 5/18 = 20)"
  },
  {
    id: "m05", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "ห.ร.ม. และ ค.ร.น.",
    question: "สัญญาณไฟกระพริบ 3 ดวง กระพริบทุก 4, 6 และ 10 วินาที ตามลำดับ ถ้าสัญญาณไฟเริ่มกระพริบพร้อมกันเวลา 12:00 น. ไฟทั้งสามจะกระพริบพร้อมกันอีกครั้งในเวลากี่นาทีถัดไป",
    options: ["1 นาที", "2 นาที", "3 นาที", "6 นาที"],
    correctAnswer: 0,
    explanation: "หา ค.ร.น. ของ 4, 6, 10 -> ค.ร.น. = 60 วินาที = 1 นาที",
    trap: "ระวังแปลงหน่วยวินาทีเป็นนาทีผิด",
    shortcutTrick: "เหตุการณ์กลับมาพร้อมกัน = ค.ร.น. เสมอ"
  },
  {
    id: "m06", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "งานและการทำงานร่วมกัน",
    question: "นาย A ทำงานคนเดียวเสร็จใน 6 วัน นาย B ทำงานคนเดียวเสร็จใน 12 วัน ถ้าทั้งสองคนช่วยกันทำงานนี้พร้อมกัน จะทำงานนี้เสร็จภายในกี่วัน",
    options: ["4 วัน", "5 วัน", "3 วัน", "9 วัน"],
    correctAnswer: 0,
    explanation: "1 วันทำได้ 1/6 + 1/12 = 3/12 = 1/4 ของงาน -> เสร็จใน 4 วัน",
    trap: "อย่าเอาวันมาบวกกันแล้วหาร 2",
    shortcutTrick: "สูตรช่วยกัน 2 คน: (ผลคูณ) / (ผลบวก) = (6 × 12) / (6 + 12) = 72 / 18 = 4 วัน"
  },
  {
    id: "m07", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "เลขยกกำลังและหลักหน่วย",
    question: "เลขโดดในหลักหน่วยของ \\( 3^{2026} \\) มีค่าเท่ากับข้อใด",
    options: ["9", "3", "7", "1"],
    correctAnswer: 0,
    explanation: "หลักหน่วยของ 3ⁿ วนซ้ำทุก 4 ตัว: 3, 9, 7, 1 -> 2026 ÷ 4 = 506 เศษ 2 -> ตัวที่ 2 คือ 9",
    trap: "นับลำดับเศษให้ถูกต้อง (เศษ 1=3, เศษ 2=9, เศษ 3=7, ลงตัว=1)",
    shortcutTrick: "นำเลขชี้กำลังหาร 4 ดูเศษ"
  },
  {
    id: "m08", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "สมการอายุ",
    question: "ปัจจุบันพ่อมีอายุเป็น 4 เท่าของลูก อีก 5 ปีข้างหน้า พ่อจะมีอายุเป็น 3 เท่าของลูก ปัจจุบันพ่อมีอายุกี่ปี",
    options: ["40 ปี", "36 ปี", "48 ปี", "32 ปี"],
    correctAnswer: 0,
    explanation: "ให้ลูก = x, พ่อ = 4x -> อีก 5 ปี: 4x + 5 = 3(x + 5) -> 4x + 5 = 3x + 15 -> x = 10 -> พ่อ = 40 ปี",
    trap: "ระวังลืมบวก 5 ปีให้อายุของลูกด้วย",
    shortcutTrick: "แทนช้อยส์: ถ้าพ่อ 40 ลูก 10 -> อีก 5 ปี พ่อ 45 ลูก 15 (45 = 15 × 3 พอดี)"
  },
  {
    id: "m09", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "อนุกรมและการหาผลรวม (เกาส์)",
    question: "ผลบวกของจำนวนคู่ตั้งแต่ 2 ถึง 100 (คือ \\( 2 + 4 + 6 + ... + 100 \\)) มีค่าเท่ากับข้อใด",
    options: ["2,550", "2,500", "5,050", "2,600"],
    correctAnswer: 0,
    explanation: "\\( 2(1 + 2 + 3 + ... + 50) = 2 \\times \\frac{50 \\times 51}{2} = 50 \\times 51 = 2,550 \\)",
    trap: "อย่าสับสนกับผลบวก 1 ถึง 100 ซึ่งได้ 5,050",
    shortcutTrick: "ผลบวกจำนวนคู่ n ตัวแรก = n(n + 1) -> มี 50 ตัว = 50 × 51 = 2,550"
  },
  {
    id: "m10", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "เรขาคณิต: มุมและเส้นขนาน",
    question: "มุมภายในของรูปหลายเหลี่ยมด้านเท่ามุมเท่ารูปหนึ่งกางมุมละ 140 องศา รูปหลายเหลี่ยมนี้มีทั้งหมดกี่ด้าน",
    options: ["9 ด้าน", "8 ด้าน", "10 ด้าน", "12 ด้าน"],
    correctAnswer: 0,
    explanation: "มุมภายนอก = 180 - 140 = 40° -> ผลรวมมุมภายนอกคือ 360° -> จำนวนด้าน = 360 / 40 = 9 ด้าน",
    trap: "คิดจากมุมภายนอกจะเร็วกว่าตั้งสมการมุมภายใน",
    shortcutTrick: "จำนวนด้าน = 360 / (180 - มุมภายใน) = 360 / 40 = 9 ด้าน"
  },
  {
    id: "m11", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "อัตราส่วนและมาตราส่วน",
    question: "อัตราส่วนของเงินของเอต่อบีเป็น 3 : 5 และบีต่อซีเป็น 2 : 3 ถ้าเอมีเงิน 180 บาท ซีจะมีเงินกี่บาท",
    options: ["450 บาท", "300 บาท", "540 บาท", "360 บาท"],
    correctAnswer: 0,
    explanation: "A:B = 6:10, B:C = 10:15 -> A:B:C = 6:10:15 -> A = 6 ส่วน = 180 (1 ส่วน = 30) -> C = 15 × 30 = 450 บาท",
    trap: "ต้องทำตัวเชื่อม B ให้มีอัตราส่วนเท่ากันก่อน (ค.ร.น. ของ 5 และ 2 คือ 10)",
    shortcutTrick: "A:B:C = (3×2) : (5×2) : (5×3) = 6 : 10 : 15"
  },
  {
    id: "m12", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "พื้นที่วงกลมและส่วนแรเงา",
    question: "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 เซนติเมตร บรรจุวงกลมแนบในพอดี จงหาพื้นที่ส่วนที่อยู่นอกวงกลมแต่อยู่ในสี่เหลี่ยม (กำหนด \\( \\pi \\approx \\frac{22}{7} \\))",
    options: ["42 ตร.ซม.", "56 ตร.ซม.", "28 ตร.ซม.", "84 ตร.ซม."],
    correctAnswer: 0,
    explanation: "พื้นที่สี่เหลี่ยม = 14 × 14 = 196 -> รัศมีวงกลม r = 7 -> พื้นที่วงกลม = (22/7) × 7 × 7 = 154 -> พื้นที่ส่วนเกิน = 196 - 154 = 42 ตร.ซม.",
    trap: "รัศมีคือครึ่งหนึ่งของด้านจัตุรัส (r = 7)",
    shortcutTrick: "พื้นที่มุม 4 มุมรอบวงกลมในจัตุรัส = \\( \\frac{3}{14} L^2 = \\frac{3}{14} \\times 14 \\times 14 = 42 \\)"
  },
  {
    id: "m13", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "ทศนิยมซ้ำ",
    question: "เศษส่วนในข้อใดมีค่าเท่ากับทศนิยมซ้ำ \\( 0.4\\dot{5} \\) (0.4555...)",
    options: ["\\( \\frac{41}{90} \\)", "\\( \\frac{45}{99} \\)", "\\( \\frac{45}{90} \\)", "\\( \\frac{41}{99} \\)"],
    correctAnswer: 0,
    explanation: "สูตรแปลงทศนิยมซ้ำ: (ตัวเลขทั้งหมด - ตัวที่ไม่ซ้ำ) / (9 ตามจำนวนตัวซ้ำ และ 0 ตามตัวไม่ซ้ำ) = (45 - 4) / 90 = 41/90",
    trap: "อย่าใช้ 45/99 เพราะซ้ำแค่เลข 5 ตัวเดียว",
    shortcutTrick: "ซ้ำ 1 ตัว ใส่ 9 ไม่ซ้ำ 1 ตัว ใส่ 0 -> ส่วนเป็น 90 -> เศษ = 45 - 4 = 41"
  },
  {
    id: "m14", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "ความน่าจะเป็นเบื้องต้น",
    question: "ทอดลูกเต๋า 2 ลูกพร้อมกัน 1 ครั้ง ความน่าจะเป็นที่ผลรวมของแต้มบนลูกเต๋าจะเท่ากับ 7 มีค่าเท่ากับข้อใด",
    options: ["\\( \\frac{1}{6} \\)", "\\( \\frac{1}{12} \\)", "\\( \\frac{7}{36} \\)", "\\( \\frac{5}{36} \\)"],
    correctAnswer: 0,
    explanation: "คู่ที่บวกได้ 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) รวม 6 แบบ จากทั้งหมด 36 แบบ -> 6/36 = 1/6",
    trap: "จำนวนผลลัพธ์ทั้งหมดของลูกเต๋า 2 ลูกคือ 6 × 6 = 36",
    shortcutTrick: "แต้ม 7 เป็นแต้มที่เกิดได้บ่อยที่สุดบนลูกเต๋า 2 ลูก = 6/36 = 1/6"
  },
  {
    id: "m15", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "โจทย์ขาและหัวสัตว์",
    question: "ในฟาร์มแห่งหนึ่งมีไก่และวัวรวมกัน 30 ตัว เมื่อนับขารวมกันได้ 84 ขา ในฟาร์มนี้มีวัวกี่ตัว",
    options: ["12 ตัว", "18 ตัว", "15 ตัว", "14 ตัว"],
    correctAnswer: 0,
    explanation: "สมมติให้เป็นไก่ทั้งหมด 30 ตัว จะมีขา = 30 × 2 = 60 ขา -> ขาขาดไป = 84 - 60 = 24 ขา -> วัว 1 ตัวมีขามากกว่าไก่ 2 ขา -> จำนวนวัว = 24 / 2 = 12 ตัว",
    trap: "อย่าลืมตรวจสอบว่าไก่มี 2 ขา วัวมี 4 ขา",
    shortcutTrick: "สูตรหาสัตว์ 4 ขา = (ขาจริง - หัว×2) / 2 = (84 - 60) / 2 = 12 ตัว"
  },
  {
    id: "m16", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "เศษส่วนแท้และเศษส่วนเกิน",
    question: "ถ้า \\( \\frac{a}{b} = \\frac{2}{3} \\) และ \\( \\frac{b}{c} = \\frac{4}{5} \\) แล้วค่าของ \\( \\frac{a + b}{b + c} \\) มีค่าเท่าใด",
    options: ["\\( \\frac{20}{27} \\)", "\\( \\frac{6}{8} \\)", "\\( \\frac{5}{7} \\)", "\\( \\frac{8}{15} \\)"],
    correctAnswer: 0,
    explanation: "a:b:c = 8:12:15 -> (a+b)/(b+c) = (8+12)/(12+15) = 20/27",
    trap: "ต้องทำ b ให้เท่ากันก่อนนำมาบวก",
    shortcutTrick: "a=8, b=12, c=15 -> (8+12)/(12+15) = 20/27"
  },
  {
    id: "m17", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "ปริมาตรและทรงกระบอก",
    question: "ถังน้ำทรงสี่เหลี่ยมมุมฉากกว้าง 20 ซม. ยาว 30 ซม. สูง 50 ซม. จุน้ำได้กี่ลิตร",
    options: ["30 ลิตร", "30,000 ลิตร", "3 ลิตร", "300 ลิตร"],
    correctAnswer: 0,
    explanation: "ปริมาตร = 20 × 30 × 50 = 30,000 ลบ.ซม. -> 1 ลิตร = 1,000 ลบ.ซม. -> 30,000 / 1,000 = 30 ลิตร",
    trap: "อย่าลืมแปลงลูกบาศก์เซนติเมตรเป็นลิตร (หารด้วย 1,000)",
    shortcutTrick: "1,000 cm³ = 1 ลิตร"
  },
  {
    id: "m18", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "มุมระหว่างเข็มนาฬิกา",
    question: "เวลา 03:30 น. เข็มสั้นและเข็มยาวของนาฬิกาทำมุมกี่องศา",
    options: ["75 องศา", "90 องศา", "85 องศา", "60 องศา"],
    correctAnswer: 0,
    explanation: "สูตรมุมนาฬิกา: |30H - 5.5M| = |30(3) - 5.5(30)| = |90 - 165| = 75°",
    trap: "เวลา 3:30 เข็มสั้นไม่ได้ชี้ที่เลข 3 ตรง แต่อยู่กึ่งกลางระหว่าง 3 กับ 4",
    shortcutTrick: "สูตรลัดมุมเข็มนาฬิกา: |30×ชั่วโมง - 5.5×นาที|"
  },
  {
    id: "m19", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "สถิติ: ค่าเฉลี่ยเลขคณิต",
    question: "นักเรียน 5 คนมีน้ำหนักเฉลี่ย 42 กิโลกรัม เมื่อมีนักเรียนใหม่เพิ่มมาอีก 1 คน ทำให้น้ำหนักเฉลี่ยกลายเป็น 44 กิโลกรัม นักเรียนคนใหม่หนักกี่กิโลกรัม",
    options: ["54 กก.", "50 กก.", "52 กก.", "48 กก."],
    correctAnswer: 0,
    explanation: "น้ำหนักรวมเดิม = 5 × 42 = 210 กก. -> น้ำหนักรวมใหม่ = 6 × 44 = 264 กก. -> คนใหม่ = 264 - 210 = 54 กก.",
    trap: "จำนวนคนใหม่เพิ่มเป็น 6 คน",
    shortcutTrick: "คนใหม่ = 42 + 6 × (44 - 42) = 42 + 12 = 54 กก."
  },
  {
    id: "m20", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "อนุกรมเรขาคณิตและเศษส่วนทอน",
    question: "ค่าของ \\( \\frac{1}{1\\times 2} + \\frac{1}{2\\times 3} + \\frac{1}{3\\times 4} + ... + \\frac{1}{99\\times 100} \\) มีค่าเท่ากับข้อใด",
    options: ["\\( \\frac{99}{100} \\)", "\\( \\frac{100}{101} \\)", "\\( \\frac{98}{99} \\)", "\\( 1 \\)"],
    correctAnswer: 0,
    explanation: "แยกเศษส่วนเทเลสโคปิก: (1 - 1/2) + (1/2 - 1/3) + ... + (1/99 - 1/100) = 1 - 1/100 = 99/100",
    trap: "พจน์ตรงกลางจะตัดกันหมด เหลือแค่พจน์แรกสุด ลบด้วย พจน์ท้ายสุด",
    shortcutTrick: "สูตรลัด Telescoping: พจน์แรก - พจน์ท้าย = 1/1 - 1/100 = 99/100"
  },
  {
    id: "m21", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "การนับจำนวนตัวประกอบ",
    question: "จำนวนนับ 360 มีจำนวนตัวประกอบที่เป็นบวกทั้งหมดกี่จำนวน",
    options: ["24 จำนวน", "18 จำนวน", "12 จำนวน", "30 จำนวน"],
    correctAnswer: 0,
    explanation: "360 = 2³ × 3² × 5¹ -> จำนวนตัวประกอบ = (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24",
    trap: "อย่าลืมบวก 1 ที่เลขชี้กำลังของทุกจำนวนเฉพาะก่อนนำมาคูณกัน",
    shortcutTrick: "แยกตัวประกอบเฉพาะ -> เอา (เลขชี้กำลัง + 1) ของทุกตัวมาคูณกัน"
  },
  {
    id: "m22", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "ร้อยละสารละลาย",
    question: "น้ำเชื่อม 200 กรัม มีความเข้มข้น 15% ถ้าเติมน้ำบริสุทธิ์ลงไปอีก 100 กรัม น้ำเชื่อมใหม่จะมีความเข้มข้นร้อยละเท่าใด",
    options: ["10%", "12%", "8%", "7.5%"],
    correctAnswer: 0,
    explanation: "เนื้อน้ำตาล = 200 × 0.15 = 30 กรัม -> น้ำหนักรวมใหม่ = 200 + 100 = 300 กรัม -> ความเข้มข้น = (30/300) × 100 = 10%",
    trap: "น้ำตาลไม่เพิ่มขึ้น เพิ่มแค่น้ำหนักของเหลวรวม",
    shortcutTrick: "(200 × 15) = (300 × C) -> C = 3000 / 300 = 10%"
  },
  {
    id: "m23", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "การหารลงตัว (Divisibility Rule)",
    question: "เลข 5 หลัก '47A2B' หารด้วย 36 ลงตัว ผลบวกของ A + B ที่เป็นไปได้ที่มีค่ามากที่สุดคือข้อใด",
    options: ["14", "11", "16", "9"],
    correctAnswer: 0,
    explanation: "หารด้วย 36 ลงตัว ต้องหารด้วย 4 และ 9 ลงตัว -> ลงท้าย '2B' หารด้วย 4 ลงตัว B ต้องเป็น 0, 4, 8 -> ถ้า B=8: 4+7+A+2+8 = 21+A ต้องหาร 9 ลงตัว -> A=6 -> A+B = 6+8 = 14",
    trap: "ต้องตรวจสอบทั้งกฎการหารด้วย 4 (ดู 2 หลักท้าย) และกฎการหารด้วย 9 (ผลรวมเลขโดด)",
    shortcutTrick: "หารด้วย 36 = หารด้วย 4 และ 9 ลงตัวพร้อมกัน"
  },
  {
    id: "m24", subject: "math", subjectName: "คณิตศาสตร์", track: "Gifted", difficulty: 3,
    topic: "ทฤษฎีบทพีทาโกรัสเบื้องต้น",
    question: "บันไดยาว 10 เมตร พาดอยู่กับกำแพงตึก โดยโคนบันไดอยู่ห่างจากกำแพง 6 เมตร ปลายบันไดจะแตะกำแพงที่ความสูงกี่เมตรจากพื้น",
    options: ["8 เมตร", "7 เมตร", "9 เมตร", "6.5 เมตร"],
    correctAnswer: 0,
    explanation: "จากสามเหลี่ยมมุมฉาก c² = a² + b² -> 10² = 6² + h² -> 100 = 36 + h² -> h² = 64 -> h = 8 เมตร",
    trap: "ชุดตัวเลขสามเหลี่ยมมุมฉากยอดนิยมคือ 3-4-5 หรือ 6-8-10",
    shortcutTrick: "จำชุดตัวเลขพีทาโกรัส: 6, 8, 10"
  },
  {
    id: "m25", subject: "math", subjectName: "คณิตศาสตร์", track: "Regular", difficulty: 2,
    topic: "สมการเศษส่วน",
    question: "ถ้า \\( \\frac{2x - 3}{5} = \\frac{x + 4}{3} \\) แล้วค่าของ \\( x \\) คือข้อใด",
    options: ["29", "25", "19", "31"],
    correctAnswer: 0,
    explanation: "คูณไขว้: 3(2x - 3) = 5(x + 4) -> 6x - 9 = 5x + 20 -> x = 29",
    trap: "ระวังคูณกระจายตัวเลขหน้าวงเล็บผิด",
    shortcutTrick: "คูณไขว้เพื่อกำจัดตัวส่วน"
  },

  // =========================================================================
  // 2. SCIENCE (วิทยาศาสตร์ - 25 ข้อ)
  // =========================================================================
  {
    id: "s01", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "การสังเคราะห์ด้วยแสง",
    question: "การทดลองนำพืชใบลายที่ได้รับแสงแดดเต็มที่มาต้มในแอลกอฮอล์แล้วหยดด้วยสารละลายไอโอดีน บริเวณใดของใบที่จะเปลี่ยนเป็นสีน้ำเงินเข้ม",
    options: ["เฉพาะบริเวณที่มีสีเขียวเดิม เพราะมีคลอโรฟิลล์ในการสร้างแป้ง", "เฉพาะบริเวณแถบสีขาว", "เปลี่ยนเป็นสีน้ำเงินเข้มทั่วทั้งใบ", "ไม่เปลี่ยนสีเลย"],
    correctAnswer: 0,
    explanation: "บริเวณสีเขียวเดิมมีคลอโรฟิลล์สังเคราะห์แสงได้แป้ง สารละลายไอโอดีนจึงเปลี่ยนเป็นสีน้ำเงินเข้มเฉพาะบริเวณนั้น",
    trap: "แอลกอฮอล์ใช้สกัดคลอโรฟิลล์ออก ไม่ได้ทำลายแป้ง",
    shortcutTrick: "คลอโรฟิลล์ = สังเคราะห์แสง = มีแป้ง = ไอโอดีนสีน้ำเงิน"
  },
  {
    id: "s02", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "ระบบหมุนเวียนเลือดและหัวใจ",
    question: "ห้องหัวใจห้องใดของมนุษย์ที่มีผนังกล้ามเนื้อหนาที่สุด และทำหน้าที่ใด",
    options: ["ห้องล่างซ้าย (Left Ventricle) - สูบฉีดเลือดไปเลี้ยงทั่วร่างกาย", "ห้องล่างขวา - สูบฉีดเลือดไปปอด", "ห้องบนซ้าย - รับเลือดจากปอด", "ห้องบนขวา - รับเลือดเสียจากร่างกาย"],
    correctAnswer: 0,
    explanation: "ห้องล่างซ้ายต้องใช้แรงดันมหาศาลสูบฉีดเลือดแดงไปเลี้ยงทั่วร่างกาย ผนังจึงหนาที่สุด",
    trap: "ระวังจำสับสนกับห้องล่างขวาที่ส่งไปแค่ปอด",
    shortcutTrick: "ล่างซ้าย = แรงสุด ผนังหนาสุด = เลี้ยงทั่วร่าง"
  },
  {
    id: "s03", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "กฎ 10% การถ่ายทอดพลังงาน",
    question: "ในโซ่อาหาร หากผู้ผลิตมีพลังงาน 10,000 kcal ผู้บริโภคลำดับที่ 3 จะได้รับพลังงานถ่ายทอดประมาณกี่ kcal",
    options: ["10 kcal", "100 kcal", "1,000 kcal", "1 kcal"],
    correctAnswer: 0,
    explanation: "ผู้ผลิต (10,000) -> ลำดับ 1 (1,000) -> ลำดับ 2 (100) -> ลำดับ 3 (10 kcal)",
    trap: "ผู้บริโภคลำดับที่ 1 คือสัตว์กินพืชตัวแรก ไม่ใช่ตัวพืช",
    shortcutTrick: "ขยับขึ้น 1 ขั้น พลังงานหาร 10 เสมอ"
  },
  {
    id: "s04", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "การทดสอบสารอาหาร",
    question: "สารละลายเบเนดิกต์ใช้ทดสอบสารอาหารชนิดใด และต้องทำอย่างไรจึงจะเห็นผลชัดเจน",
    options: ["น้ำตาลโมเลกุลเดี่ยว (ต้องต้มในน้ำร้อน) ได้ตะกอนสีส้มอิฐ", "แป้ง (ไม่ต้องต้ม) ได้สีม่วง", "โปรตีน (ต้องต้ม) ได้สีชมพู", "ไขมัน ได้สารละลายใส"],
    correctAnswer: 0,
    explanation: "เบเนดิกต์ทดสอบน้ำตาลรีดิวซ์ ต้องต้มในน้ำร้อน จะเกิดตะกอนสีส้มอิฐ",
    trap: "น้ำตาลทราย (ซูโครส) ไม่เปลี่ยนสีกับเบเนดิกต์",
    shortcutTrick: "เบเนดิกต์ = น้ำตาล + ต้องต้ม = ส้มอิฐ"
  },
  {
    id: "s05", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "แรงพยุงและความหนาแน่น",
    question: "วัตถุมวล 60 กรัม ปริมาตร 100 ลบ.ซม. เมื่อนำไปลอยในน้ำบริสุทธิ์ (ความหนาแน่น 1 g/cm³) จะมีส่วนจมน้ำกี่เปอร์เซ็นต์",
    options: ["จม 60% โผล่พ้นน้ำ 40%", "จม 40% โผล่พ้นน้ำ 60%", "จมมิด 100%", "ลอยปริ่มน้ำพอดี"],
    correctAnswer: 0,
    explanation: "ความหนาแน่น = 60/100 = 0.6 g/cm³ -> สัดส่วนที่จมน้ำ = 0.6/1.0 = 60%",
    trap: "อย่าคิดว่าความหนาแน่น 0.6 คือส่วนที่โผล่",
    shortcutTrick: "ความหนาแน่นวัตถุ / ความหนาแน่นของเหลว = สัดส่วนที่จมน้ำ"
  },
  {
    id: "s06", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "วงจรไฟฟ้า: กฎของโอห์ม",
    question: "วงจรไฟฟ้ามีความต่างศักย์ 12 โวลต์ ต่อกับตัวต้านทาน 4 โอห์ม จะมีกระแสไฟฟ้าไหลผ่านกี่แอมแปร์",
    options: ["3 แอมแปร์", "48 แอมแปร์", "0.33 แอมแปร์", "8 แอมแปร์"],
    correctAnswer: 0,
    explanation: "จากสูตร V = I × R -> I = V / R = 12 / 4 = 3 แอมแปร์",
    trap: "อย่าเอา V กับ R มาคูณกัน",
    shortcutTrick: "V = IR -> I = V/R"
  },
  {
    id: "s07", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "การแยกสาร",
    question: "หากต้องการแยกสารสีในใบไม้ออกจากกัน ควรใช้วิธีการใดเหมาะสมที่สุด",
    options: ["โครมาโทกราฟี (Chromatography)", "การกลั่นลำดับส่วน", "การระเหยแห้ง", "การตกผลึก"],
    correctAnswer: 0,
    explanation: "โครมาโทกราฟีใช้แยกสารผสมที่มีปริมาณน้อยและมีความสามารถในการละลาย/ดูดซับต่างกัน เช่น รงควัตถุในพืช",
    trap: "การกรองไม่สามารถแยกสารสีที่ละลายในตัวทำละลายได้",
    shortcutTrick: "แยกสารสีปริมาณน้อย = โครมาโทกราฟี"
  },
  {
    id: "s08", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "แสงและเลนส์",
    question: "ภาพที่เกิดจาก 'แว่นขยาย' (เลนส์นูนเมื่อวัตถุอยู่ใกล้กว่าจุดโฟกัส) มีลักษณะอย่างไร",
    options: ["ภาพเสมือน หัวตั้ง ขนาดใหญ่กว่าวัตถุ", "ภาพจริง หัวกลับ ขนาดใหญ่กว่าวัตถุ", "ภาพเสมือน หัวกลับ ขนาดเล็กกว่าวัตถุ", "ภาพจริง หัวตั้ง ขนาดเท่าวัตถุ"],
    correctAnswer: 0,
    explanation: "เมื่อวางวัตถุไว้หน้าเลนส์นูนใกล้กว่าจุดโฟกัส (s < f) จะเกิดภาพเสมือน หัวตั้ง ขนาดขยายใหญ่ขึ้น",
    trap: "ภาพเสมือนจะมีลักษณะหัวตั้งเสมอ ไม่ใช่หัวกลับ",
    shortcutTrick: "แว่นขยาย = เลนส์นูน = ภาพเสมือน หัวตั้ง ขยายใหญ่"
  },
  {
    id: "s09", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "ดาราศาสตร์: น้ำขึ้น-น้ำลง",
    question: "ปรากฏการณ์ 'น้ำเกิด' (Spring Tides) ที่มีระดับน้ำขึ้นสูงสุดและลงต่ำสุด เกิดขึ้นในวันใด",
    options: ["วันขึ้น 15 ค่ำ และ แรม 15 ค่ำ", "วันขึ้น 8 ค่ำ และ แรม 8 ค่ำ", "วันแรม 1 ค่ำ เท่านั้น", "วันขึ้น 1 ค่ำ เท่านั้น"],
    correctAnswer: 0,
    explanation: "วันขึ้น 15 ค่ำ และแรม 15 ค่ำ ดวงอาทิตย์ โลก และดวงจันทร์เรียงตัวในแนวเส้นตรงเดียวกัน แรงดึงดูดเสริมกันจึงเกิดน้ำเกิด",
    trap: "วันขึ้น 8 ค่ำ และแรม 8 ค่ำ เป็น 'น้ำตาย' (Neap Tides)",
    shortcutTrick: "พระจันทร์เต็มดวง/มืดสนิท (ขึ้น 15 / แรม 15) = น้ำเกิด (แรงดึงดูดรวมพลัง)"
  },
  {
    id: "s10", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "พันธุศาสตร์เบื้องต้น",
    question: "ถั่วลันเตาต้นสูงพันธุ์แท้ (TT) ผสมกับต้นเตี้ย (tt) ในรุ่นลูก F1 จะมีลักษณะฟีโนไทป์และจีโนไทป์เป็นอย่างไร",
    options: ["ต้นสูงทั้งหมด (Tt 100%)", "ต้นสูง 50% ต้นเตี้ย 50%", "ต้นเตี้ยทั้งหมด (tt 100%)", "ต้นสูง 75% ต้นเตี้ย 25%"],
    correctAnswer: 0,
    explanation: "TT x tt -> เซลล์สืบพันธุ์ T และ t ผสมกันได้จีโนไทป์ Tt (เฮเทอโรไซกัส) ทั้งหมด 100% แสดงฟีโนไทป์ต้นสูง",
    trap: "อัตราส่วน 3:1 จะเกิดในรุ่นหลาน (F2) ไม่ใช่รุ่นลูก F1",
    shortcutTrick: "เด่นแท้ × ด้อยแท้ = รุ่นลูกได้เด่นพันทาง 100%"
  },
  {
    id: "s11", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "บรรยากาศและการเปลี่ยนแปลงสภาพภูมิอากาศ",
    question: "ชั้นบรรยากาศใดที่มีปรากฏการณ์สภาพอากาศ เช่น เมฆ หมอก ฝน และพายุ เกิดขึ้นมากที่สุด",
    options: ["โทรโพสเฟียร์ (Troposphere)", "สตราโตสเฟียร์ (Stratosphere)", "มีโซสเฟียร์ (Mesosphere)", "เทอร์โมสเฟียร์ (Thermosphere)"],
    correctAnswer: 0,
    explanation: "ชั้นโทรโพสเฟียร์เป็นชั้นบรรยากาศที่อยู่ติดผิวโลก มีไอน้ำและอากาศหนาแน่นที่สุด จึงเกิดปรากฏการณ์สภาพอากาศทั้งหมด",
    trap: "สตราโตสเฟียร์มีโอโซนและเครื่องบินไอพ่นบิน ไม่มีเมฆฝน",
    shortcutTrick: "โทรโพสเฟียร์ = ชั้นติดดิน = ฝนตก ฟ้าร้อง เมฆหมอก"
  },
  {
    id: "s12", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "การต่อเซลล์ไฟฟ้า",
    question: "ถ่านไฟฉายก้อนละ 1.5 โวลต์ จำนวน 4 ก้อน นำมาต่อกันแบบ 'ขนาน' ทั้งหมด จะได้แรงดันไฟฟ้ารวมกี่โวลต์",
    options: ["1.5 โวลต์", "6.0 โวลต์", "3.0 โวลต์", "0.375 โวลต์"],
    correctAnswer: 0,
    explanation: "การต่อเซลล์ไฟฟ้าแบบขนาน แรงดันไฟฟ้ารวมจะเท่ากับแรงดันของก้อนเดียว (1.5V) แต่จะจ่ายกระแสไฟฟ้าได้นานขึ้น",
    trap: "ถ้าต่อแบบอนุกรมจึงจะเอาแรงดันมารวมกันได้ 1.5 × 4 = 6.0V",
    shortcutTrick: "ถ่านต่อขนาน = โวลต์เท่าเดิม (1.5V) ใช้นานขึ้น"
  },
  {
    id: "s13", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "หินและวัฏจักรของหิน",
    question: "หินในข้อใดจัดเป็น 'หินอัคนี' (Igneous Rock)",
    options: ["หินแกรนิต, หินบะซอลต์, หินพัมมิซ", "หินปูน, หินทราย, หินดินดาน", "หินอ่อน, หินชนวน, หินไนส์", "หินศิลาแลง, หินกรวดมน"],
    correctAnswer: 0,
    explanation: "หินอัคนีเกิดจากการเย็นตัวของแมกมา/ลาวา ได้แก่ แกรนิต, บะซอลต์, พัมมิซ, ออบซิเดียน (หินปูน=ตะกอน, หินอ่อน=แปร)",
    trap: "หินอ่อนแปรมาจากหินปูน ไม่ใช่หินอัคนี",
    shortcutTrick: "หินอัคนี = เกิดจากไฟ/ลาวา (แกรนิต, บะซอลต์, พัมมิซ)"
  },
  {
    id: "s14", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "ระบบย่อยอาหาร",
    question: "การย่อยสารอาหารประเภท 'ไขมัน' เริ่มต้นย่อยทางเคมีอย่างสมบูรณ์ที่อวัยวะใด",
    options: ["ลำไส้เล็ก (Small Intestine)", "กระเพาะอาหาร (Stomach)", "ปาก (Mouth)", "ตับ (Liver)"],
    correctAnswer: 0,
    explanation: "น้ำดีจากตับช่วยทำให้ไขมันแตกตัวเป็นละออง แล้วเอนไซม์ไลเปสจากตับอ่อนจะย่อยไขมันใน 'ลำไส้เล็ก'",
    trap: "ตับไม่ได้ย่อยสารอาหารโดยตรง แต่ผลิตน้ำดีช่วยให้ไขมันแตกตัว",
    shortcutTrick: "ไขมันย่อยที่เดียวจบ = ลำไส้เล็ก"
  },
  {
    id: "s15", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "เสียงและการได้ยิน",
    question: "คลื่นเสียงไม่สามารถเดินทางผ่านตัวกลางในข้อใดได้",
    options: ["สุญญากาศ (Vacuum)", "น้ำทะเล", "แท่งเหล็ก", "อากาศร้อน"],
    correctAnswer: 0,
    explanation: "เสียงเป็นคลื่นกล (Mechanical Wave) ต้องอาศัยอนุภาคของตัวกลางในการสั่นสะเทือน จึงเดินทางผ่านสุญญากาศไม่ได้",
    trap: "แสงเดินทางผ่านสุญญากาศได้ แต่เสียงทำไม่ได้",
    shortcutTrick: "ไม่มีอากาศ/ตัวกลาง (สุญญากาศในอวกาศ) = เสียงเดินทางไม่ได้"
  },
  {
    id: "s16", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "ความดันของของเหลว",
    question: "ปัจจัยใดที่มีผลทำให้ความดันของของเหลวที่จุดใดๆ มีค่าเพิ่มขึ้น",
    options: ["ความลึกและความหนาแน่นของของเหลว", "รูปร่างของภาชนะบรรจุ", "ปริมาตรทั้งหมดของของเหลว", "พื้นที่ผิวหน้าของของเหลว"],
    correctAnswer: 0,
    explanation: "ความดันของเหลว P = ρgh ขึ้นอยู่กับความหนาแน่น (ρ) และระดับความลึก (h) เท่านั้น ไม่ขึ้นกับรูปร่างภาชนะ",
    trap: "รูปร่างภาชนะไม่มีผลต่อความดันที่ระดับความลึกเดียวกัน",
    shortcutTrick: "ยิ่งลึก + ยิ่งหนาแน่น = ความดันยิ่งมาก (P = ρgh)"
  },
  {
    id: "s17", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "การถ่ายโอนความร้อน",
    question: "การที่เรารู้สึกร้อนเมื่อยืนอยู่ข้างกองไฟ เป็นการถ่ายโอนความร้อนแบบใดเป็นหลัก",
    options: ["การแผ่รังสีความร้อน (Radiation)", "การนำความร้อน (Conduction)", "การพาความร้อน (Convection)", "การสะท้อนความร้อน"],
    correctAnswer: 0,
    explanation: "การแผ่รังสีความร้อนไม่ต้องอาศัยตัวกลาง เดินทางในรูปคลื่นแม่เหล็กไฟฟ้า (รังสีอินฟราเรด) มาถึงตัวเราข้างกองไฟ",
    trap: "การพาความร้อน อากาศร้อนจะลอยตัวขึ้นด้านบนตรงๆ ไม่ได้พัดมาด้านข้างเป็นหลัก",
    shortcutTrick: "อยู่ข้างกองไฟ / แสงแดด = การแผ่รังสีความร้อน"
  },
  {
    id: "s18", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "กรด-เบสในชีวิตประจำวัน",
    question: "สารในข้อใดมีสมบัติเป็น 'เบส' และเปลี่ยนสีกระดาษลิตมัสจากสีแดงเป็นสีน้ำเงิน",
    options: ["น้ำขี้เถ้าและน้ำสบู่", "น้ำมะนาวและน้ำส้มสายชู", "น้ำอัดลมและน้ำย่อยในกระเพาะ", "น้ำกลั่นบริสุทธิ์"],
    correctAnswer: 0,
    explanation: "สบู่ น้ำขี้เถ้า ผงซักฟอก มีฤทธิ์เป็นเบส (pH > 7) เปลี่ยนกระดาษลิตมัสสีแดงเป็นน้ำเงิน และมีรสฝาดลื่นมือ",
    trap: "น้ำมะนาวและน้ำส้มสายชูเป็นกรด เปลี่ยนน้ำเงินเป็นแดง",
    shortcutTrick: "เบส = ลื่นฝาด = แดงเป็นน้ำเงิน"
  },
  {
    id: "s19", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "ระบบประสาทและรีเฟล็กซ์",
    question: "การกระตุกขาหนีทันทีเมื่อเหยียบของมีคม เป็นการทำงานของระบบใดโดยไม่ต้องผ่านการสั่งการจากสมอง",
    options: ["ปฏิกิริยารีเฟล็กซ์ (Reflex Action) ควบคุมโดยไขสันหลัง", "ระบบกล้ามเนื้อลายควบคุมตนเอง", "ระบบประสาทซิมพาเทติก", "การสั่งการอัตโนมัติจากสมองส่วนหน้า"],
    correctAnswer: 0,
    explanation: "Reflex Action เป็นการตอบสนองฉับพลันเพื่อป้องกันอันตราย โดยคำสั่งผ่าน 'ไขสันหลัง' (Spinal Cord) โดยตรงก่อนถึงสมอง",
    trap: "สมองจะรับรู้ความเจ็บปวดหลังจากร่างกายกระตุกหลบเรียบร้อยแล้ว",
    shortcutTrick: "เหยียบหนามกระตุกเท้าทันที = ไขสันหลังสั่ง (Reflex)"
  },
  {
    id: "s20", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "การหายใจและการแลกเปลี่ยนแก๊ส",
    question: "ขณะที่เรา 'หายใจเข้า' กะบังลมและกระดูกซี่โครงจะมีการเคลื่อนที่อย่างไร",
    options: ["กะบังลมเลื่อนต่ำลง กระดูกซี่โครงยกตัวสูงขึ้น", "กะบังลมยกตัวสูงขึ้น กระดูกซี่โครงลดต่ำลง", "กะบังลมและกระดูกซี่โครงยกสูงขึ้นพร้อมกัน", "กะบังลมและกระดูกซี่โครงลดต่ำลงพร้อมกัน"],
    correctAnswer: 0,
    explanation: "หายใจเข้า: กะบังลมหดตัวเลื่อนต่ำลง + กระดูกซี่โครงยกสูงขึ้น ทำให้ช่องอกขยาย ปริมาตรเพิ่ม ความดันลด อากาศจึงไหลเข้าปอด",
    trap: "จำสับสนระหว่างกะบังลมกับซี่โครง",
    shortcutTrick: "หายใจเข้า = อกพอง (ซี่โครงยกสูง) + ท้องป่อง (กะบังลมกดต่ำลง)"
  },
  {
    id: "s21", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "ดาราศาสตร์: สุริยุปราคา",
    question: "ปรากฏการณ์ 'สุริยุปราคา' จะเกิดขึ้นได้เมื่อวัตถุท้องฟ้าเรียงตัวกันในลักษณะใดและในเวลาใด",
    options: ["ดวงอาทิตย์ - ดวงจันทร์ - โลก (เวลากลางวัน วันแรม 15 ค่ำ)", "ดวงอาทิตย์ - โลก - ดวงจันทร์ (เวลากลางคืน วันขึ้น 15 ค่ำ)", "โลก - ดวงอาทิตย์ - ดวงจันทร์ (เวลากลางวัน)", "ดวงจันทร์ - ดวงอาทิตย์ - โลก (เวลากลางคืน)"],
    correctAnswer: 0,
    explanation: "สุริยุปราคา = ดวงจันทร์อยู่ตรงกลางบังแสงอาทิตย์ เกิดในเวลากลางวัน วันเดือนดับ (แรม 15 ค่ำ)",
    trap: "ถ้าโลกอยู่ตรงกลางบังดวงจันทร์ตอนกลางคืน คือ 'จันทรุปราคา'",
    shortcutTrick: "สุริยุปราคา = จันทร์อยู่กลาง (Sun-Moon-Earth) กลางวัน"
  },
  {
    id: "s22", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "การปรับตัวของสิ่งมีชีวิต",
    question: "กระบองเพชรเปลี่ยนใบให้กลายเป็นหนาม มีวัตถุประสงค์หลักเพื่ออะไร",
    options: ["ลดการคายน้ำในสภาพแวดล้อมที่แห้งแล้ง", "ป้องกันสัตว์มากินเป็นอาหารเท่านั้น", "ช่วยในการสังเคราะห์ด้วยแสงได้ดีขึ้น", "ช่วยดูดซับน้ำค้างในเวลากลางคืน"],
    correctAnswer: 0,
    explanation: "พืชทะเลทรายลดพื้นที่ผิวใบโดยเปลี่ยนเป็นหนามเพื่อลดการสูญเสียน้ำจากการคายน้ำ และใช้ลำต้นสีเขียวสังเคราะห์แสงแทน",
    trap: "ป้องกันสัตว์เป็นประโยชน์รอง วัตถุประสงค์หลักทางสรีรวิทยาคือลดการคายน้ำ",
    shortcutTrick: "ใบเป็นหนาม = ลดการคายน้ำ"
  },
  {
    id: "s23", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "การหักเหของแสง",
    question: "เมื่อแสงเดินทางจาก 'น้ำ' ออกสู่ 'อากาศ' ลำแสงจะมีการหักเหอย่างไร",
    options: ["หักเหเบนออกจากเส้นแนวฉาก (ความเร็วแสงเพิ่มขึ้น)", "หักเหเบนเข้าหาเส้นแนวฉาก", "เดินทางเป็นเส้นตรงต่อไปไม่เบน", "สะท้อนกลับหมดเสมอทุกมุม"],
    correctAnswer: 0,
    explanation: "แสงจากตัวกลางหนาแน่นมาก (น้ำ) ไปสู่หนาแน่นน้อย (อากาศ) ความเร็วจะเพิ่มขึ้น ทำให้มุมหักเหเบนออกจากเส้นแนวฉาก",
    trap: "ถ้าจากอากาศไปน้ำ จะเบนเข้าหาเส้นแนวฉาก",
    shortcutTrick: "หนาแน่นมาก -> น้อย = เบนออกเส้นฉาก"
  },
  {
    id: "s24", subject: "science", subjectName: "วิทยาศาสตร์", track: "Regular", difficulty: 2,
    topic: "การเปลี่ยนแปลงทางกายภาพและทางเคมี",
    question: "ข้อใดจัดเป็นการเปลี่ยนแปลงทาง 'เคมี' (Chemical Change)",
    options: ["การเกิดสนิมเหล็กบนตะปู", "การละลายของน้ำแข็งกลายเป็นน้ำ", "การระเหยของแอลกอฮอล์", "การฉีกกระดาษเป็นชิ้นเล็กๆ"],
    correctAnswer: 0,
    explanation: "การเกิดสนิมเหล็กเกิดสารใหม่ (Iron Oxide) ไม่สามารถเปลี่ยนกลับได้ง่าย เป็นการเปลี่ยนแปลงทางเคมี ส่วนข้ออื่นเป็นกายภาพ",
    trap: "การละลายและการเปลี่ยนสถานะเป็นการเปลี่ยนแปลงทางกายภาพ ไม่ใช่เคมี",
    shortcutTrick: "เกิดสารใหม่ คืนรูปเดิมไม่ได้ = เคมี"
  },
  {
    id: "s25", subject: "science", subjectName: "วิทยาศาสตร์", track: "Gifted", difficulty: 3,
    topic: "แรงเสียดทาน",
    question: "การกระทำในข้อใดเป็นการ 'เพิ่มแรงเสียดทาน' ที่เป็นประโยชน์",
    options: ["การทำลวดลายดอกยางบนล้อรถยนต์", "การหยอดน้ำมันหล่อลื่นที่โซ่จักรยาน", "การใช้ตลับลูกปืนในพัดลม", "การขัดพื้นผิวรางเลื่อนให้เรียบ"],
    correctAnswer: 0,
    explanation: "ดอกยางรถยนต์ช่วยเพิ่มแรงเสียดทานระหว่างยางกับพื้นถนน ทำให้รถเกาะถนน ไม่ลื่นไถลขณะเบรก",
    trap: "น้ำมันหล่อลื่นและตลับลูกปืนทำหน้าที่ 'ลด' แรงเสียดทาน",
    shortcutTrick: "ดอกยาง / พื้นรองเท้ากีฬา = เพิ่มแรงเสียดทานเพื่อเกาะถนน"
  },

  // =========================================================================
  // 3. ENGLISH (ภาษาอังกฤษ - 20 ข้อ)
  // =========================================================================
  {
    id: "e01", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "If-Clauses (Second Conditional)",
    question: "If I ______ enough money right now, I would buy that expensive telescope to observe the planets.",
    options: ["had", "have", "will have", "would have"],
    correctAnswer: 0,
    explanation: "Second Conditional (สมมติสิ่งที่ไม่จริงในปัจจุบัน): If + Past Simple (had), S + would + V1",
    trap: "อย่าใช้ have หรือ would have ใน If-clause",
    shortcutTrick: "would + V.inf คู่กับ V.2 เสมอ"
  },
  {
    id: "e02", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Subject-Verb Agreement",
    question: "Neither the teacher nor the students ______ present in the science laboratory yesterday morning.",
    options: ["were", "was", "are", "is"],
    correctAnswer: 0,
    explanation: "โครงสร้าง Neither A nor B กริยาผันตามประธาน B (the students = were ในอดีต)",
    trap: "อย่าดูแค่ประธานตัวหน้า the teacher",
    shortcutTrick: "Neither A nor B -> กริยาตามประธาน B"
  },
  {
    id: "e03", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Past Continuous vs Past Simple",
    question: "While my mother ______ dinner in the kitchen, the telephone suddenly rang.",
    options: ["was cooking", "cooked", "is cooking", "cooks"],
    correctAnswer: 0,
    explanation: "หลัง While มักตามด้วยเหตุการณ์ที่กำลังดำเนินอยู่ (Past Continuous: was cooking) แล้วมีอีกเหตุการณ์แทรกเข้ามา",
    trap: "อย่าใช้ Past Simple คู่กันถ้าเป็นการเน้นเหตุการณ์ที่กำลังทำอยู่",
    shortcutTrick: "While + was/were + V.ing (กำลังทำอยู่)"
  },
  {
    id: "e04", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Question Tags",
    question: "He seldom goes to school by bus, ______?",
    options: ["does he", "doesn't he", "is he", "isn't he"],
    correctAnswer: 0,
    explanation: "คำว่า seldom มีความหมายปฏิเสธในตัว Question Tag จึงต้องเป็นบอกเล่า (does he)",
    trap: "seldom, rarely, never ถือเป็นประโยคปฏิเสธ",
    shortcutTrick: "คำบอกปฏิเสธ -> Tag ต้องเป็น 'บอกเล่า'"
  },
  {
    id: "e05", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Passive Voice in Past Simple",
    question: "The famous novel 'Harry Potter' ______ by J.K. Rowling in 1997.",
    options: ["was written", "wrote", "has written", "is writing"],
    correctAnswer: 0,
    explanation: "ประธานเป็นสิ่งของถูกกระทำในอดีต (Passive Voice): was/were + V3 -> was written",
    trap: "wrote แปลว่าหนังสือนวนิยายลงมือเขียนตัวเอง",
    shortcutTrick: "ประธานเป็นสิ่งของ + ถูกกระทำ = be + V.3 เสมอ"
  },
  {
    id: "e06", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Relative Pronouns",
    question: "The boy ______ bicycle was stolen yesterday is crying in front of the classroom.",
    options: ["whose", "who", "whom", "which"],
    correctAnswer: 0,
    explanation: "whose แสดงความเป็นเจ้าของจักรยาน (The boy's bicycle)",
    trap: "who ใช้เมื่อแทนคนทำหน้าที่เป็นประธาน ส่วน whose ใช้แสดงความเป็นเจ้าของ",
    shortcutTrick: "คน + คำนามที่เป็นของคนนั้น = whose เสมอ"
  },
  {
    id: "e07", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Prepositions of Time",
    question: "The entrance examination of Horwang School will take place ______ March 25th.",
    options: ["on", "in", "at", "by"],
    correctAnswer: 0,
    explanation: "ใช้วันที่หรือวันเฉพาะเจาะจงต้องใช้บุพบท 'on' (on March 25th)",
    trap: "in ใช้กับเดือนหรือปีเดี่ยวๆ แต่ถ้ามีระบุวันต้องใช้ on",
    shortcutTrick: "วัน / วันที่ = on เสมอ"
  },
  {
    id: "e08", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Causative Verbs (make/let/have)",
    question: "Our strict English teacher made us ______ the vocabulary list ten times.",
    options: ["rewrite", "to rewrite", "rewriting", "rewrote"],
    correctAnswer: 0,
    explanation: "make + someone + V.inf (กริยาไม่ผันไม่มี to) หมายถึง บังคับหรือสั่งให้ทำ",
    trap: "อย่าใส่ to rewrite หลัง make/let",
    shortcutTrick: "make / let / have + คน + V.inf (ห้ามมี to)"
  },
  {
    id: "e09", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Comparatives & Superlatives",
    question: "Mount Everest is ______ mountain in the world.",
    options: ["the highest", "higher", "highest", "the most high"],
    correctAnswer: 0,
    explanation: "ขั้นสุดของคำพยางค์เดียวคือ the + adj-est -> the highest",
    trap: "ขั้นสุดต้องมี the นำหน้าเสมอ",
    shortcutTrick: "ขั้นสุด = the + highest"
  },
  {
    id: "e10", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Present Perfect vs Past Simple",
    question: "They ______ in Bangkok since they were young children.",
    options: ["have lived", "lived", "are living", "will live"],
    correctAnswer: 0,
    explanation: "มีคำว่า since (ตั้งแต่) แสดงเหตุการณ์ที่เกิดขึ้นตั้งแต่อดีตจนถึงปัจจุบัน ใช้ Present Perfect (have + V3)",
    trap: "อย่าใช้ Past Simple กับ since ที่ส่งผลถึงปัจจุบัน",
    shortcutTrick: "since / for = Present Perfect (have/has + V.3)"
  },
  {
    id: "e11", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Quantifiers: A few vs A little",
    question: "Could you please add ______ sugar into my coffee? It is too bitter.",
    options: ["a little", "a few", "many", "few"],
    correctAnswer: 0,
    explanation: "sugar เป็นคำนามนับไม่ได้ ต้องใช้ 'a little' (นิดหน่อยในเชิงบวก)",
    trap: "a few ใช้กับคำนามนับได้พหูพจน์เท่านั้น",
    shortcutTrick: "นามนับไม่ได้ = a little / นามนับได้ = a few"
  },
  {
    id: "e12", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Gerund vs Infinitive",
    question: "My father suggested ______ a taxi because of the heavy rain.",
    options: ["taking", "to take", "take", "took"],
    correctAnswer: 0,
    explanation: "กริยา 'suggest' ต้องตามด้วย Gerund (V.ing) เสมอ (suggest taking)",
    trap: "อย่าใช้ to take หลัง suggest",
    shortcutTrick: "suggest / enjoy / avoid / mind + V.ing เสมอ"
  },
  {
    id: "e13", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Vocabulary Context Clues",
    question: "The word 'EXTINGUISH' in the sentence 'Firefighters worked hard to extinguish the blaze' is closest in meaning to ______.",
    options: ["put out", "start", "spread", "increase"],
    correctAnswer: 0,
    explanation: "extinguish แปลว่า ดับเพลิง/ดับไฟ มีความหมายเดียวกับ Phrasal Verb 'put out'",
    trap: "put on แปลว่า สวมใส่, put out แปลว่า ดับไฟ",
    shortcutTrick: "extinguish = put out = ดับไฟ"
  },
  {
    id: "e14", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Used to vs Be used to",
    question: "When I was in primary school, I ______ walk to school every morning.",
    options: ["used to", "am used to", "use to", "was used to"],
    correctAnswer: 0,
    explanation: "used to + V.inf หมายถึง 'เคยทำในอดีตแต่ปัจจุบันไม่ได้ทำแล้ว'",
    trap: "be used to + V.ing แปลว่า 'คุ้นเคยชิน'",
    shortcutTrick: "เคยทำในอดีต = used to + V.inf"
  },
  {
    id: "e15", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Conjunctions: Although / Because",
    question: "______ it was raining heavily, the students still arrived at school on time.",
    options: ["Although", "Because", "Therefore", "Since"],
    correctAnswer: 0,
    explanation: "ประโยคมีความหมายขัดแย้งกัน (ฝนตกหนักแต่ยังมาทันเวลา) จึงต้องใช้ 'Although' (แม้ว่า)",
    trap: "Because ใช้กับประโยคที่เป็นเหตุเป็นผลสอดคล้องกัน",
    shortcutTrick: "ขัดแย้งกัน = Although (แม้ว่า)"
  },
  {
    id: "e16", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Modals: Must have + V3",
    question: "Look at the wet ground! It ______ rained last night.",
    options: ["must have", "should have", "cannot have", "would"],
    correctAnswer: 0,
    explanation: "must have + V3 ใช้คาดคะเนเหตุการณ์ในอดีตอย่างมั่นใจจากหลักฐาน (พื้นเปียก -> ฝนต้องตกแน่ๆ)",
    trap: "should have + V3 แปลว่า 'น่าจะทำแต่ไม่ได้ทำ'",
    shortcutTrick: "มั่นใจในอดีตจากหลักฐาน = must have + V.3"
  },
  {
    id: "e17", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Everyday Conversation",
    question: "A: 'Would you mind if I open the window?' - B: '______ It is quite warm in here.'",
    options: ["Not at all. Go ahead.", "Yes, please do.", "I mind it.", "Never mind."],
    correctAnswer: 0,
    explanation: "คำถาม 'Would you mind...?' (คุณจะรังเกียจไหม) ถ้าอนุญาตให้เปิดต้องตอบเชิงปฏิเสธ เช่น 'Not at all' (ไม่รังเกียจเลย)",
    trap: "ถ้าตอบ Yes แปลว่ารังเกียจ ไม่อนุญาตให้เปิด",
    shortcutTrick: "Would you mind...? -> อนุญาตให้ตอบ 'Not at all / No, not at all'"
  },
  {
    id: "e18", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Subject-Verb Agreement with 'Each of'",
    question: "Each of the participants ______ given a certificate upon finishing the test.",
    options: ["was", "were", "are", "have been"],
    correctAnswer: 0,
    explanation: "'Each of + คำนามพหูพจน์' ถือเป็นเอกพจน์เสมอ กริยาจึงต้องใช้ 'was'",
    trap: "อย่าหลงกลกับคำว่า participants ที่เป็นพหูพจน์ ประธานแท้คือ Each",
    shortcutTrick: "Each of / One of / Everyone = กริยาเอกพจน์เสมอ"
  },
  {
    id: "e19", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Regular", difficulty: 2,
    topic: "Direct & Indirect Speech",
    question: "Jane said, 'I am reading an interesting book.' -> Jane said that she ______ an interesting book.",
    options: ["was reading", "is reading", "has read", "had read"],
    correctAnswer: 0,
    explanation: "เมื่อกริยานำเป็นอดีต (said) Tense ใน Indirect speech ต้องถอยหลัง 1 ขั้น: Present Continuous (am reading) -> Past Continuous (was reading)",
    trap: "อย่าลืมเปลี่ยนสรรพนาม I เป็น she และเปลี่ยน Tense",
    shortcutTrick: "Direct 'is/am' -> Indirect เปลี่ยนเป็น 'was'"
  },
  {
    id: "e20", subject: "english", subjectName: "ภาษาอังกฤษ", track: "Gifted", difficulty: 3,
    topic: "Idioms & Expressions",
    question: "The idiom 'PIECE OF CAKE' means ______.",
    options: ["very easy to do", "delicious dessert", "expensive gift", "hard to complete"],
    correctAnswer: 0,
    explanation: "สำนวน 'a piece of cake' แปลว่า ง่ายมากๆ หรือกล้วยๆ (ตรงกับ สำนวนไทย ปอกกล้วยเข้าปาก)",
    trap: "อย่าแปลตรงตัวว่าขนมเค้ก 1 ชิ้น",
    shortcutTrick: "piece of cake = very easy (ง่ายมาก)"
  },

  // =========================================================================
  // 4. THAI (ภาษาไทย - 15 ข้อ)
  // =========================================================================
  {
    id: "t01", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "คำยืมภาษาเขมร",
    question: "ข้อใดประกอบด้วย 'คำยืมที่มาจากภาษาเขมร' ทุกคำ",
    options: ["เสด็จ, บังคม, ถนน, เพ็ญ", "ปัญญา, มัจฉา, บัลลังก์, กีฬา", "ครุฑ, แพทย์, มนัส, ปรัชญา", "บะหมี่, ก๊ก, ก๋วยเตี๋ยว, โต๊ะ"],
    correctAnswer: 0,
    explanation: "เสด็จ, บังคม, ถนน, เพ็ญ เป็นคำเขมรแท้ทั้งหมด (มักขึ้นต้น บัง, บัน, บำ หรืออักษรนำ/แผลงคำ)",
    trap: "ถนน, เพ็ญ แผลงมาจากเขมร ไม่ใช่คำไทยแท้",
    shortcutTrick: "คำเขมรมักขึ้นต้น บัง-บัน-บำ, สระอำ, อักษรนำ"
  },
  {
    id: "t02", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "การสมาสและการสนธิ",
    question: "ข้อใดเป็นคำสมาสที่มี 'การสนธิ' (สมาสแบบมีสนธิ) ทุกคำ",
    options: ["มโหฬาร, ราชูปโภค, คมนาคม, วิทยาลัย", "ราชการ, ผลไม้, เทพเจ้า, รถไฟ", "ประวัติศาสตร์, ภูมิศาสตร์, วารสาร, กายกรรม", "พลศึกษา, ทรัพยากร, ศิลปกรรม, ธนบัตร"],
    correctAnswer: 0,
    explanation: "มหา+โอฬาร=มโหฬาร, ราช+อุปโภค=ราชูปโภค, คมน+อาคม=คมนาคม, วิทย+อาลัย=วิทยาลัย มีการเชื่อมกลืนเสียงสระ",
    trap: "ผลไม้, รถไฟ มีคำไทยปน ไม่ใช่คำสมาส",
    shortcutTrick: "สนธิ = มีการกลืนเสียงสระเชื่อมต่อคำ"
  },
  {
    id: "t03", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "ชนิดของประโยค",
    question: "ประโยคในข้อใดจัดเป็น 'ประโยคความซ้อน (สังกรประโยค)'",
    options: ["ครูชมเชยนักเรียนที่ตั้งใจทำข้อสอบอย่างสม่ำเสมอ", "คุณพ่อและคุณแม่ไปออกกำลังกายที่สวน", "น้องทำการบ้านแต่วินเล่นเกมคอมพิวเตอร์", "นกพิราบบินเกาะบนกิ่งไม้ใหญ่"],
    correctAnswer: 0,
    explanation: "มีประโยคหลัก (ครูชมเชยนักเรียน) และประโยคย่อย (ที่ตั้งใจทำข้อสอบ...) ขยายนาม โดยมีคำเชื่อม 'ที่'",
    trap: "ข้อ 2 เป็นความเดียว, ข้อ 3 เป็นความรวม (เชื่อมด้วย แต่)",
    shortcutTrick: "ประโยคความซ้อนมักมีคำเชื่อม: ที่, ซึ่ง, อัน, ผู้, เพราะว่า"
  },
  {
    id: "t04", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "คำราชาศัพท์",
    question: "คำราชาศัพท์ในข้อใดมีความหมายตรงกับคำว่า 'แว่นตา' และ 'แหวน' ตามลำดับ",
    options: ["ฉลองพระเนตร, ธำมรงค์", "พระเนตร, พระธำมรงค์", "ฉลองพระบาท, พระกุณฑล", "พระสนับเพลา, พระกรรเจียก"],
    correctAnswer: 0,
    explanation: "ฉลองพระเนตร = แว่นตา, ธำมรงค์ = แหวน (ฉลองพระบาท = รองเท้า, พระกุณฑล = ต่างหู)",
    trap: "พระเนตร คือ ดวงตา / ฉลองพระเนตร คือ แว่นตา",
    shortcutTrick: "ฉลองพระเนตร = แว่นตา / ธำมรงค์ = แหวน"
  },
  {
    id: "t05", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "สำนวน สุภาษิต คำพังเพย",
    question: "สำนวนในข้อใดมีความหมายตรงกับ 'การทำความดีโดยไม่หวังผลตอบแทนและไม่ต้องการให้ใครรู้'",
    options: ["ปิดทองหลังพระ", "ชุบมือเปิบ", "ขี่ช้างจับตั๊กแตน", "ไก่เห็นตีนงู งูเห็นนมไก่"],
    correctAnswer: 0,
    explanation: "ปิดทองหลังพระ หมายถึง ทำความดีอย่างเงียบๆ ไม่โอ้อวด",
    trap: "ชุบมือเปิบ = ฉวยประโยชน์, ขี่ช้างจับตั๊กแตน = ลงทุนมากได้ผลนิดเดียว",
    shortcutTrick: "ทำดีไม่โอ้อวด = ปิดทองหลังพระ"
  },
  {
    id: "t06", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "อักษรควบแท้และควบไม่แท้",
    question: "ข้อใดมี 'คำควบไม่แท้' ปรากฏอยู่มากที่สุด",
    options: ["ทรงสร้างสระน้ำเสริมทรัพย์สิน", "กริชกรีดกรายกล้วยใกล้คลองกว้าง", "ครูกล่าวตักเตือนคนเกียจคร้าน", "พลอยเพลิดเพลินปลูกต้นพลับพลึง"],
    correctAnswer: 0,
    explanation: "ข้อ 1 มีคำควบไม่แท้ถึง 5 คำ: ทรง (ซ), สร้าง (ส), สระ (ส), เสริม (ส), ทรัพย์ (ซ)",
    trap: "กริช, กล้วย, ครู, พลอย เป็นคำควบแท้ ออกเสียงพร้อมกัน",
    shortcutTrick: "ทร เป็น ซ / จร, ซร, ศร, สร ออกเสียงตัวหน้า = ควบไม่แท้"
  },
  {
    id: "t07", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "คำเป็น-คำตาย",
    question: "ข้อใดประกอบด้วย 'คำตาย' ทุกคำ",
    options: ["มัก, ดุ, กะ, บท", "กาล, นาน, มา, แล้ว", "เรือ, ใบ, ใน, คลอง", "เด็ก, ดี, มี, วินัย"],
    correctAnswer: 0,
    explanation: "คำตาย: ประสมสระเสียงสั้นไม่มีตัวสะกด หรือสะกดในแม่ กบด (กก, กบ, กด) -> มัก (กก), ดุ (สระสั้น), กะ (สระสั้น), บท (กด)",
    trap: "แม่ กน, กง, กม, เกย, เกอว เป็นคำเป็น (นมยวง)",
    shortcutTrick: "คำตาย = กบด + สระสั้นไม่มีตัวสะกด"
  },
  {
    id: "t08", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "การสร้างคำ: คำประสม",
    question: "ข้อใดจัดเป็น 'คำประสม' ทุกคำ",
    options: ["แม่น้ำ, พ่อตา, รถไฟ, น้ำปลา", "บ้านเรือน, เสื้อผ้า, หน้าตา, ปากคอ", "คนๆ, เร็วๆ, บ่อยๆ, ช้าๆ", "กรรไกร, มะละกอ, นาฬิกา, สะอาด"],
    correctAnswer: 0,
    explanation: "คำประสมเกิดจากคำมูลตั้งแต่ 2 คำขึ้นไปมารวมกันเกิดความหมายใหม่ (ข้อ 2 เป็นคำซ้อน, ข้อ 3 เป็นคำซ้ำ, ข้อ 4 เป็นคำมูล)",
    trap: "บ้านเรือน, เสื้อผ้า เป็นคำซ้อนเพื่อเสียง/ความหมาย ไม่ใช่คำประสม",
    shortcutTrick: "คำมูล + คำมูล = ความหมายใหม่ -> คำประสม"
  },
  {
    id: "t09", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "ระดับภาษา (ทางการ-กึ่งทางการ)",
    question: "ข้อความในข้อใดใช้ 'ภาษาระดับทางการ' อย่างถูกต้องและเหมาะสม",
    options: ["กระทรวงศึกษาธิการกำหนดนโยบายปฏิรูปการศึกษาเพื่อพัฒนาเยาวชน", "พวกเราทุกคนต้องช่วยกันเคลียร์งานให้เสร็จไวๆ", "หมอคนนี้รักษาคนไข้เก่งเวอร์", "งานนี้สนุกจังเลย อยากให้จัดบ่อยๆ"],
    correctAnswer: 0,
    explanation: "ข้อ 1 ใช้ภาษาแบบแผน ถูกต้องตามหลักไวยากรณ์ ไม่มีภาษาปากหรือคำสแลง",
    trap: "เคลียร์, เก่งเวอร์, สนุกจังเลย เป็นภาษาปาก/ไม่เป็นทางการ",
    shortcutTrick: "ระดับทางการ = ภาษาแบบแผน ไม่มีคำสแลง/ภาษาปาก"
  },
  {
    id: "t10", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "วรรณคดี: สังข์ทอง",
    question: "ในวรรณคดีเรื่อง 'สังข์ทอง' พระสังข์ได้ของวิเศษ 3 อย่างจากนางพันธุรัต ได้แก่ข้อใด",
    options: ["รูปเงาะ, เกือกแก้ว, ไม้เท้าวิเศษ", "แหวนวิเศษ, ม้านิลมังกร, ธนู", "ขวานเพชร, ผ้ายันต์, หอก", "กลองวิเศษ, ดาบฟ้าฟื้น, ตะกรุด"],
    correctAnswer: 0,
    explanation: "พระสังข์สวมรูปเงาะ ถือไม้เท้า และใส่เกือกแก้วเหาะหนีนางพันธุรัต",
    trap: "ม้านิลมังกรอยู่ในเรื่องพระอภัยมณี / ดาบฟ้าฟื้นอยู่ในเรื่องขุนช้างขุนแผน",
    shortcutTrick: "สังข์ทอง = รูปเงาะ + เกือกแก้ว + ไม้เท้า"
  },
  {
    id: "t11", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "คำไวพจน์ (คำพ้องความหมาย)",
    question: "ข้อใดเป็นคำไวพจน์ที่มีความหมายตรงกับคำว่า 'ดอกไม้' ทุกคำ",
    options: ["บุปผา, ผกา, มาลี, สุมาลี", "นภา, อัมพร, เวหา, ทิฆัมพร", "สุริยา, ภาณุ, ตะวัน, ไถง", "ชลธี, สาคร, วารี, อุทก"],
    correctAnswer: 0,
    explanation: "บุปผา, ผกา, มาลี, สุมาลี แปลว่า ดอกไม้ (ข้อ 2 = ท้องฟ้า, ข้อ 3 = พระอาทิตย์, ข้อ 4 = น้ำ)",
    trap: "อัมพร แปลว่า ท้องฟ้า / สาคร แปลว่า น้ำ",
    shortcutTrick: "บุปผา ผกา มาลี สุมาลี = ดอกไม้"
  },
  {
    id: "t12", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "อักษรสามหมู่ (ไตรยางศ์)",
    question: "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด",
    options: ["ข, ฉ, ถ, ผ, ฝ, ส, ห", "ก, จ, ด, ต, บ, ป, อ", "ค, ช, ซ, ท, พ, ฟ, ฮ", "ง, น, ม, ย, ร, ล, ว"],
    correctAnswer: 0,
    explanation: "อักษรสูงมี 11 ตัว: ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (ท่อง: ผีฝากถุงข้าวสารให้ฉัน)",
    trap: "ก จ ด ต บ ป อ คือ อักษรกลาง (ไก่จิกเด็กตายฯ)",
    shortcutTrick: "อักษรสูง = ผี-ฝาก-ถุง-ข้าว-สาร-ให้-ฉัน"
  },
  {
    id: "t13", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "คำสุภาพ",
    question: "คำสุภาพของคำว่า 'ผักบุ้ง' และ 'กล้วยไข่' ในภาษาไทยคือข้อใดตามลำดับ",
    options: ["ผักทอดยอด, กล้วยเปลือกบาง", "ผักรู้นอน, กล้วยกระ", "ผักสามหาว, กล้วยหอม", "ผักกระเฉด, กล้วยน้ำว้า"],
    correctAnswer: 0,
    explanation: "ผักบุ้ง = ผักทอดยอด, กล้วยไข่ = กล้วยเปลือกบาง (ผักรู้นอน = ผักกระเฉด, ผักสามหาว = ผักตบ)",
    trap: "ผักรู้นอน คือ ผักกระเฉด",
    shortcutTrick: "ผักบุ้ง = ผักทอดยอด / กล้วยไข่ = กล้วยเปลือกบาง"
  },
  {
    id: "t14", subject: "thai", subjectName: "ภาษาไทย", track: "Regular", difficulty: 2,
    topic: "การสะกดคำและมาตราตัวสะกด",
    question: "คำในข้อใดเขียนสะกดการันต์ได้ 'ถูกต้องทุกคำ'",
    options: ["โอกาส, อนุญาต, อภิปราย, สังสรรค์", "โอกาศ, อนุญาติ, อภิปราย, สังสรร", "โอกาส, อนุญาติ, อภิปราย, สังสรรค์", "โอกาศ, อนุญาต, อภิปลาย, สังสรรค์"],
    correctAnswer: 0,
    explanation: "อนุญาต (ไม่มีสระอิ), โอกาส (ส เสือ), สังสรรค์ (มี ค การันต์)",
    trap: "อนุญาต ไม่มีสระอิ (แต่ ญาติพี่น้อง มีสระอิ)",
    shortcutTrick: "อนุญาต (ไม่มีอิ) / ญาติพี่น้อง (มีอิ)"
  },
  {
    id: "t15", subject: "thai", subjectName: "ภาษาไทย", track: "Gifted", difficulty: 3,
    topic: "รสวรรณคดีไทย",
    question: "บทประพันธ์ที่แสดงอารมณ์โศกเศร้า คร่ำครวญ พิลาปรำพัน จัดอยู่ในรสวรรณคดีไทยข้อใด",
    options: ["สัลลาปังคพิสัย", "เสาวรจนี", "นารีปราโมทย์", "พิโรธวาทัง"],
    correctAnswer: 0,
    explanation: "สัลลาปังคพิสัย = รสแห่งความโศกเศร้าคร่ำครวญ (เสาวรจนี = ชมความงาม, นารีปราโมทย์ = เกี้ยวพาราสี, พิโรธวาทัง = โกรธตัดพ้อ)",
    trap: "พิโรธวาทัง คือ รสแห่งความโกรธ",
    shortcutTrick: "สัลลาปังคพิสัย = โศกเศร้าเสียใจ"
  },

  // =========================================================================
  // 5. SOCIAL STUDIES (สังคมศึกษา - 15 ข้อ)
  // =========================================================================
  {
    id: "so01", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "ประวัติศาสตร์: การปฏิรูป ร.5",
    question: "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 5) ทรงปฏิรูปการปกครองส่วนกลางโดยยกเลิกระบบจตุสดมภ์ และจัดตั้งหน่วยงานใดขึ้นมาแทน",
    options: ["การจัดตั้ง 12 กระทรวง มีเสนาบดีเป็นหัวหน้า", "การจัดตั้งมณฑลเทศาภิบาล", "การจัดตั้งสภาผู้แทนราษฎร", "การจัดตั้งระบบสมุหนายก"],
    correctAnswer: 0,
    explanation: "พ.ศ. 2435 รัชกาลที่ 5 ทรงยกเลิกจตุสดมภ์และตั้ง 12 กระทรวงเพื่อบริหารราชการแผ่นดินส่วนกลาง",
    trap: "มณฑลเทศาภิบาลเป็นการปฏิรูปส่วนภูมิภาค",
    shortcutTrick: "ส่วนกลาง ร.5 = ตั้ง 12 กระทรวง"
  },
  {
    id: "so02", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "ภูมิศาสตร์: ลมมรสุม",
    question: "ลมมรสุมตะวันออกเฉียงเหนือพัดผ่านประเทศไทยในช่วงเดือนใด และส่งผลต่อสภาพอากาศอย่างไร",
    options: ["พ.ย. - ก.พ. ทำให้ภาคเหนือหนาวเย็นแห้งแล้ง แต่ภาคใต้ฝั่งอ่าวไทยมีฝนตกชุก", "พ.ค. - ต.ค. ทำให้มีฝนตกชุกทั่วประเทศ", "มี.ค. - พ.ค. ร้อนจัดทั่วประเทศ", "พ.ย. - ก.พ. ฝั่งอันดามันมีคลื่นลมแรงที่สุด"],
    correctAnswer: 0,
    explanation: "มรสุม ตอ.เฉียงเหนือ พัดความหนาวแห้งแล้งจากจีนเข้าไทย พ.ย.-ก.พ. และพาฝนตกหนักภาคใต้ฝั่งอ่าวไทย",
    trap: "ภาคใต้ฝั่งอ่าวไทยจะมีฝนชุกมากในฤดูหนาว",
    shortcutTrick: "มรสุม ตอ.เฉียงเหนือ = พ.ย.-ก.พ. = เหนือหนาว อ่าวไทยฝนตก"
  },
  {
    id: "so03", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "เศรษฐศาสตร์: กลไกราคา",
    question: "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าชนิดหนึ่งปรับตัวสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร",
    options: ["ลดลง เพราะผู้บริโภครู้สึกว่าแพงขึ้นและหันไปหาสินค้าทดแทน", "เพิ่มขึ้น เพราะคุณภาพดีขึ้น", "คงที่เสมอ", "เพิ่มขึ้นเป็นสองเท่า"],
    correctAnswer: 0,
    explanation: "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน (แพงขึ้น -> ซื้อน้อยลง)",
    trap: "อย่าสับสนกับอุปทาน (ผู้ขาย) ที่ของแพงจะอยากผลิตเพิ่ม",
    shortcutTrick: "อุปสงค์ (คนซื้อ) = ของแพง ซื้อลดลง"
  },
  {
    id: "so04", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "ศาสนา: อิทธิบาท 4",
    question: "นักเรียนที่ต้องการประสบความสำเร็จในการสอบเข้า ม.1 ควรนำหลักธรรม 'อิทธิบาท 4' ข้อใดที่หมายถึง 'ความขยันหมั่นเพียร' มาปฏิบัติ",
    options: ["วิริยะ", "ฉันทะ", "จิตตะ", "วิมังสา"],
    correctAnswer: 0,
    explanation: "ฉันทะ (รักงาน), วิริยะ (พากเพียร), จิตตะ (จดจ่อ), วิมังสา (ทบทวนปรับปรุง)",
    trap: "ฉันทะ คือความรักความพอใจ ไม่ใช่ความเพียร",
    shortcutTrick: "ฉัน-วิ-จิต-วิม = รัก-เพียร-จดจ่อ-ไตร่ตรอง"
  },
  {
    id: "so05", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "หน้าที่พลเมืองและรัฐธรรมนูญ",
    question: "อำนาจอธิปไตยของปวงชนชาวไทยตามรัฐธรรมนูญ แบ่งออกเป็น 3 อำนาจ ได้แก่อำนาจใดบ้าง",
    options: ["นิติบัญญัติ, บริหาร, ตุลาการ", "ประธานาธิบดี, รัฐสภา, ศาล", "เทศบาล, อบจ., อบต.", "ข้าราชการ, ทหาร, ตำรวจ"],
    correctAnswer: 0,
    explanation: "อำนาจอธิปไตยแบ่งเป็น: นิติบัญญัติ (รัฐสภา), บริหาร (คณะรัฐมนตรี), ตุลาการ (ศาล)",
    trap: "อย่าสับสนกับโครงสร้างการปกครองส่วนท้องถิ่น",
    shortcutTrick: "อำนาจอธิปไตย = นิติบัญญัติ + บริหาร + ตุลาการ"
  },
  {
    id: "so06", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "ประวัติศาสตร์สมัยสุโขทัย",
    question: "การปกครองในสมัยสุโขทัยตอนต้นมีลักษณะเด่นตรงกับข้อใด",
    options: ["การปกครองแบบปิตุราชา (พ่อปกครองลูก)", "การปกครองแบบเทวราชา (สมมติเทพ)", "การปกครองแบบธรรมราชา", "การปกครองระบอบเทศาภิบาล"],
    correctAnswer: 0,
    explanation: "สุโขทัยตอนต้นกษัตริย์ใกล้ชิดราษฎร มีการแขวนกระดิ่งร้องทุกข์ เรียกระบอบปิตุราชา",
    trap: "เทวราชาเริ่มรับอิทธิพลขอมในสมัยอยุธยา",
    shortcutTrick: "สุโขทัยตอนต้น = แขวนกระดิ่ง = พ่อปกครองลูก"
  },
  {
    id: "so07", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "เศรษฐศาสตร์: สหกรณ์",
    question: "หลักการสำคัญที่สุดของ 'ระบบสหกรณ์' ที่แตกต่างจากบริษัทเอกชนคือข้อใด",
    options: ["สมาชิกทุกคนมีสิทธิออกเสียงคนละ 1 เสียงเท่ากัน ไม่ขึ้นกับจำนวนหุ้น", "ผู้ถือหุ้นมากสุดมีสิทธิตัดสินใจ", "รัฐบาลเป็นเจ้าของทั้งหมด", "ห้ามจ่ายเงินปันผล"],
    correctAnswer: 0,
    explanation: "สหกรณ์ยึดหลักประชาธิปไตย 1 คน 1 เสียง (One man, one vote) เพื่อช่วยเหลือสมาชิก",
    trap: "บริษัทจำกัดออกเสียงตามจำนวนหุ้น แต่สหกรณ์ 1 คน = 1 เสียง",
    shortcutTrick: "สหกรณ์ = 1 คน 1 เสียง เท่าเทียมกัน"
  },
  {
    id: "so08", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "ภูมิศาสตร์: แผนที่และเส้นพิกัด",
    question: "เส้นสมมติในแนวนอนที่ลากขนานกับเส้นศูนย์สูตรเพื่อบอกตำแหน่งเหนือ-ใต้ของโลก เรียกว่าอะไร",
    options: ["เส้นละติจูด (Latitude / เส้นรุ้ง)", "เส้นลองจิจูด (Longitude / เส้นแวง)", "เส้นเมริเดียนแรก", "เส้นเขตวันสากล"],
    correctAnswer: 0,
    explanation: "เส้นละติจูด (รุ้งตะแคง) ลากแนวนอนบอกตำแหน่งเหนือ-ใต้ ส่วนลองจิจูด (แวงตั้ง) บอกตะวันออก-ตกและเวลา",
    trap: "จำสลับระหว่างรุ้งกับแวง",
    shortcutTrick: "รุ้งตะแคง (ละติจูด แนวนอน) / แวงตั้ง (ลองจิจูด แนวตั้ง)"
  },
  {
    id: "so09", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "ประวัติศาสตร์สมัยอยุธยา",
    question: "สมเด็จพระบรมไตรโลกนาถทรงปฏิรูปการปกครองอยุธยาโดยจัดตั้งตำแหน่งใดควบคุมฝ่ายทหารและฝ่ายพลเรือน",
    options: ["สมุหพระกลาโหม (ทหาร) และ สมุหนายก (พลเรือน)", "จตุสดมภ์ เวียง วัง คลัง นา", "มณฑลเทศาภิบาล", "เสนาบดี 12 กระทรวง"],
    correctAnswer: 0,
    explanation: "สมเด็จพระบรมไตรโลกนาถทรงแยกงานทหาร (สมุหพระกลาโหม) และงานพลเรือน (สมุหนายก) ออกจากกันเพื่อการควบคุมที่มีประสิทธิภาพ",
    trap: "12 กระทรวงเกิดขึ้นในสมัย ร.5 รัตนโกสินทร์",
    shortcutTrick: "อยุธยาแยกทหาร-พลเรือน = กลาโหม (ทหาร) + นายก (พลเรือน)"
  },
  {
    id: "so10", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "กฎหมายเบื้องต้นและสิทธิเด็ก",
    question: "ตามอนุสัญญาว่าด้วยสิทธิเด็ก สิทธิในการมีชีวิตรอด ได้รับการเลี้ยงดู และได้รับสารอาหารที่ถูกสุขลักษณะ จัดอยู่ในสิทธิข้อใด",
    options: ["สิทธิที่จะมีชีวิตรอด (Right to Survival)", "สิทธิที่จะได้รับการพัฒนา", "สิทธิในการมีส่วนร่วม", "สิทธิที่จะได้รับการปกป้องคุ้มครอง"],
    correctAnswer: 0,
    explanation: "สิทธิที่จะมีชีวิตรอดครอบคลุมถึงการเกิด การรักษาพยาบาล อาหาร และที่อยู่อาศัยขั้นพื้นฐาน",
    trap: "สิทธิได้รับการศึกษาจัดอยู่ใน 'สิทธิที่จะได้รับการพัฒนา'",
    shortcutTrick: "อาหาร + การรักษาพยาบาล = สิทธิที่จะมีชีวิตรอด"
  },
  {
    id: "so11", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "ศาสนา: พรหมวิหาร 4",
    question: "เมื่อเห็นเพื่อนร่วมชั้นสอบติดห้องเรียนพิเศษ Gifted หอวัง แล้วเรารู้สึกร่วมยินดีด้วยความจริงใจ ตรงกับหลักธรรมข้อใด",
    options: ["มุทิตา", "เมตตา", "กรุณา", "อุเบกขา"],
    correctAnswer: 0,
    explanation: "มุทิตา คือ ความพลอยยินดีเมื่อผู้อื่นได้ดี (เมตตา=รักใคร่อยากให้เป็นสุข, กรุณา=สงสารอยากช่วยให้พ้นทุกข์, อุเบกขา=วางเฉย)",
    trap: "กรุณา ใช้เมื่อเห็นผู้อื่นเป็นทุกข์แล้วอยากช่วยเหลือ",
    shortcutTrick: "เห็นคนอื่นได้ดีแล้วยินดีด้วย = มุทิตา"
  },
  {
    id: "so12", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "เศรษฐศาสตร์: เงินเฟ้อและเงินฝืด",
    question: "ภาวะ 'เงินเฟ้อ' (Inflation) ส่งผลกระทบต่อระบบเศรษฐกิจอย่างไร",
    options: ["ราคาสินค้าและบริการโดยทั่วไปแพงขึ้น ค่าเงินลดลง", "ราคาสินค้าลดลงอย่างต่อเนื่อง", "ประชาชนมีอำนาจซื้อเพิ่มขึ้น", "ผู้มีรายได้ประจำได้รับประโยชน์สูงสุด"],
    correctAnswer: 0,
    explanation: "เงินเฟ้อคือภาวะที่ของแพงขึ้น เงินจำนวนเท่าเดิมซื้อของได้น้อยลง ทำให้ผู้มีรายได้ประจำเสียเปรียบ",
    trap: "เงินฝืดคือภาวะที่ของราคาตกต่ำและเงินหายาก",
    shortcutTrick: "เงินเฟ้อ = ข้าวของแพงขึ้น เงินมีค่าน้อยลง"
  },
  {
    id: "so13", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "ประวัติศาสตร์: สนธิสัญญาเบาว์ริง",
    question: "สนธิสัญญาเบาว์ริงที่ทำขึ้นในสมัยรัชกาลที่ 4 ส่งผลให้เกิดการเปลี่ยนแปลงทางเศรษฐกิจไทยที่สำคัญที่สุดในข้อใด",
    options: ["ยกเลิกการค้าแบบผูกขาดของพระคลังสินค้า และเปลี่ยนเป็นระบบการค้าเสรี", "ไทยต้องตกเป็นอาณานิคมของอังกฤษ", "ยกเลิกเงินตราสยามและใช้เงินปอนด์", "ห้ามส่งออกข้าวไปต่างประเทศ"],
    correctAnswer: 0,
    explanation: "สนธิสัญญาเบาว์ริง พ.ศ. 2398 ยกเลิกระบบผูกขาดการค้าของพระคลังสินค้า เปลี่ยนเป็นการค้าเสรี กำหนดภาษีร้อยชักสาม และส่งผลให้ข้าวกลายเป็นสินค้าส่งออกหลัก",
    trap: "ไทยไม่เคยตกเป็นอาณานิคมของอังกฤษ",
    shortcutTrick: "สนธิสัญญาเบาว์ริง (ร.4) = ยกเลิกผูกขาดพระคลังสินค้า + ค้าเสรี + ภาษีร้อยชักสาม"
  },
  {
    id: "so14", subject: "social", subjectName: "สังคมศึกษา", track: "Regular", difficulty: 2,
    topic: "สิ่งแวดล้อมและการอนุรักษ์",
    question: "ปรากฏการณ์ 'เรือนกระจก' (Greenhouse Effect) มีสาเหตุหลักมาจากการปล่อยแก๊สชนิดใดขึ้นสู่ชั้นบรรยากาศมากที่สุด",
    options: ["แก๊สคาร์บอนไดออกไซด์ (CO2)", "แก๊สออกซิเจน (O2)", "แก๊สไนโตรเจน (N2)", "แก๊สฮีเลียม (He)"],
    correctAnswer: 0,
    explanation: "การเผาไหม้เชื้อเพลิงฟอสซิลและโรงงานอุตสาหกรรมปล่อยแก๊สคาร์บอนไดออกไซด์ (CO2) ดักจับความร้อนทำให้โลกร้อนขึ้น",
    trap: "CFC ทำลายชั้นโอโซน แต่ CO2 เป็นตัวการหลักของภาวะโลกร้อน",
    shortcutTrick: "เรือนกระจก / โลกร้อน = คาร์บอนไดออกไซด์ (CO2)"
  },
  {
    id: "so15", subject: "social", subjectName: "สังคมศึกษา", track: "Gifted", difficulty: 3,
    topic: "อาเซียนและประชาคมระหว่างประเทศ",
    question: "สำนักงานเลขาธิการอาเซียน (ASEAN Secretariat) ตั้งอยู่ที่เมืองหลวงของประเทศใด",
    options: ["กรุงจาการ์ตา ประเทศอินโดนีเซีย", "กรุงเทพมหานคร ประเทศไทย", "กรุงกัวลาลัมเปอร์ ประเทศมาเลเซีย", "ประเทศสิงคโปร์"],
    correctAnswer: 0,
    explanation: "สำนักงานใหญ่เลขาธิการอาเซียนตั้งอยู่ที่กรุงจาการ์ตา ประเทศอินโดนีเซีย (แม้ปฏิญญาอาเซียนจะลงนามก่อตั้งที่กรุงเทพฯ ก็ตาม)",
    trap: "อย่าสับสนว่าก่อตั้งที่กรุงเทพฯ แล้วสำนักงานใหญ่จะอยู่ที่กรุงเทพฯ",
    shortcutTrick: "สำนักงานใหญ่เลขาธิการอาเซียน = กรุงจาการ์ตา (อินโดนีเซีย)"
  }
];

// Clean Production Defaults (No Mockup Data)
window.DEFAULT_CLUB_POSTS = [];
window.DEFAULT_SHARED_EXAMS = [];
window.DEFAULT_LEADERBOARD = [];
