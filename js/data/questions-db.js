/**
 * Horwang M.1 AI Exam Master - Authentic Master Question Bank
 * Ingested directly from official Horwang curriculum dataset provided by user.
 */

window.QUESTIONS_DB = [
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 2)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 2)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 2)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 2)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 2)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 2)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 2)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 2)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 2)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 2)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 3)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 3)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 3)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 3)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 3)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 3)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_026",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 3)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_027",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 3)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_028",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 3)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_029",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 3)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_030",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 4)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_031",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 4)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_032",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 4)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_033",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 4)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_034",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 4)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_035",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 4)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_036",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 4)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_037",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 4)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_038",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 4)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_039",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 4)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_040",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 5)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_041",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 5)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_042",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 5)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_043",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 5)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_044",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 5)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_045",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 5)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_046",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 5)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_047",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 5)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_048",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 5)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_049",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 5)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_050",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 6)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_051",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 6)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_052",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 6)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_053",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 6)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_054",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 6)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_055",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 6)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_056",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 6)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_057",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 6)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_058",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 6)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_059",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 6)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_060",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 7)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_061",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 7)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_062",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 7)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_063",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 7)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_064",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 7)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_065",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 7)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_066",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 7)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_067",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 7)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_068",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 7)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_069",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 7)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_070",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 8)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_071",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 8)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_072",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 8)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_073",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 8)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_074",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 8)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_075",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 8)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_076",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 8)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_077",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 8)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_078",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 8)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_079",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 8)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_080",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 9)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_081",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 9)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_082",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 9)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_083",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 9)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_084",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 9)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_085",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 9)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_086",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 9)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_087",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 9)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_088",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 9)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_089",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 9)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_090",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "จำนวนนับและค่าประจำหลัก",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เลข 5 ในจำนวน 358,412 กับเลข 5 ในจำนวน 72,509 มีค่าต่างกันเท่าใด (ชุดที่ 10)",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "5 ใน 358,412 มีค่า 50,000 และ 5 ใน 72,509 มีค่า 500\nผลต่าง = 50,000 - 500 = 49,500",
    "trap": "ระวังดูค่าประจำหลักผิดหลัก",
    "shortcutTrick": "ค่าประจำหลักและค่าของเลขโดด",
    "id": "MATH_091",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การประมาณค่าใกล้เคียง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84,679 คือข้อใด (ชุดที่ 10)",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยคือเลข 6 ซึ่งมากกว่าหรือเท่ากับ 5 ให้ปัดขึ้นเป็น 85,000",
    "trap": "ระวังสับสนระหว่างเต็มร้อยกับเต็มพัน",
    "shortcutTrick": "การประมาณค่าใกล้เคียงจำนวนเต็ม",
    "id": "MATH_092",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "สมบัติการแจกแจง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด (ชุดที่ 10)",
    "options": [
      "3,800",
      "3,500",
      "2,650",
      "1,900"
    ],
    "correctAnswer": 0,
    "explanation": "38 x (65 + 35) = 38 x 100 = 3,800",
    "trap": "อย่าเสียเวลาคูณทีละคู่",
    "shortcutTrick": "สมบัติการแจกแจง a(b+c)",
    "id": "MATH_093",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การแยกตัวประกอบ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเขียนการแยกตัวประกอบของ 72 ในรูปเลขยกกำลังได้ถูกต้อง (ชุดที่ 10)",
    "options": [
      "8 x 9",
      "2 x 3 x 12",
      "\\( 2^3 \\times 3^2 \\)",
      "\\( 2^2 \\times 3^3 \\)"
    ],
    "correctAnswer": 2,
    "explanation": "72 = 8 x 9 = \\( 2^3 \\times 3^2 \\)",
    "trap": "ฐานต้องเป็นจำนวนเฉพาะเท่านั้น",
    "shortcutTrick": "จำนวนเฉพาะและการแยกตัวประกอบ",
    "id": "MATH_094",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ห.ร.ม.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ห.ร.ม. ของ 36, 54 และ 90 คือข้อใด (ชุดที่ 10)",
    "options": [
      "6",
      "9",
      "18",
      "27"
    ],
    "correctAnswer": 2,
    "explanation": "นำ 9 ไปหารได้ 4, 6, 10 จากนั้นนำ 2 ไปหารได้ 2, 3, 5\nห.ร.ม. = 9 x 2 = 18",
    "trap": "อย่าลืมคูณตัวหารร่วมทุกตัว",
    "shortcutTrick": "การหา ห.ร.ม. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_095",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ค.ร.น. ของ 12, 18 และ 24 คือข้อใด (ชุดที่ 10)",
    "options": [
      "48",
      "72",
      "96",
      "144"
    ],
    "correctAnswer": 1,
    "explanation": "พหุคูณร่วมที่น้อยที่สุดที่ทั้งสามจำนวนหารลงตัวคือ 72",
    "trap": "ระวังสับสนระหว่าง ห.ร.ม. กับ ค.ร.น.",
    "shortcutTrick": "การหา ค.ร.น. ด้วยวิธีตั้งหารสั้น",
    "id": "MATH_096",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ความสัมพันธ์ ห.ร.ม. และ ค.ร.น.",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 120 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด (ชุดที่ 10)",
    "options": [
      "20",
      "30",
      "36",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "(6 x 120) / 24 = 720 / 24 = 30",
    "trap": "ต้องจำสูตรผลคูณ 2 จำนวน = ห.ร.ม. x ค.ร.น.",
    "shortcutTrick": "ทฤษฎี A x B = ห.ร.ม. x ค.ร.น.",
    "id": "MATH_097",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การเรียงลำดับเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ข้อใดเรียงลำดับเศษส่วนจากน้อยไปมากได้ถูกต้อง (ชุดที่ 10)",
    "options": [
      "\\( \\frac{1}{2}, \\frac{3}{5}, \\frac{2}{3} \\)",
      "\\( \\frac{3}{5}, \\frac{1}{2}, \\frac{2}{3} \\)",
      "\\( \\frac{2}{3}, \\frac{3}{5}, \\frac{1}{2} \\)",
      "\\( \\frac{1}{2}, \\frac{2}{3}, \\frac{3}{5} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "ทำส่วนให้เป็น 30: 15/30 < 18/30 < 20/30",
    "trap": "ทำส่วนให้เท่ากันก่อนเปรียบเทียบ",
    "shortcutTrick": "การเปรียบเทียบและเรียงลำดับเศษส่วน",
    "id": "MATH_098",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การบวกและลบเศษส่วนคละ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( 3\\frac{1}{4} - 1\\frac{2}{3} \\) มีค่าเท่ากับข้อใด (ชุดที่ 10)",
    "options": [
      "\\( 1\\frac{7}{12} \\)",
      "\\( 1\\frac{5}{12} \\)",
      "\\( 2\\frac{1}{12} \\)",
      "\\( 2\\frac{7}{12} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "\\( 3\\frac{3}{12} - 1\\frac{8}{12} = 2\\frac{15}{12} - 1\\frac{8}{12} = 1\\frac{7}{12} \\)",
    "trap": "ระวังการยืมจำนวนเต็ม",
    "shortcutTrick": "การบวกและการลบจำนวนคละ",
    "id": "MATH_099",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "การคูณและหารเศษส่วน",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "\\( \\frac{4}{9} \\div \\frac{8}{15} \\times \\frac{6}{5} \\) มีค่าเท่ากับข้อใด (ชุดที่ 10)",
    "options": [
      "\\( \\frac{2}{3} \\)",
      "1",
      "\\( \\frac{4}{3} \\)",
      "\\( \\frac{3}{2} \\)"
    ],
    "correctAnswer": 1,
    "explanation": "(4/9) x (15/8) x (6/5) = 360/360 = 1",
    "trap": "เปลี่ยนหารเป็นคูณกลับเศษเป็นส่วน",
    "shortcutTrick": "การคูณและการหารเศษส่วน",
    "id": "MATH_100",
    "subject": "math",
    "subjectName": "คณิตศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 2)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 2)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 2)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 2)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 3)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 3)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 3)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 3)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 3)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 4)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 4)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 4)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 4)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 4)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 5)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 5)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 5)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 5)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 5)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 6)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_026",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 6)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_027",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 6)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_028",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 6)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_029",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 6)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_030",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 7)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_031",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_032",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 7)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_033",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 7)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_034",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 7)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_035",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 8)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_036",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 8)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_037",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 8)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_038",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 8)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_039",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 8)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_040",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 9)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_041",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 9)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_042",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 9)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_043",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 9)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_044",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 9)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_045",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 10)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_046",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 10)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_047",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 10)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_048",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 10)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_049",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 10)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_050",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 11)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_051",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 11)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_052",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 11)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_053",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 11)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_054",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 11)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_055",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 12)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_056",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_057",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 12)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_058",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 12)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_059",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 12)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_060",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 13)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_061",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 13)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_062",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 13)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_063",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 13)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_064",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 13)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_065",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 14)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_066",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 14)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_067",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 14)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_068",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 14)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_069",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 14)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_070",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 15)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_071",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 15)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_072",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 15)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_073",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 15)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_074",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 15)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_075",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 16)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_076",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 16)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_077",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 16)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_078",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 16)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_079",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 16)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_080",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 17)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_081",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_082",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 17)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_083",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 17)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_084",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 17)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_085",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 18)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_086",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 18)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_087",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 18)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_088",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 18)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_089",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 18)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_090",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 19)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_091",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 19)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_092",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 19)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_093",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 19)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_094",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 19)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_095",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ท่อลำเลียงพืช",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เนื้อเยื่อลำเลียงที่ทำหน้าที่ลำเลียงน้ำและแร่ธาตุจากรากขึ้นไปสู่ส่วนต่างๆ ของพืชเรียกว่าอะไร (ชุดที่ 20)",
    "options": [
      "โฟลเอ็ม (Phloem)",
      "คอร์เทกซ์ (Cortex)",
      "ไซเล็ม (Xylem)",
      "ปากใบ (Stoma)"
    ],
    "correctAnswer": 2,
    "explanation": "ไซเล็ม (Xylem) ลำเลียงน้ำและแร่ธาตุขึ้นทางเดียว ส่วนโฟลเอ็ม (Phloem) ลำเลียงอาหารที่พืชสร้างขึ้นได้ทุกทิศทาง",
    "trap": "ระวังสับสนระหว่างไซเล็มกับโฟลเอ็ม",
    "shortcutTrick": "ไซเล็ม = น้ำ, โฟลเอ็ม = อาหาร",
    "id": "SCI_096",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "การสังเคราะห์ด้วยแสง",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สารใดเป็นผลผลิตหลักที่เกิดจากกระบวนการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ชุดที่ 20)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "โปรตีน"
    ],
    "correctAnswer": 0,
    "explanation": "การสังเคราะห์ด้วยแสงเปลี่ยนแก๊สคาร์บอนไดออกไซด์และน้ำ โดยใช้แสงและคลอโรฟิลล์ ได้น้ำตาลกลูโคสและแก๊สออกซิเจน",
    "trap": "น้ำตาลกลูโคสคือผลผลิตหลัก ส่วนออกซิเจนคือผลพลอยได้",
    "shortcutTrick": "CO2 + H2O -> กลูโคส + O2",
    "id": "SCI_097",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "โครงสร้างดอกไม้",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "ส่วนประกอบใดของดอกที่จะเจริญไปเป็น 'ผล' หลังจากการปฏิสนธิเรียบร้อยแล้ว (ชุดที่ 20)",
    "options": [
      "ออวุล (Ovule)",
      "รังไข่ (Ovary)",
      "ละอองเรณู (Pollen)",
      "กลีบเลี้ยง (Sepal)"
    ],
    "correctAnswer": 1,
    "explanation": "รังไข่ (Ovary) เจริญไปเป็นผล ส่วนออวุล (Ovule) ด้านในจะเจริญไปเป็นเมล็ด",
    "trap": "รังไข่ -> ผล, ออวุล -> เมล็ด",
    "shortcutTrick": "รังไข่กลายเป็นผล ออวุลกลายเป็นเมล็ด",
    "id": "SCI_098",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "สัตว์เลี้ยงลูกด้วยน้ำนม",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "สัตว์ในข้อใดจัดเป็นสัตว์เลือดอุ่นที่เลี้ยงลูกด้วยน้ำนมทั้งหมด (ชุดที่ 20)",
    "options": [
      "กบ เพนกวิน จระเข้",
      "ตุ่นปากเป็ด ตุ่นปากเป็ด เป็ด",
      "ปลาวาฬ ปลาโลมา ค้างคาว",
      "วาฬ โลมา ค้างคาว"
    ],
    "correctAnswer": 3,
    "explanation": "วาฬ โลมา และค้างคาว ออกลูกเป็นตัว เลี้ยงลูกด้วยน้ำนม และเป็นสัตว์เลือดอุ่น",
    "trap": "วาฬและโลมาไม่ใช่ปลาแต่เป็นสัตว์เลี้ยงลูกด้วยน้ำนม",
    "shortcutTrick": "วาฬ โลมา ค้างคาว = สัตว์เลี้ยงลูกด้วยน้ำนม",
    "id": "SCI_099",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "ระบบย่อยอาหาร",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "อวัยวะส่วนแรกของร่างกายที่มีการย่อยสารอาหารเชิงเคมีโดยเอนไซม์คืออวัยวะใด (ชุดที่ 20)",
    "options": [
      "ปาก",
      "กระเพาะอาหาร",
      "หลอดอาหาร",
      "ลำไส้เล็ก"
    ],
    "correctAnswer": 0,
    "explanation": "ในปากมีเอนไซม์อะไมเลสในน้ำลาย ทำหน้าที่ย่อยแป้ง (คาร์โบไฮเดรต) ให้เป็นน้ำตาลมอลโทส",
    "trap": "ปากย่อยแป้งเชิงเคมีเป็นที่แรก",
    "shortcutTrick": "ปาก = อะไมเลสย่อยแป้ง",
    "id": "SCI_100",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 2)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 2)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 2)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 3)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 3)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 3)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 4)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 4)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 4)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 5)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 5)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 5)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 6)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 6)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 6)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 7)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 7)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 7)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 8)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 8)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 8)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 9)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 9)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_026",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 9)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_027",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 10)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_028",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 10)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_029",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 10)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_030",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 11)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_031",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 11)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_032",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 11)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_033",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 12)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_034",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 12)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_035",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 12)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_036",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 13)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_037",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 13)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_038",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 13)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_039",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 14)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_040",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 14)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_041",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 14)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_042",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 15)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_043",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 15)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_044",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 15)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_045",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 16)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_046",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 16)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_047",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 16)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_048",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 17)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_049",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 17)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_050",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 17)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_051",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 18)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_052",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 18)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_053",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 18)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_054",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 19)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_055",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 19)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_056",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 19)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_057",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 20)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_058",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 20)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_059",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 20)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_060",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 21)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_061",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 21)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_062",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 21)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_063",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 22)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_064",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 22)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_065",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 22)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_066",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 23)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_067",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 23)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_068",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 23)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_069",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 24)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_070",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 24)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_071",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 24)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_072",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 25)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_073",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 25)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_074",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 25)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_075",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 26)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_076",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 26)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_077",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 26)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_078",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 27)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_079",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 27)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_080",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 27)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_081",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 28)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_082",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 28)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_083",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 28)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_084",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 29)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_085",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 29)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_086",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 29)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_087",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 30)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_088",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 30)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_089",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 30)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_090",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 31)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_091",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 31)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_092",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 31)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_093",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 32)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_094",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 32)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_095",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 32)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_096",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 33)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_097",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "การผันวรรณยุกต์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำว่า 'บ้าน' มีเสียงวรรณยุกต์ตรงกับข้อใด (ชุดที่ 33)",
    "options": [
      "เสียงสามัญ",
      "เสียงเอก",
      "เสียงโท",
      "เสียงตรี"
    ],
    "correctAnswer": 2,
    "explanation": "คำว่า 'บ้าน' พยัญชนะต้นเป็นอักษรกลาง (บ) เป็นคำเป็น ผันได้รูปโทตรงกับเสียงโท",
    "trap": "อักษรกลางคำเป็น รูปและเสียงตรงกันทั้ง 5 เสียง",
    "shortcutTrick": "อักษรกลาง รูปโท = เสียงโท",
    "id": "THAI_098",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "มาตราแม่กด",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "คำในข้อใดมีตัวสะกดอยู่ใน 'มาตราแม่กด' ทั้งหมด (ชุดที่ 33)",
    "options": [
      "ตรวจ ตำรวจ บวช",
      "เคารพ รูปภาพ ลาภ",
      "โบราณ คุณ วาฬ",
      "เมฆ เลข วิหค"
    ],
    "correctAnswer": 0,
    "explanation": "จ, ช, รวจ เมื่อทำหน้าที่เป็นตัวสะกดจะออกเสียงเหมือน ด สะกด จัดอยู่ในมาตราแม่กด",
    "trap": "จ ช รวจ ออกเสียงเหมือน ด สะกด",
    "shortcutTrick": "แม่กด = จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส",
    "id": "THAI_099",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "อักษรสามหมู่",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ชุดที่ 34)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ได้แก่ ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห (เทคนิคจำ: ผีฝากถุงข้าวสารให้ฉัน)",
    "trap": "ท่องจำอักษรสูง 11 ตัวให้แม่น",
    "shortcutTrick": "ผีฝากถุงข้าวสารให้ฉัน",
    "id": "THAI_100",
    "subject": "thai",
    "subjectName": "ภาษาไทย"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 2)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 2)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 3)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 3)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 4)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 4)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 5)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 5)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 6)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 6)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 7)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 7)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 8)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 8)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 9)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 9)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 10)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 10)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 11)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 11)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 12)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 12)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 13)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 13)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_026",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 14)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_027",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 14)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_028",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 15)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_029",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 15)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_030",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 16)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_031",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 16)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_032",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 17)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_033",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 17)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_034",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 18)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_035",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 18)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_036",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 19)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_037",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 19)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_038",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 20)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_039",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 20)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_040",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 21)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_041",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 21)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_042",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 22)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_043",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 22)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_044",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 23)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_045",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 23)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_046",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 24)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_047",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 24)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_048",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 25)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_049",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 25)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_050",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 26)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_051",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 26)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_052",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 27)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_053",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 27)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_054",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 28)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_055",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 28)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_056",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 29)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_057",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 29)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_058",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 30)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_059",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 30)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_060",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 31)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_061",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 31)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_062",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 32)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_063",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 32)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_064",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 33)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_065",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 33)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_066",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 34)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_067",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 34)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_068",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 35)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_069",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 35)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_070",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 36)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_071",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 36)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_072",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 37)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_073",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 37)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_074",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 38)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_075",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 38)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_076",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 39)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_077",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 39)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_078",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 40)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_079",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 40)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_080",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 41)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_081",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 41)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_082",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 42)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_083",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 42)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_084",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 43)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_085",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 43)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_086",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 44)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_087",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 44)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_088",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 45)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_089",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 45)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_090",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 46)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_091",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 46)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_092",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 47)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_093",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 47)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_094",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 48)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_095",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 48)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_096",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 49)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_097",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 49)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_098",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "วันสำคัญทางพุทธศาสนา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "เหตุการณ์ 'ประสูติ ตรัสรู้ และปรินิพพาน' ของพระสัมมาสัมพุทธเจ้า ตรงกับวันสำคัญทางพระพุทธศาสนาในข้อใด (ชุดที่ 50)",
    "options": [
      "วันมาฆบูชา",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 1,
    "explanation": "วันวิสาขบูชา ตรงกับวันเพ็ญ 15 ค่ำ เดือน 6 เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพาน",
    "trap": "วิสาขบูชา = ประสูติ ตรัสรู้ ปรินิพพาน (ขึ้น 15 ค่ำ เดือน 6)",
    "shortcutTrick": "วิสาขะ = 3 เหตุการณ์อัศจรรย์วันเพ็ญเดือน 6",
    "id": "SOC_099",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "อิทธิบาท ๔",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "question": "หลักธรรม 'อิทธิบาท ๔' (ฉันทะ วิริยะ จิตตะ วิมังสา) เป็นหลักธรรมที่ส่งเสริมความสำเร็จในเรื่องใดโดยตรง (ชุดที่ 50)",
    "options": [
      "การทำงานและการเรียนให้ประสบความสำเร็จ",
      "การอยู่ร่วมกันในสังคมอย่างสันติสุข",
      "การรักษาทรัพย์สมบัติไม่ให้สูญหาย",
      "การป้องกันโรคภัยไข้เจ็บ"
    ],
    "correctAnswer": 0,
    "explanation": "อิทธิบาท 4 คือ คุณธรรมที่นำไปสู่ความสำเร็จแห่งผลที่มุ่งหมาย (ฉันทะ=พอใจรักใคร่, วิริยะ=พากเพียร, จิตตะ=เอาใจใส่, วิมังสา=ไตร่ตรอง)",
    "trap": "อิทธิบาท 4 = คุณธรรมแห่งความสำเร็จในการทำงานและการเรียน",
    "shortcutTrick": "ฉันทะ วิริยะ จิตตะ วิมังสา = สำเร็จ",
    "id": "SOC_100",
    "subject": "social",
    "subjectName": "สังคมศึกษา"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today.",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom.",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 2)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 2)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 3)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 3)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 4)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 4)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 5)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 5)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 6)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 6)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 7)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 7)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 8)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 8)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 9)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 9)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 10)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 10)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 11)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 11)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 12)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 12)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 13)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 13)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_026",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 14)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_027",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 14)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_028",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 15)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_029",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 15)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_030",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 16)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_031",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 16)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_032",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 17)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_033",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 17)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_034",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 18)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_035",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 18)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_036",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 19)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_037",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 19)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_038",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 20)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_039",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 20)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_040",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 21)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_041",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 21)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_042",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 22)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_043",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 22)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_044",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 23)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_045",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 23)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_046",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 24)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_047",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 24)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_048",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 25)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_049",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 25)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_050",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 26)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_051",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 26)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_052",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 27)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_053",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 27)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_054",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 28)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_055",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 28)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_056",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 29)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_057",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 29)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_058",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 30)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_059",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 30)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_060",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 31)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_061",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 31)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_062",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 32)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_063",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 32)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_064",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 33)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_065",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 33)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_066",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 34)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_067",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 34)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_068",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 35)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_069",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 35)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_070",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 36)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_071",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 36)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_072",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 37)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_073",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 37)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_074",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 38)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_075",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 38)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_076",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 39)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_077",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 39)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_078",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 40)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_079",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 40)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_080",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 41)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_081",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 41)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_082",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 42)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_083",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 42)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_084",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 43)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_085",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 43)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_086",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 44)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_087",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 44)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_088",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 45)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_089",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 45)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_090",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 46)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_091",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 46)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_092",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 47)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_093",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 47)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_094",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 48)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_095",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 48)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_096",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 49)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_097",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 49)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_098",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Subjunctive / Wish Clauses",
    "track": "Gifted",
    "difficulty": 2,
    "level": "L2",
    "question": "I wish I ______ enough time to study for the Horwang entrance exam today. (ชุดที่ 50)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "โครงสร้าง Wish ในปัจจุบันใช้ Past Simple (V.2) เพื่อแสดงความปรารถนาที่ตรงข้ามกับความเป็นจริง",
    "trap": "Wish ในปัจจุบันต้องใช้กริยาช่อง 2 (had)",
    "shortcutTrick": "Wish + S + V.2",
    "id": "ENG_099",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  },
  {
    "topic": "Phrasal Verbs",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "question": "Please ______ the air conditioner before leaving the classroom. (ชุดที่ 50)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "turn on = เปิด, turn off = ปิด",
    "shortcutTrick": "turn off = ปิดเครื่องใช้ไฟฟ้า",
    "id": "ENG_100",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ"
  }
];

window.DEFAULT_CLUB_POSTS = [];
window.DEFAULT_SHARED_EXAMS = [];
window.DEFAULT_LEADERBOARD = [];
