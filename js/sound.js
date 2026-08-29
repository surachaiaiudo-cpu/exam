/**
 * Horwang M.1 AI Exam Master - Web Audio Sound Synthesizer (Bulletproof)
 */

window.SoundEngine = (function() {
  let audioCtx = null;

  function initContext() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      console.warn("AudioContext init error:", e);
    }
  }

  function playTone(freq, type, duration, delay = 0, volume = 0.1) {
    if (!window.APP_STATE || !window.APP_STATE.audioEnabled) return;
    try {
      initContext();
      if (!audioCtx) return;
      setTimeout(() => {
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gain.gain.setValueAtTime(volume, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + duration);
        } catch (err) {}
      }, delay * 1000);
    } catch (e) {
      console.warn("SoundEngine error:", e);
    }
  }

  return {
    click: function() {
      playTone(520, 'triangle', 0.04, 0, 0.08);
    },
    bubblePop: function() {
      playTone(400, 'sine', 0.05, 0, 0.12);
      playTone(600, 'sine', 0.06, 0.03, 0.1);
    },
    bubbleFill: function() {
      playTone(400, 'sine', 0.05, 0, 0.12);
      playTone(600, 'sine', 0.06, 0.03, 0.1);
    },
    success: function() {
      playTone(523.25, 'sine', 0.15, 0);     // C5
      playTone(659.25, 'sine', 0.15, 0.09);  // E5
      playTone(783.99, 'sine', 0.25, 0.18);  // G5
      playTone(1046.50, 'sine', 0.35, 0.28); // C6
    },
    celebrate: function() {
      playTone(523.25, 'sine', 0.15, 0);
      playTone(659.25, 'sine', 0.15, 0.08);
      playTone(783.99, 'sine', 0.15, 0.16);
      playTone(1046.50, 'sine', 0.3, 0.24);
      playTone(1318.51, 'sine', 0.4, 0.36);
    },
    warning: function() {
      playTone(220, 'sawtooth', 0.18, 0, 0.08);
      playTone(180, 'sawtooth', 0.25, 0.12, 0.08);
    },
    error: function() {
      playTone(220, 'sawtooth', 0.18, 0, 0.08);
      playTone(160, 'sawtooth', 0.25, 0.12, 0.08);
    },
    toggle: function() {
      window.APP_STATE.audioEnabled = !window.APP_STATE.audioEnabled;
      const btn = document.getElementById('btn-audio');
      if (btn) {
        if (window.APP_STATE.audioEnabled) {
          btn.innerHTML = '<i class="fa-solid fa-volume-high text-horwang-gold"></i>';
          this.click();
        } else {
          btn.innerHTML = '<i class="fa-solid fa-volume-xmark text-slate-400"></i>';
        }
      }
    }
  };
})();
