const fs = require('fs');
const json = JSON.parse(fs.readFileSync('tree.json', 'utf8'));
const paths = json.tree.filter(t => t.path.toLowerCase().match(/glitch|glow|specular|button/)).map(t => t.path);
console.log(paths.join('\n'));
