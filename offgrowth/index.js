const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, 'skills');

function list() {
  return fs.readdirSync(skillsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}

function get(name) {
  const filePath = path.join(skillsDir, `${name}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Skill "${name}" not found. Available: ${list().join(', ')}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

function all() {
  return list().reduce((acc, name) => {
    acc[name] = get(name);
    return acc;
  }, {});
}

module.exports = { list, get, all };
