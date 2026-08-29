# 🎓 Horwang M.1 AI Exam Master - Cloudflare D1 Edition (v2.4)

> **ระบบแบบจำลองข้อสอบและคลังข้อสอบเตรียมสอบเข้า ม.1 โรงเรียนหอวัง ขับเคลื่อนด้วย Cloudflare D1 Serverless SQL Database + Pages Functions**

---

## 📌 สถาปัตยกรรมระบบบน Cloudflare (Cloudflare Architecture)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      🌐 CLOUDFLARE EDGE PLATFORM                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  🚀 1. Cloudflare Pages & HTML5 Frontend (UI, Audio Synthesizer, OMR)       │
│  ⚡ 2. Cloudflare Pages Functions (/api/questions, /api/exams, /api/posts) │
│  🗄️ 3. Cloudflare D1 (Serverless SQL Database on SQLite Engine)            │
│  🔄 4. Client Sync Adapter with Offline Fallback (Local Storage)            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🗄️ โครงสร้างฐานข้อมูล Cloudflare D1 (`schema.sql`)

1. **`questions`**: คลังข้อสอบ 5 กลุ่มสาระวิชา (โจทย์, ตัวเลือก, เฉลยวิธีคิด, จุดหลอก, สูตรลัด, แท็ก)
2. **`exam_results`**: บันทึกผลคะแนนสอบ, เวลาที่ใช้, สถิติแยกรายวิชา, การประเมินเกณฑ์ Gifted
3. **`club_posts`**: กระทู้ตั้งถาม-สืบค้นโจทย์ใน Study Club
4. **`club_comments`**: ความคิดเห็นและการเฉลยร่วมกับเพื่อน
5. **`leaderboard`**: อันดับสะสม XP และเหรียญรางวัล

---

## 🚀 วิธีการ Deploy ขึ้น Cloudflare Pages & D1

### ขั้นตอนที่ 1: สร้างฐานข้อมูล Cloudflare D1
```bash
# ล็อกอินเข้า Cloudflare CLI
npx wrangler login

# สร้าง D1 Database
npx wrangler d1 create horwang-exam-db
```
*(คัดลอก `database_id` ที่ได้ นำไปวางในไฟล์ `wrangler.toml`)*

### ขั้นตอนที่ 2: รัน Schema สร้างตารางฐานข้อมูล
```bash
# รันไฟล์ schema.sql บน Cloudflare D1
npx wrangler d1 execute horwang-exam-db --file=schema.sql
```

### ขั้นตอนที่ 3: Deploy ขึ้น Cloudflare Pages
```bash
# Deploy เว็บไซต์และ Serverless Functions ขึ้น Cloudflare
npx wrangler pages deploy . --project-name=horwang-m1-exam
```

---

## 📂 โครงสร้างไฟล์ทั้งหมด (Project Structure)

```text
d:/project-ai/exam/
├── index.html                      # หน้าเว็บหลัก (Cloudflare Pages Ready)
├── wrangler.toml                   # การตั้งค่า Cloudflare D1 Binding & Pages
├── schema.sql                      # SQL Schema สำหรับ Cloudflare D1
├── package.json                    # Project Manifest & Dev Scripts
├── README.md                       # เอกสารคู่มือระบบ v2.4
├── functions/                      # Cloudflare Serverless Pages Functions
│   └── api/
│       ├── questions.js            # API จัดการคลังข้อสอบบน D1
│       ├── exams.js                # API บันทึกคะแนนสอบ & คำนวณ XP
│       ├── posts.js                # API กระทู้ถาม-ตอบ Study Club
│       └── leaderboard.js          # API ดึงอันดับ Leaderboard
├── css/
│   └── style.css                   # สไตล์ธีมหอวัง (Maroon/Gold), OMR Layout
└── js/
    ├── config.js                   # การตั้งค่าระบบ
    ├── sound.js                    # Web Audio Synthesizer
    ├── data/
    │   ├── mega-bank-engine.js     # Hybrid Engine สุ่มตัวแปร + คลังข้อสอบ
    │   ├── questions-db.js         # คลังข้อสอบ Master 5 วิชา
    │   └── algorithmic-generator.js # เครื่องสุ่มตัวแปรคำนวณสดใหม่
    └── modules/
        ├── cloudflare-sync.js      # ตัวเชื่อมต่อ Cloudflare D1 พร้อม Offline Sync
        ├── bank-browser.js         # Question Bank Explorer
        ├── exam-engine.js          # ระบบจำลองสอบ OMR ดิจิทัล
        ├── study-club.js           # ชุมชน Study Club & AI Research Agent
        ├── analytics.js            # แดชบอร์ดสถิติ & แผนที่ Roadmap 4 ระยะ
        ├── no-api-hub.js           # เครื่องมือเชื่อมต่อ Web AI ฟรี
        └── omr-printer.js          # เครื่องพิมพ์ใบงาน PDF และ OMR 2B
```

---

## 💡 หมายเหตุเรื่องการใช้งาน
- **ใช้งานแบบ Offline**: สามารถดับเบิลคลิกเปิดไฟล์ `index.html` บนเครื่องได้ทันที ระบบจะบันทึกข้อมูลลงเครื่องอัตโนมัติ
- **ใช้งานบน Cloudflare D1**: เมื่อนำขึ้น Cloudflare Pages ระบบจะซิงค์ผลคะแนน คลังข้อสอบ และกระดานผู้นำขึ้น Cloudflare Edge อัตโนมัติทันที
