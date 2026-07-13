const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace Tailwind blue colors with primary
  content = content.replace(/blue-50/g, 'primary-50');
  content = content.replace(/blue-100/g, 'primary-100');
  content = content.replace(/blue-200/g, 'primary-200');
  content = content.replace(/blue-300/g, 'primary-300');
  content = content.replace(/blue-400/g, 'primary-400');
  content = content.replace(/blue-500/g, 'primary-500');
  content = content.replace(/blue-600/g, 'primary-600');
  content = content.replace(/blue-700/g, 'primary-700');
  content = content.replace(/blue-800/g, 'primary-800');
  content = content.replace(/blue-900/g, 'primary-900');
  content = content.replace(/blue-950/g, 'primary-950');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Replaced blue with primary in ${changedCount} files.`);
