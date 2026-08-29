/**
 * Horwang M.1 AI Exam Master - Cloudflare D1 Sync Adapter
 * Handles communication with Cloudflare Pages Functions (/api/*) & D1 Database with offline fallback.
 */

window.CloudflareSync = (function() {
  let isCloudflareOnline = false;

  async function checkConnection() {
    try {
      const res = await fetch('/api/questions?limit=1', { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        isCloudflareOnline = !data.fallback;
      } else {
        isCloudflareOnline = false;
      }
    } catch (e) {
      isCloudflareOnline = false;
    }
    updateCloudStatusUI();
    return isCloudflareOnline;
  }

  function updateCloudStatusUI() {
    const dot = document.getElementById('cf-status-dot');
    const text = document.getElementById('cf-status-text');
    if (dot && text) {
      if (isCloudflareOnline) {
        dot.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse";
        text.innerText = "Cloudflare D1: เชื่อมต่อแล้ว (Edge Sync)";
      } else {
        dot.className = "w-2.5 h-2.5 rounded-full bg-amber-400 inline-block";
        text.innerText = "Cloudflare D1: โหมดออฟไลน์ (Local Ready)";
      }
    }
  }

  // 1. Sync Exam Result to Cloudflare D1
  async function saveExamResult(examData) {
    if (!isCloudflareOnline) return false;
    try {
      const res = await fetch('/api/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(examData)
      });
      return res.ok;
    } catch (e) {
      console.warn("Cloudflare sync exam error:", e);
      return false;
    }
  }

  // 2. Fetch Leaderboard from Cloudflare D1
  async function fetchLeaderboard() {
    if (!isCloudflareOnline) return null;
    try {
      const res = await fetch('/api/leaderboard');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.data.length > 0) return data.data;
      }
    } catch (e) {
      console.warn("Cloudflare fetch leaderboard error:", e);
    }
    return null;
  }

  // 3. Seed Initial Question Bank to Cloudflare D1
  async function seedDatabaseToCloud() {
    window.SoundEngine.click();
    const allQuestions = window.MegaBankEngine.getAllBankQuestions();
    try {
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allQuestions)
      });
      if (res.ok) {
        const data = await res.json();
        alert(`☁️ อัปโหลดคลังข้อสอบขึ้น Cloudflare D1 สำเร็จ! (${data.inserted} ข้อ)`);
      } else {
        alert("⚠️ ไม่สามารถบันทึกลง D1 ได้ (โปรดตรวจสอบการ binding D1 บน Cloudflare)");
      }
    } catch (e) {
      alert("⚠️ ข้อผิดพลาด: " + e.message);
    }
  }

  return {
    checkConnection,
    saveExamResult,
    fetchLeaderboard,
    seedDatabaseToCloud,
    isOnline: () => isCloudflareOnline
  };
})();
