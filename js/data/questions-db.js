/**
 * Horwang M.1 AI Exam Master - Authentic Master Question Bank (775 Questions)
 * Ingests all authentic questions across 5 subjects (155 per subject).
 */

window.QUESTIONS_DB = [
  {
    "id": "MATH_L1_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 351000 กับเลข 5 ในจำนวน 70510 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84672 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (33 \\times 65) + (33 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3300",
      "2970",
      "2640",
      "3630"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 33 x (65 + 35) = 33 x 100 = 3300",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 168 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "42",
      "52",
      "37",
      "57"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{8}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{25}{17} \\)",
      "\\( \\displaystyle \\frac{24}{17} \\)",
      "\\( \\displaystyle \\frac{27}{17} \\)",
      "\\( \\displaystyle \\frac{8}{17} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{25 \\times 26} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{25}{26} \\)",
      "\\( \\displaystyle \\frac{24}{26} \\)",
      "\\( \\displaystyle \\frac{26}{27} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/26 = 25/26",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 358000 กับเลข 5 ในจำนวน 70580 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84679 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (40 \\times 65) + (40 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4000",
      "3600",
      "3200",
      "4400"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 40 x (65 + 35) = 40 x 100 = 4000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 252 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "63",
      "73",
      "58",
      "78"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{15}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{46}{31} \\)",
      "\\( \\displaystyle \\frac{45}{31} \\)",
      "\\( \\displaystyle \\frac{48}{31} \\)",
      "\\( \\displaystyle \\frac{15}{31} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{32 \\times 33} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{32}{33} \\)",
      "\\( \\displaystyle \\frac{31}{33} \\)",
      "\\( \\displaystyle \\frac{33}{34} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/33 = 32/33",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 365000 กับเลข 5 ในจำนวน 70650 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84686 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (47 \\times 65) + (47 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4700",
      "4230",
      "3760",
      "5170"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 47 x (65 + 35) = 47 x 100 = 4700",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 336 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "84",
      "94",
      "79",
      "99"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{22}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{67}{45} \\)",
      "\\( \\displaystyle \\frac{66}{45} \\)",
      "\\( \\displaystyle \\frac{69}{45} \\)",
      "\\( \\displaystyle \\frac{22}{45} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{39 \\times 40} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{39}{40} \\)",
      "\\( \\displaystyle \\frac{38}{40} \\)",
      "\\( \\displaystyle \\frac{40}{41} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/40 = 39/40",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 372000 กับเลข 5 ในจำนวน 70720 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84693 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (54 \\times 65) + (54 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "5400",
      "4860",
      "4320",
      "5940"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 54 x (65 + 35) = 54 x 100 = 5400",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L1_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 420 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "105",
      "115",
      "100",
      "120"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{4}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{13}{9} \\)",
      "\\( \\displaystyle \\frac{12}{9} \\)",
      "\\( \\displaystyle \\frac{15}{9} \\)",
      "\\( \\displaystyle \\frac{4}{9} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{21 \\times 22} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{21}{22} \\)",
      "\\( \\displaystyle \\frac{20}{22} \\)",
      "\\( \\displaystyle \\frac{22}{23} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/22 = 21/22",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 354000 กับเลข 5 ในจำนวน 70540 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84675 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (36 \\times 65) + (36 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3600",
      "3240",
      "2880",
      "3960"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 36 x (65 + 35) = 36 x 100 = 3600",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 204 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "51",
      "61",
      "46",
      "66"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{11}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{34}{23} \\)",
      "\\( \\displaystyle \\frac{33}{23} \\)",
      "\\( \\displaystyle \\frac{36}{23} \\)",
      "\\( \\displaystyle \\frac{11}{23} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{28 \\times 29} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{28}{29} \\)",
      "\\( \\displaystyle \\frac{27}{29} \\)",
      "\\( \\displaystyle \\frac{29}{30} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/29 = 28/29",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 361000 กับเลข 5 ในจำนวน 70610 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84682 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (43 \\times 65) + (43 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4300",
      "3870",
      "3440",
      "4730"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 43 x (65 + 35) = 43 x 100 = 4300",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 288 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "72",
      "82",
      "67",
      "87"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{18}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{55}{37} \\)",
      "\\( \\displaystyle \\frac{54}{37} \\)",
      "\\( \\displaystyle \\frac{57}{37} \\)",
      "\\( \\displaystyle \\frac{18}{37} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{35 \\times 36} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{35}{36} \\)",
      "\\( \\displaystyle \\frac{34}{36} \\)",
      "\\( \\displaystyle \\frac{36}{37} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/36 = 35/36",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 368000 กับเลข 5 ในจำนวน 70680 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84689 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (50 \\times 65) + (50 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "5000",
      "4500",
      "4000",
      "5500"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 50 x (65 + 35) = 50 x 100 = 5000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 372 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "93",
      "103",
      "88",
      "108"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{25}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{76}{51} \\)",
      "\\( \\displaystyle \\frac{75}{51} \\)",
      "\\( \\displaystyle \\frac{78}{51} \\)",
      "\\( \\displaystyle \\frac{25}{51} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{42 \\times 43} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{42}{43} \\)",
      "\\( \\displaystyle \\frac{41}{43} \\)",
      "\\( \\displaystyle \\frac{43}{44} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/43 = 42/43",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L2_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 375000 กับเลข 5 ในจำนวน 70750 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84671 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (32 \\times 65) + (32 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3200",
      "2880",
      "2560",
      "3520"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 32 x (65 + 35) = 32 x 100 = 3200",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 156 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "39",
      "49",
      "34",
      "54"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{7}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{22}{15} \\)",
      "\\( \\displaystyle \\frac{21}{15} \\)",
      "\\( \\displaystyle \\frac{24}{15} \\)",
      "\\( \\displaystyle \\frac{7}{15} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{24 \\times 25} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{24}{25} \\)",
      "\\( \\displaystyle \\frac{23}{25} \\)",
      "\\( \\displaystyle \\frac{25}{26} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/25 = 24/25",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 357000 กับเลข 5 ในจำนวน 70570 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84678 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (39 \\times 65) + (39 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3900",
      "3510",
      "3120",
      "4290"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 39 x (65 + 35) = 39 x 100 = 3900",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 240 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "60",
      "70",
      "55",
      "75"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{14}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{43}{29} \\)",
      "\\( \\displaystyle \\frac{42}{29} \\)",
      "\\( \\displaystyle \\frac{45}{29} \\)",
      "\\( \\displaystyle \\frac{14}{29} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{31 \\times 32} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{31}{32} \\)",
      "\\( \\displaystyle \\frac{30}{32} \\)",
      "\\( \\displaystyle \\frac{32}{33} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/32 = 31/32",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 364000 กับเลข 5 ในจำนวน 70640 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84685 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (46 \\times 65) + (46 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4600",
      "4140",
      "3680",
      "5060"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 46 x (65 + 35) = 46 x 100 = 4600",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 324 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "81",
      "91",
      "76",
      "96"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{21}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{64}{43} \\)",
      "\\( \\displaystyle \\frac{63}{43} \\)",
      "\\( \\displaystyle \\frac{66}{43} \\)",
      "\\( \\displaystyle \\frac{21}{43} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{38 \\times 39} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{38}{39} \\)",
      "\\( \\displaystyle \\frac{37}{39} \\)",
      "\\( \\displaystyle \\frac{39}{40} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/39 = 38/39",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 371000 กับเลข 5 ในจำนวน 70710 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84692 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (53 \\times 65) + (53 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "5300",
      "4770",
      "4240",
      "5830"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 53 x (65 + 35) = 53 x 100 = 5300",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 408 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "102",
      "112",
      "97",
      "117"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L3_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{28}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{85}{57} \\)",
      "\\( \\displaystyle \\frac{84}{57} \\)",
      "\\( \\displaystyle \\frac{87}{57} \\)",
      "\\( \\displaystyle \\frac{28}{57} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{20 \\times 21} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{20}{21} \\)",
      "\\( \\displaystyle \\frac{19}{21} \\)",
      "\\( \\displaystyle \\frac{21}{22} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/21 = 20/21",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 353000 กับเลข 5 ในจำนวน 70530 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84674 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (35 \\times 65) + (35 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3500",
      "3150",
      "2800",
      "3850"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 35 x (65 + 35) = 35 x 100 = 3500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 192 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "48",
      "58",
      "43",
      "63"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{10}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{31}{21} \\)",
      "\\( \\displaystyle \\frac{30}{21} \\)",
      "\\( \\displaystyle \\frac{33}{21} \\)",
      "\\( \\displaystyle \\frac{10}{21} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{27 \\times 28} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{27}{28} \\)",
      "\\( \\displaystyle \\frac{26}{28} \\)",
      "\\( \\displaystyle \\frac{28}{29} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/28 = 27/28",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 360000 กับเลข 5 ในจำนวน 70600 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84681 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (42 \\times 65) + (42 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4200",
      "3780",
      "3360",
      "4620"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 42 x (65 + 35) = 42 x 100 = 4200",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 276 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "69",
      "79",
      "64",
      "84"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{17}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{52}{35} \\)",
      "\\( \\displaystyle \\frac{51}{35} \\)",
      "\\( \\displaystyle \\frac{54}{35} \\)",
      "\\( \\displaystyle \\frac{17}{35} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{34 \\times 35} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{34}{35} \\)",
      "\\( \\displaystyle \\frac{33}{35} \\)",
      "\\( \\displaystyle \\frac{35}{36} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/35 = 34/35",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 367000 กับเลข 5 ในจำนวน 70670 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84688 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (49 \\times 65) + (49 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4900",
      "4410",
      "3920",
      "5390"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 49 x (65 + 35) = 49 x 100 = 4900",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 360 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "90",
      "100",
      "85",
      "105"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{24}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{73}{49} \\)",
      "\\( \\displaystyle \\frac{72}{49} \\)",
      "\\( \\displaystyle \\frac{75}{49} \\)",
      "\\( \\displaystyle \\frac{24}{49} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{41 \\times 42} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{41}{42} \\)",
      "\\( \\displaystyle \\frac{40}{42} \\)",
      "\\( \\displaystyle \\frac{42}{43} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/42 = 41/42",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 374000 กับเลข 5 ในจำนวน 70740 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L4_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84695 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (31 \\times 65) + (31 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3100",
      "2790",
      "2480",
      "3410"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 31 x (65 + 35) = 31 x 100 = 3100",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 144 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "36",
      "46",
      "31",
      "51"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{6}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{19}{13} \\)",
      "\\( \\displaystyle \\frac{18}{13} \\)",
      "\\( \\displaystyle \\frac{21}{13} \\)",
      "\\( \\displaystyle \\frac{6}{13} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{23 \\times 24} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{23}{24} \\)",
      "\\( \\displaystyle \\frac{22}{24} \\)",
      "\\( \\displaystyle \\frac{24}{25} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/24 = 23/24",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 356000 กับเลข 5 ในจำนวน 70560 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84677 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (38 \\times 65) + (38 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3800",
      "3420",
      "3040",
      "4180"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 38 x (65 + 35) = 38 x 100 = 3800",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 228 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "57",
      "67",
      "52",
      "72"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{13}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{40}{27} \\)",
      "\\( \\displaystyle \\frac{39}{27} \\)",
      "\\( \\displaystyle \\frac{42}{27} \\)",
      "\\( \\displaystyle \\frac{13}{27} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{30 \\times 31} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{30}{31} \\)",
      "\\( \\displaystyle \\frac{29}{31} \\)",
      "\\( \\displaystyle \\frac{31}{32} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/31 = 30/31",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 363000 กับเลข 5 ในจำนวน 70630 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84684 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (45 \\times 65) + (45 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4500",
      "4050",
      "3600",
      "4950"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 45 x (65 + 35) = 45 x 100 = 4500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 312 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "78",
      "88",
      "73",
      "93"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{20}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{61}{41} \\)",
      "\\( \\displaystyle \\frac{60}{41} \\)",
      "\\( \\displaystyle \\frac{63}{41} \\)",
      "\\( \\displaystyle \\frac{20}{41} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{37 \\times 38} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{37}{38} \\)",
      "\\( \\displaystyle \\frac{36}{38} \\)",
      "\\( \\displaystyle \\frac{38}{39} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/38 = 37/38",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 370000 กับเลข 5 ในจำนวน 70700 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84691 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (52 \\times 65) + (52 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "5200",
      "4680",
      "4160",
      "5720"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 52 x (65 + 35) = 52 x 100 = 5200",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 396 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "99",
      "109",
      "94",
      "114"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{27}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{82}{55} \\)",
      "\\( \\displaystyle \\frac{81}{55} \\)",
      "\\( \\displaystyle \\frac{84}{55} \\)",
      "\\( \\displaystyle \\frac{27}{55} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_L5_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{44 \\times 45} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{44}{45} \\)",
      "\\( \\displaystyle \\frac{43}{45} \\)",
      "\\( \\displaystyle \\frac{45}{46} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/45 = 44/45",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_001",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_002",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 352000 กับเลข 5 ในจำนวน 70520 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_003",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84673 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_004",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (34 \\times 65) + (34 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "3400",
      "3060",
      "2720",
      "3740"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 34 x (65 + 35) = 34 x 100 = 3400",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_005",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 180 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "45",
      "55",
      "40",
      "60"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_006",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{9}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{28}{19} \\)",
      "\\( \\displaystyle \\frac{27}{19} \\)",
      "\\( \\displaystyle \\frac{30}{19} \\)",
      "\\( \\displaystyle \\frac{9}{19} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_007",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{26 \\times 27} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{26}{27} \\)",
      "\\( \\displaystyle \\frac{25}{27} \\)",
      "\\( \\displaystyle \\frac{27}{28} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/27 = 26/27",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_008",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_009",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 359000 กับเลข 5 ในจำนวน 70590 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_010",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84680 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_011",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (41 \\times 65) + (41 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4100",
      "3690",
      "3280",
      "4510"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 41 x (65 + 35) = 41 x 100 = 4100",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_012",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 264 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "66",
      "76",
      "61",
      "81"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_013",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{16}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{49}{33} \\)",
      "\\( \\displaystyle \\frac{48}{33} \\)",
      "\\( \\displaystyle \\frac{51}{33} \\)",
      "\\( \\displaystyle \\frac{16}{33} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_014",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{33 \\times 34} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{33}{34} \\)",
      "\\( \\displaystyle \\frac{32}{34} \\)",
      "\\( \\displaystyle \\frac{34}{35} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/34 = 33/34",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_015",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 14 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "112 ตร.ซม.",
      "132 ตร.ซม.",
      "92 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_016",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 366000 กับเลข 5 ในจำนวน 70660 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_017",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84687 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_018",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (48 \\times 65) + (48 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "4800",
      "4320",
      "3840",
      "5280"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 48 x (65 + 35) = 48 x 100 = 4800",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_019",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 348 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "87",
      "97",
      "82",
      "102"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_020",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{23}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{70}{47} \\)",
      "\\( \\displaystyle \\frac{69}{47} \\)",
      "\\( \\displaystyle \\frac{72}{47} \\)",
      "\\( \\displaystyle \\frac{23}{47} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_021",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{40 \\times 41} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{40}{41} \\)",
      "\\( \\displaystyle \\frac{39}{41} \\)",
      "\\( \\displaystyle \\frac{41}{42} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/41 = 40/41",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_022",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 28 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "448 ตร.ซม.",
      "468 ตร.ซม.",
      "428 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_023",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 373000 กับเลข 5 ในจำนวน 70730 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_024",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การประมาณค่าใกล้เคียง",
    "question": "ค่าประมาณใกล้เคียงจำนวนเต็มพันของ 84694 คือข้อใด",
    "options": [
      "84,000",
      "84,700",
      "85,000",
      "85,600"
    ],
    "correctAnswer": 2,
    "explanation": "ดูหลักร้อยเป็นเลข 6 (มากกว่าหรือเท่ากับ 5) ให้ปัดขึ้นเป็น 85,000",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_025",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "สมบัติการแจกแจง",
    "question": "\\( (55 \\times 65) + (55 \\times 35) \\) มีค่าเท่ากับข้อใด",
    "options": [
      "5500",
      "4950",
      "4400",
      "6050"
    ],
    "correctAnswer": 0,
    "explanation": "ดึงตัวร่วม: 55 x (65 + 35) = 55 x 100 = 5500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_026",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ห.ร.ม. และ ค.ร.น.",
    "question": "สองจำนวนมี ห.ร.ม. = 6 และ ค.ร.น. = 432 ถ้าจำนวนแรกคือ 24 อีกจำนวนคือข้อใด",
    "options": [
      "108",
      "118",
      "103",
      "123"
    ],
    "correctAnswer": 0,
    "explanation": "ใช้สูตร: จำนวนที่สอง = (ห.ร.ม. x ค.ร.น.) / จำนวนแรก",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_027",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศษส่วนต่อเนื่องและเศษส่วนซ้อน",
    "question": "ถ้า \\( \\displaystyle x = 1 + \\cfrac{1}{2 + \\cfrac{1}{30}} \\) จงหาค่าของ x ในรูปเศษส่วนอย่างต่ำ",
    "options": [
      "\\( \\displaystyle \\frac{91}{61} \\)",
      "\\( \\displaystyle \\frac{90}{61} \\)",
      "\\( \\displaystyle \\frac{93}{61} \\)",
      "\\( \\displaystyle \\frac{30}{61} \\)"
    ],
    "correctAnswer": 0,
    "explanation": "คำนวณจากชั้นล่างสุดขึ้นมาด้านบน: ตีลังกากลับเศษส่วนแล้วบวกตัวหน้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_028",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "อนุกรมเศษส่วนเทเลสโคปิก",
    "question": "ค่าของ \\( \\displaystyle \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + ... + \\frac{1}{47 \\times 48} \\) มีค่าเท่ากับข้อใด",
    "options": [
      "\\( \\displaystyle \\frac{47}{48} \\)",
      "\\( \\displaystyle \\frac{46}{48} \\)",
      "\\( \\displaystyle \\frac{48}{49} \\)",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "แยกเศษส่วนย่อยตัดกัน: 1 - 1/48 = 47/48",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_029",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เรขาคณิตและพื้นที่แรเงาใบไม้",
    "question": "รูปสี่เหลี่ยมจัตุรัสยาวด้านละ 42 ซม. มีพื้นที่แรเงารูปใบไม้ตรงกลางกี่ตารางเซนติเมตร",
    "options": [
      "1008 ตร.ซม.",
      "1028 ตร.ซม.",
      "988 ตร.ซม.",
      "154 ตร.ซม."
    ],
    "correctAnswer": 0,
    "explanation": "สูตรลัดพื้นที่ใบไม้ในจัตุรัส = (4/7) x ด้าน²",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "MATH_M_030",
    "subject": "math",
    "subjectName": "คณิตศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ค่าประจำหลักและจำนวนนับ",
    "question": "เลข 5 ในจำนวน 380000 กับเลข 5 ในจำนวน 70800 มีค่าต่างกันเท่าใด",
    "options": [
      "45,000",
      "49,500",
      "50,000",
      "50,500"
    ],
    "correctAnswer": 1,
    "explanation": "นำค่าประจำหลักในหลักหมื่น (50,000) ลบค่าประจำหลักในหลักร้อย (500) ได้ 49,500",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 1)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 3)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 280 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "140 นิวตัน",
      "280 นิวตัน",
      "70 นิวตัน",
      "560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 140 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 5)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 6)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 8)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 380 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "190 นิวตัน",
      "380 นิวตัน",
      "95 นิวตัน",
      "760 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 190 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 10)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 11)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 13)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 480 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "240 นิวตัน",
      "480 นิวตัน",
      "120 นิวตัน",
      "960 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 240 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 15)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 16)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 18)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 580 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "290 นิวตัน",
      "580 นิวตัน",
      "145 นิวตัน",
      "1160 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 290 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 20)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 21)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 22)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 23)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 680 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "340 นิวตัน",
      "680 นิวตัน",
      "170 นิวตัน",
      "1360 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 340 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L1_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 25)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 1)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 3)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 280 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "140 นิวตัน",
      "280 นิวตัน",
      "70 นิวตัน",
      "560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 140 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 5)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 6)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 8)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 380 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "190 นิวตัน",
      "380 นิวตัน",
      "95 นิวตัน",
      "760 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 190 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 10)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 11)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 13)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 480 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "240 นิวตัน",
      "480 นิวตัน",
      "120 นิวตัน",
      "960 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 240 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 15)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 16)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 18)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 580 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "290 นิวตัน",
      "580 นิวตัน",
      "145 นิวตัน",
      "1160 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 290 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 20)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 21)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 22)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 23)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 680 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "340 นิวตัน",
      "680 นิวตัน",
      "170 นิวตัน",
      "1360 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 340 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L2_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 25)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 1)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 3)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 280 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "140 นิวตัน",
      "280 นิวตัน",
      "70 นิวตัน",
      "560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 140 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 5)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 6)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 8)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 380 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "190 นิวตัน",
      "380 นิวตัน",
      "95 นิวตัน",
      "760 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 190 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 10)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 11)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 13)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 480 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "240 นิวตัน",
      "480 นิวตัน",
      "120 นิวตัน",
      "960 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 240 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 15)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 16)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 18)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 580 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "290 นิวตัน",
      "580 นิวตัน",
      "145 นิวตัน",
      "1160 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 290 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 20)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 21)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 22)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 23)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 680 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "340 นิวตัน",
      "680 นิวตัน",
      "170 นิวตัน",
      "1360 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 340 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L3_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 25)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 1)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 3)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 280 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "140 นิวตัน",
      "280 นิวตัน",
      "70 นิวตัน",
      "560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 140 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 5)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 6)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 8)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 380 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "190 นิวตัน",
      "380 นิวตัน",
      "95 นิวตัน",
      "760 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 190 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 10)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 11)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 13)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 480 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "240 นิวตัน",
      "480 นิวตัน",
      "120 นิวตัน",
      "960 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 240 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 15)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 16)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 18)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 580 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "290 นิวตัน",
      "580 นิวตัน",
      "145 นิวตัน",
      "1160 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 290 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 20)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 21)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 22)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 23)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 680 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "340 นิวตัน",
      "680 นิวตัน",
      "170 นิวตัน",
      "1360 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 340 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L4_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 25)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 1)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 3)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 280 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "140 นิวตัน",
      "280 นิวตัน",
      "70 นิวตัน",
      "560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 140 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 5)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 6)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 8)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 380 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "190 นิวตัน",
      "380 นิวตัน",
      "95 นิวตัน",
      "760 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 190 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 10)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 11)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 13)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 480 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "240 นิวตัน",
      "480 นิวตัน",
      "120 นิวตัน",
      "960 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 240 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 15)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 16)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 18)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 580 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "290 นิวตัน",
      "580 นิวตัน",
      "145 นิวตัน",
      "1160 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 290 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 20)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 21)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 22)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 23)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 680 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "340 นิวตัน",
      "680 นิวตัน",
      "170 นิวตัน",
      "1360 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 340 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_L5_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 25)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_001",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 1)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_002",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 2)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_003",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 3)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_004",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 280 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "140 นิวตัน",
      "280 นิวตัน",
      "70 นิวตัน",
      "560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 140 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_005",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 5)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_006",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 6)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_007",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 7)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_008",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 8)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_009",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 380 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "190 นิวตัน",
      "380 นิวตัน",
      "95 นิวตัน",
      "760 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 190 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_010",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 10)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_011",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 11)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_012",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 12)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_013",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 13)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_014",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 480 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "240 นิวตัน",
      "480 นิวตัน",
      "120 นิวตัน",
      "960 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 240 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_015",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 15)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_016",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 16)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_017",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 17)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_018",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 18)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_019",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 580 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "290 นิวตัน",
      "580 นิวตัน",
      "145 นิวตัน",
      "1160 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 290 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_020",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 20)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_021",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 21)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_022",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 22)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_023",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 23)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_024",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 680 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "340 นิวตัน",
      "680 นิวตัน",
      "170 นิวตัน",
      "1360 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 340 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_025",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 25)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_026",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: ท่อลำเลียงพืช",
    "question": "เนื้อเยื่อ โฟลเอ็ม (Phloem) ในพืชทำหน้าที่และมีทิศทางอย่างไร (ข้อที่ 26)",
    "options": [
      "ลำเลียงอาหารจากใบไปทั่วทุกส่วนได้ทุกทิศทาง",
      "ลำเลียงน้ำจากรากขึ้นบนเท่านั้น",
      "ลำเลียงแก๊สออกซิเจน",
      "ลำเลียงฮอร์โมนลงล่างอย่างเดียว"
    ],
    "correctAnswer": 0,
    "explanation": "ไซเล็มลำเลียงน้ำและแร่ธาตุขึ้นบน ส่วนโฟลเอ็มลำเลียงอาหารได้ทุกทิศทาง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_027",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ชีววิทยา: การสังเคราะห์ด้วยแสง",
    "question": "สารใดเป็นผลผลิตหลักจากการสังเคราะห์ด้วยแสงของพืชควบคู่กับแก๊สออกซิเจน (ข้อที่ 27)",
    "options": [
      "น้ำตาลกลูโคส",
      "แก๊สคาร์บอนไดออกไซด์",
      "กรดอะมิโน",
      "ไขมัน"
    ],
    "correctAnswer": 0,
    "explanation": "ปฏิกิริยาสังเคราะห์ด้วยแสงเปลี่ยน CO2 + H2O ได้น้ำตาลกลูโคสและออกซิเจน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_028",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พันธุศาสตร์: หมู่เลือด ABO",
    "question": "พ่อเลือดหมู่ A (IA i) แม่เลือดหมู่ B (IB i) ลูกมีโอกาสมีเลือดหมู่ใดได้บ้าง (ข้อที่ 28)",
    "options": [
      "มีโอกาสเป็นได้ทั้ง 4 หมู่ (A, B, AB, O)",
      "มีโอกาสเป็นเฉพาะหมู่ AB",
      "มีโอกาสเป็นเฉพาะหมู่ A และ B",
      "ไม่มีทางเป็นหมู่ O"
    ],
    "correctAnswer": 0,
    "explanation": "การจับคู่ยีน IA, IB, i ทำให้เกิดจีโนไทป์ได้ครบทั้ง 4 หมู่เลือด",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_029",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ฟิสิกส์: รอกและเครื่องกล",
    "question": "การใช้รอกเดี่ยวเคลื่อนที่ยกวัตถุหนัก 780 นิวตัน จะต้องออกแรงดึงกี่นิวตัน",
    "options": [
      "390 นิวตัน",
      "780 นิวตัน",
      "195 นิวตัน",
      "1560 นิวตัน"
    ],
    "correctAnswer": 0,
    "explanation": "รอกเดี่ยวเคลื่อนที่ช่วยผ่อนแรง 2 เท่า: F = W / 2 = 390 นิวตัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SCI_M_030",
    "subject": "science",
    "subjectName": "วิทยาศาสตร์",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ดาราศาสตร์: สุริยุปราคาและจันทรุปราคา",
    "question": "ปรากฏการณ์ จันทรุปราคา เกิดขึ้นเมื่อวัตถุท้องฟ้าเรียงตัวในลักษณะใด (ข้อที่ 30)",
    "options": [
      "ดวงอาทิตย์ - โลก - ดวงจันทร์",
      "ดวงอาทิตย์ - ดวงจันทร์ - โลก",
      "โลก - ดวงอาทิตย์ - ดวงจันทร์",
      "ดวงจันทร์ - โลก - ดวงอาทิตย์"
    ],
    "correctAnswer": 0,
    "explanation": "จันทรุปราคาเกิดเมื่อโลกอยู่ตรงกลาง บังแสงอาทิตย์ไม่ให้ส่องไปยังดวงจันทร์ในคืนวันเพ็ญ",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 1)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 2)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 3)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 4)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 5)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 6)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 7)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 8)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 9)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 10)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 11)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 12)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 13)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 14)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 15)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 16)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 17)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 18)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 19)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 20)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 21)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 22)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 23)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 24)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L1_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 25)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 1)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 2)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 3)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 4)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 5)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 6)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 7)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 8)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 9)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 10)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 11)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 12)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 13)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 14)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 15)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 16)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 17)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 18)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 19)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 20)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 21)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 22)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 23)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 24)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L2_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 25)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 1)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 2)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 3)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 4)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 5)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 6)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 7)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 8)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 9)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 10)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 11)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 12)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 13)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 14)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 15)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 16)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 17)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 18)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 19)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 20)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 21)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 22)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 23)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 24)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L3_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 25)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 1)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 2)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 3)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 4)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 5)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 6)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 7)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 8)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 9)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 10)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 11)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 12)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 13)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 14)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 15)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 16)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 17)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 18)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 19)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 20)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 21)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 22)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 23)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 24)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L4_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 25)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 1)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 2)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 3)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 4)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 5)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 6)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 7)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 8)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 9)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 10)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 11)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 12)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 13)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 14)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 15)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 16)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 17)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 18)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 19)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 20)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 21)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 22)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 23)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 24)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_L5_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 25)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_001",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 1)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_002",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 2)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_003",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 3)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_004",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 4)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_005",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 5)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_006",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 6)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_007",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 7)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_008",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 8)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_009",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 9)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_010",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 10)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_011",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 11)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_012",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 12)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_013",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 13)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_014",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 14)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_015",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 15)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_016",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 16)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_017",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 17)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_018",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 18)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_019",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 19)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_020",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 20)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_021",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 21)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_022",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 22)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_023",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 23)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_024",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 24)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_025",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 25)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_026",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 26)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_027",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "โวหารภาพพจน์",
    "question": "'เสียงฟ้าร้องคำรามกึกก้องประหนึ่งเสียงยักษ์ตวาด' ใช้โวหารภาพพจน์ประเภทใด (ข้อที่ 27)",
    "options": [
      "อุปมา (Simile)",
      "อุปลักษณ์ (Metaphor)",
      "บุคลาธิษฐาน",
      "สัทพจน์"
    ],
    "correctAnswer": 0,
    "explanation": "มีคำเชื่อมเปรียบเทียบคำว่า 'ประหนึ่ง' จัดเป็น อุปมาโวหาร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_028",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ไตรยางศ์: อักษรสามหมู่",
    "question": "พยัญชนะในข้อใดจัดอยู่ในกลุ่ม 'อักษรสูง' ทั้งหมด (ข้อที่ 28)",
    "options": [
      "ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห",
      "ก จ ด ต บ ป อ",
      "ค ฅ ฆ ง ช ซ",
      "ท ธ น พ ฟ ภ ม ย ร ล ว"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรสูงมี 11 ตัว ท่องจำ: ผีฝากถุงข้าวสารให้ฉัน",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_029",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "การผันวรรณยุกต์",
    "question": "คำว่า 'ไม้' มีรูปและเสียงวรรณยุกต์ตรงกับข้อใด (ข้อที่ 29)",
    "options": [
      "รูปโท แต่เสียงตรี",
      "รูปโท เสียงโท",
      "รูปเอก เสียงโท",
      "รูปตรี เสียงตรี"
    ],
    "correctAnswer": 0,
    "explanation": "อักษรต่ำ (ม) เมื่อใส่รูปไม้โท จะผันออกเสียงเป็นเสียงตรี",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "THAI_M_030",
    "subject": "thai",
    "subjectName": "ภาษาไทย",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "คำยืมบาลีและสันสกฤต",
    "question": "ข้อใดประกอบด้วยคำยืมที่มาจากภาษา 'สันสกฤต' ทุกคำ (ข้อที่ 30)",
    "options": [
      "กษัตริย์, ศรัทธา, วิทยา, ปรัชญา",
      "มัจฉา, ปัญญา, ทัพพี, สัจจะ",
      "เขนย, ฉลอง, บังเอิญ",
      "เก้าอี้, เต้าหู้, โต๊ะ"
    ],
    "correctAnswer": 0,
    "explanation": "สันสกฤตมีตัว ศ, ษ, ฤ, ควบกล้ำ และ รร",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 1)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 2)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 3)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 4)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 5)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 6)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 7)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 8)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 9)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 10)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 11)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 12)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 13)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 14)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 15)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 16)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 17)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 18)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 19)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 20)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 21)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 22)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 23)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 24)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L1_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 25)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 1)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 2)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 3)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 4)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 5)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 6)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 7)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 8)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 9)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 10)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 11)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 12)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 13)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 14)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 15)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 16)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 17)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 18)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 19)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 20)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 21)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 22)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 23)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 24)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L2_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 25)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 1)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 2)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 3)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 4)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 5)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 6)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 7)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 8)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 9)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 10)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 11)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 12)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 13)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 14)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 15)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 16)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 17)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 18)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 19)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 20)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 21)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 22)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 23)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 24)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L3_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 25)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 1)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 2)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 3)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 4)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 5)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 6)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 7)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 8)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 9)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 10)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 11)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 12)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 13)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 14)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 15)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 16)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 17)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 18)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 19)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 20)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 21)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 22)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 23)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 24)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L4_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 25)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 1)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 2)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 3)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 4)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 5)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 6)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 7)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 8)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 9)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 10)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 11)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 12)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 13)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 14)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 15)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 16)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 17)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 18)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 19)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 20)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 21)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 22)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 23)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 24)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_L5_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 25)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_001",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 1)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_002",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 2)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_003",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 3)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_004",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 4)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_005",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 5)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_006",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 6)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_007",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 7)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_008",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 8)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_009",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 9)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_010",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 10)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_011",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 11)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_012",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 12)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_013",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 13)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_014",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 14)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_015",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 15)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_016",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 16)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_017",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 17)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_018",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 18)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_019",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 19)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_020",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 20)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_021",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 21)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_022",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 22)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_023",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 23)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_024",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 24)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_025",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 25)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_026",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 26)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_027",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "ประวัติศาสตร์ไทย",
    "question": "พระมหากษัตริย์พระองค์ใดทรงประดิษฐ์ 'ลายสือไทย' ขึ้นเป็นครั้งแรกเมื่อ พ.ศ. 1826 (ข้อที่ 27)",
    "options": [
      "พ่อขุนรามคำแหงมหาราช",
      "พ่อขุนศรีอินทราทิตย์",
      "สมเด็จพระนเรศวรมหาราช",
      "สมเด็จพระนารายณ์มหาราช"
    ],
    "correctAnswer": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงประดิษฐ์ลายสือไทยขึ้นเมื่อ พ.ศ. 1826 ในสมัยสุโขทัย",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_028",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "พระพุทธศาสนา: วันสำคัญ",
    "question": "วันสำคัญทางพระพุทธศาสนาที่มีเหตุการณ์ 'ประสูติ ตรัสรู้ ปรินิพพาน' คือวันใด (ข้อที่ 28)",
    "options": [
      "วันวิสาขบูชา (ขึ้น 15 ค่ำ เดือน 6)",
      "วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3)",
      "วันอาสาฬหบูชา",
      "วันอัฏฐมีบูชา"
    ],
    "correctAnswer": 0,
    "explanation": "วันวิสาขบูชา เป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_029",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "หน้าที่พลเมือง: รัฐธรรมนูญ",
    "question": "อำนาจอธิปไตยของปวงชนชาวไทยแบ่งออกเป็น 3 ฝ่ายตามข้อใด (ข้อที่ 29)",
    "options": [
      "นิติบัญญัติ, บริหาร, ตุลาการ",
      "รัฐสภา, กองทัพ, ศาล",
      "ผู้ว่าราชการ, นายอำเภอ, กำนัน",
      "นายกรัฐมนตรี, รัฐมนตรี, ข้าราชการ"
    ],
    "correctAnswer": 0,
    "explanation": "อำนาจอธิปไตยแบ่งออกเป็น 3 ฝ่ายคือ นิติบัญญัติ (รัฐสภา), บริหาร (ครม.), ตุลาการ (ศาล)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "SOC_M_030",
    "subject": "social",
    "subjectName": "สังคมศึกษา",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "เศรษฐศาสตร์: กลไกราคา",
    "question": "ตามกฎของอุปสงค์ (Law of Demand) เมื่อราคาสินค้าสูงขึ้น ปริมาณความต้องการซื้อจะเป็นอย่างไร (ข้อที่ 30)",
    "options": [
      "ลดลง",
      "เพิ่มขึ้น",
      "คงที่",
      "ไม่แน่นอน"
    ],
    "correctAnswer": 0,
    "explanation": "กฎอุปสงค์: ราคาและปริมาณซื้อแปรผกผันกัน ถ้าราคาสูงขึ้น ผู้บริโภคจะซื้อน้อยลง",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 1)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 2)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 3)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 4)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 5)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 6)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 7)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 8)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 9)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 10)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 11)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 12)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 13)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 14)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 15)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 16)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 17)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 18)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 19)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 20)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 21)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 22)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 23)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 24)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L1_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 1,
    "level": "L1",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 25)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 1)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 2)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 3)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 4)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 5)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 6)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 7)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 8)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 9)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 10)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 11)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 12)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 13)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 14)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 15)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 16)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 17)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 18)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 19)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 20)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 21)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 22)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 23)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 24)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L2_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "L2",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 25)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 1)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 2)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 3)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 4)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 5)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 6)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 7)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 8)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 9)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 10)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 11)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 12)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 13)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 14)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 15)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 16)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 17)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 18)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 19)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 20)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 21)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 22)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 23)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 24)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L3_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L3",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 25)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 1)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 2)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 3)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 4)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 5)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 6)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 7)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 8)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 9)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 10)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 11)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 12)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 13)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 14)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 15)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 16)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 17)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 18)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 19)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 20)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 21)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 22)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 23)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 24)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L4_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L4",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 25)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 1)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 2)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 3)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 4)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 5)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 6)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 7)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 8)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 9)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 10)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 11)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 12)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 13)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 14)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 15)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 16)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 17)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 18)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 19)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 20)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 21)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 22)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 23)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 24)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_L5_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Gifted",
    "difficulty": 3,
    "level": "L5",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 25)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_001",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 1)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_002",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 2)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_003",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 3)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_004",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 4)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_005",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 5)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_006",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 6)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_007",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 7)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_008",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 8)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_009",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 9)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_010",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 10)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_011",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 11)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_012",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 12)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_013",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 13)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_014",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 14)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_015",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 15)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_016",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 16)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_017",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 17)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_018",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 18)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_019",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 19)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_020",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 20)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_021",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 21)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_022",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 22)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_023",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 23)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_024",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 24)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_025",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 25)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_026",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 26)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_027",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Quantifiers",
    "question": "There is very ______ milk left in the bottle, so please buy more. (Item 27)",
    "options": [
      "little",
      "few",
      "a few",
      "many"
    ],
    "correctAnswer": 0,
    "explanation": "milk เป็นนามนับไม่ได้และมีน้อยมาก ใช้ little",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_028",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Subjunctive / Wish Clauses",
    "question": "I wish I ______ enough time to join the school competition tomorrow. (Item 28)",
    "options": [
      "had",
      "have",
      "will have",
      "have had"
    ],
    "correctAnswer": 0,
    "explanation": "Wish ในปัจจุบันใช้โครงสร้าง Past Simple (V.2) คือ had",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_029",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Phrasal Verbs",
    "question": "Can you please ______ the air conditioner before leaving? (Item 29)",
    "options": [
      "turn off",
      "turn on",
      "turn into",
      "turn over"
    ],
    "correctAnswer": 0,
    "explanation": "turn off แปลว่า ปิด (เครื่องใช้ไฟฟ้า/ไฟ)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  },
  {
    "id": "ENG_M_030",
    "subject": "english",
    "subjectName": "ภาษาอังกฤษ",
    "track": "Regular",
    "difficulty": 2,
    "level": "M",
    "topic": "Gerund vs Infinitive",
    "question": "My friend decided ______ abroad after graduation. (Item 30)",
    "options": [
      "to study",
      "studying",
      "study",
      "studied"
    ],
    "correctAnswer": 0,
    "explanation": "กริยา decide ตามด้วย to + V.inf เสมอ (decide to do something)",
    "trap": "อ่านเงื่อนไขของโจทย์ให้รอบคอบ",
    "shortcutTrick": "วิเคราะห์ทีละขั้นตอนตามหลักวิชาการ"
  }
];

window.DEFAULT_CLUB_POSTS = [];
window.DEFAULT_SHARED_EXAMS = [];
window.DEFAULT_LEADERBOARD = [];
