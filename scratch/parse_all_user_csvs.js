const fs = require('fs');
const path = require('path');

function decodeCP874(buf) {
  let str = '';
  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    if (b < 0x80) {
      str += String.fromCharCode(b);
    } else if (b >= 0xA1 && b <= 0xFB) {
      str += String.fromCharCode(0x0E00 + (b - 0xA0));
    } else {
      str += ' ';
    }
  }
  return str;
}

// Robust CSV Line Parser that handles quotes and commas inside quotes
function parseCSV(text) {
  const lines = [];
  let row = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i+1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(cur.trim());
      cur = '';
    } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      row.push(cur.trim());
      cur = '';
      if (row.length > 1 && row.some(cell => cell.length > 0)) {
        lines.push(row);
      }
      row = [];
    } else {
      cur += ch;
    }
  }
  if (cur.length > 0 || row.length > 0) {
    row.push(cur.trim());
    if (row.length > 1) lines.push(row);
  }
  return lines;
}

const dir = 'C:\\Users\\relex\\.gemini\\antigravity\\brain\\faf163db-c8ac-4b48-8603-ce475041110a\\.user_uploaded';
const files = {
  math: 'media_1788097073205.csv',
  social: 'media_1788097222041.csv',
  thai: 'media_1788097222047.csv',
  science: 'media_1788097222063.csv'
};

const results = {};

for (const [subKey, filename] of Object.entries(files)) {
  const filePath = path.join(dir, filename);
  const buf = fs.readFileSync(filePath);
  const text = decodeCP874(buf);
  const rows = parseCSV(text);
  const headers = rows[0];
  const dataRows = rows.slice(1);
  console.log(`${subKey.toUpperCase()}: ${dataRows.length} questions parsed. Headers: ${headers.slice(0, 6).join(', ')}`);
  results[subKey] = dataRows;
}
