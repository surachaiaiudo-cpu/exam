const vm = require('vm');
const fs = require('fs');

const code = fs.readFileSync('js/data/questions-db.js', 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(code, ctx);
const db = ctx.window.QUESTIONS_DB || [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateExam(count = 20, subject = 'all', difficulties = [1,2,3,4,5]) {
  let pool = [...db];
  
  // 1. Filter by subject
  if (subject && subject !== 'all') {
    pool = pool.filter(q => q.subject === subject);
  }
  
  // 2. Filter by difficulties
  if (difficulties && difficulties.length > 0 && difficulties.length < 5) {
    const diffNums = difficulties.map(d => parseInt(d, 10));
    const filtered = pool.filter(q => {
      const qDiff = parseInt(q.difficulty, 10);
      const qLvl = q.level ? parseInt(q.level.replace('L', ''), 10) : qDiff;
      return diffNums.includes(qDiff) || diffNums.includes(qLvl);
    });
    if (filtered.length > 0) pool = filtered;
  }
  
  // 3. Selection
  if (subject !== 'all') {
    pool = shuffle(pool);
    return pool.slice(0, count);
  } else {
    // Balanced distribution across 5 subjects
    const subjects = ['math', 'science', 'thai', 'social', 'english'];
    const perSubj = Math.floor(count / subjects.length);
    const rem = count % subjects.length;
    let result = [];
    
    subjects.forEach((s, idx) => {
      let sPool = pool.filter(q => q.subject === s);
      sPool = shuffle(sPool);
      const take = perSubj + (idx < rem ? 1 : 0);
      result.push(...sPool.slice(0, take));
    });
    
    return shuffle(result);
  }
}

// Test individual subjects
['math', 'science', 'thai', 'social', 'english', 'all'].forEach(s => {
  const exam = generateExam(20, s, [1, 2, 3]);
  const subjs = [...new Set(exam.map(q => q.subject))];
  console.log(`Subject '${s}' test (count=${exam.length}): subjects present = [${subjs.join(', ')}]`);
  if (s !== 'all' && (subjs.length !== 1 || subjs[0] !== s)) {
    console.error(`ERROR: Subject '${s}' failed!`);
  }
});
