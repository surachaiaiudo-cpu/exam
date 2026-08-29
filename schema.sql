-- ===================================================================
-- Cloudflare D1 SQL Schema for Horwang M.1 AI Exam Master
-- Database: SQLite on Cloudflare Global Edge Network
-- ===================================================================

-- 1. Table: Questions (คลังข้อสอบ 5 กลุ่มสาระวิชา)
CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,          -- math, science, english, thai, social
    subject_name TEXT NOT NULL,     -- คณิตศาสตร์, วิทยาศาสตร์, ...
    track TEXT NOT NULL,            -- Gifted, Regular
    difficulty INTEGER NOT NULL,    -- 1, 2, 3
    topic TEXT,                     -- เศษส่วนซ้อน, วงจรไฟฟ้า, If-clauses...
    question TEXT NOT NULL,
    options_json TEXT NOT NULL,     -- JSON array: ["ตัวเลือก A", "ตัวเลือก B", ...]
    correct_answer INTEGER NOT NULL,-- 0, 1, 2, 3
    explanation TEXT NOT NULL,
    trap TEXT,                      -- จุดหลอก/กับดัก
    shortcut_trick TEXT,            -- สูตรลัด
    tags_json TEXT,                 -- ["ข้อสอบหอวัง 66", "สพฐ."]
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for ultra-fast query on edge
CREATE INDEX IF NOT EXISTS idx_questions_subject ON questions(subject);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);
CREATE INDEX IF NOT EXISTS idx_questions_track ON questions(track);

-- 2. Table: Exam Results (บันทึกผลการสอบของนักเรียน)
CREATE TABLE IF NOT EXISTS exam_results (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,          -- student ID or unique client token
    user_name TEXT NOT NULL,        -- ชื่อนักเรียน
    exam_title TEXT NOT NULL,
    subject TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage REAL NOT NULL,
    time_used_sec INTEGER NOT NULL,
    subject_stats_json TEXT,        -- Breakdown per subject
    is_gifted_pass BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_results_user ON exam_results(user_id);
CREATE INDEX IF NOT EXISTS idx_results_created ON exam_results(created_at DESC);

-- 3. Table: Study Club Posts (กระทู้ถาม-ตอบข้อสอบ)
CREATE TABLE IF NOT EXISTS club_posts (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    author_name TEXT NOT NULL,
    author_avatar TEXT DEFAULT 'HW',
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER DEFAULT 0,
    ai_trap TEXT,
    ai_shortcut TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_posts_subject ON club_posts(subject);
CREATE INDEX IF NOT EXISTS idx_posts_created ON club_posts(created_at DESC);

-- 4. Table: Study Club Comments (ความคิดเห็นในกระทู้)
CREATE TABLE IF NOT EXISTS club_comments (
    id TEXT PRIMARY KEY,
    post_id TEXT NOT NULL,
    author_name TEXT NOT NULL,
    comment_text TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES club_posts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_comments_post ON club_comments(post_id);

-- 5. Table: Leaderboard (ตารางอันดับสะสมคะแนน XP)
CREATE TABLE IF NOT EXISTS leaderboard (
    user_id TEXT PRIMARY KEY,
    user_name TEXT NOT NULL,
    xp INTEGER DEFAULT 0,
    badge TEXT DEFAULT 'New Challenger 🚀',
    avatar TEXT DEFAULT 'HW',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_xp ON leaderboard(xp DESC);
