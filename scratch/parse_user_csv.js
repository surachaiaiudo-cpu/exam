const fs = require('fs');

const transcript = fs.readFileSync('C:/Users/relex/.gemini/antigravity/brain/faf163db-c8ac-4b48-8603-ce475041110a/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n');

let allCsvLines = [];

lines.forEach(lineStr => {
  if (!lineStr.trim()) return;
  try {
    const obj = JSON.parse(lineStr);
    const content = obj.content || '';
    if (content.includes('MATH_L1_') || content.includes('SOC_L1_') || content.includes('THAI_L1_') || content.includes('SCI_L1_')) {
      const splitContent = content.split('\n');
      splitContent.forEach(cl => {
        const trimmed = cl.trim();
        if (trimmed.startsWith('MATH_') || trimmed.startsWith('SOC_') || trimmed.startsWith('THAI_') || trimmed.startsWith('SCI_')) {
          allCsvLines.push(trimmed);
        }
      });
    }
  } catch(e) {}
});

console.log('Total extracted CSV lines:', allCsvLines.length);
const prefixCounts = {};
allCsvLines.forEach(l => {
  const p = l.split('_')[0];
  prefixCounts[p] = (prefixCounts[p] || 0) + 1;
});
console.log('By Subject Prefix:', prefixCounts);
if (allCsvLines.length > 0) {
  console.log('Sample line 0:', allCsvLines[0]);
  console.log('Sample line 1:', allCsvLines[1]);
  fs.writeFileSync('scratch/extracted_raw_csv.txt', allCsvLines.join('\n'), 'utf8');
}
