const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, 'src/components/layout/Footer.tsx');
let footerCode = fs.readFileSync(footerPath, 'utf8');

// Replace footer background and text colors
footerCode = footerCode.replace(/className="footer-dark"/g, 'className="bg-[var(--bg)] text-[var(--text-primary)] border-t border-[var(--border)]"');
footerCode = footerCode.replace(/text-white\/50/g, 'text-[var(--text-secondary)]');
footerCode = footerCode.replace(/text-white\/45/g, 'text-[var(--text-secondary)]');
footerCode = footerCode.replace(/text-white\/40/g, 'text-[var(--text-tertiary)]');
footerCode = footerCode.replace(/text-white\/30/g, 'text-[var(--text-tertiary)]');
footerCode = footerCode.replace(/text-white\/70/g, 'text-[var(--text-primary)]');
footerCode = footerCode.replace(/text-white\/80/g, 'text-[var(--text-primary)]');
footerCode = footerCode.replace(/text-white/g, 'text-[var(--text-primary)]');

footerCode = footerCode.replace(/bg-white\/5/g, 'bg-[var(--bg-secondary)]');
footerCode = footerCode.replace(/bg-white\/6/g, 'bg-[var(--bg-secondary)]');
footerCode = footerCode.replace(/bg-white\/8/g, 'bg-[var(--bg-secondary)]');
footerCode = footerCode.replace(/border-white\/8/g, 'border-[var(--border)]');
footerCode = footerCode.replace(/border-white\/10/g, 'border-[var(--border)]');
footerCode = footerCode.replace(/border-white\/6/g, 'border-[var(--border)]');
footerCode = footerCode.replace(/divider-dark/g, 'h-px w-full bg-[var(--border)]');

// Also remove color="white" equivalents if any, but they are tailwind classes above.
fs.writeFileSync(footerPath, footerCode);

const askAbrahamPath = path.join(__dirname, 'src/app/ask-abraham/page.tsx');
let askAbrahamCode = fs.readFileSync(askAbrahamPath, 'utf8');

// Remove emojis
askAbrahamCode = askAbrahamCode.replace(/🤖 /g, '');
askAbrahamCode = askAbrahamCode.replace(/🛡️ /g, '');
askAbrahamCode = askAbrahamCode.replace(/⚠️ /g, '');
askAbrahamCode = askAbrahamCode.replace(/🔍 /g, '');
askAbrahamCode = askAbrahamCode.replace(/✨ /g, '');
askAbrahamCode = askAbrahamCode.replace(/🏠 /g, '');
askAbrahamCode = askAbrahamCode.replace(/📱 /g, '');
askAbrahamCode = askAbrahamCode.replace(/🚗 /g, '');
askAbrahamCode = askAbrahamCode.replace(/📄 /g, '');
askAbrahamCode = askAbrahamCode.replace(/👤 /g, '');
askAbrahamCode = askAbrahamCode.replace(/💬 /g, '');
askAbrahamCode = askAbrahamCode.replace(/🌐 /g, '');
askAbrahamCode = askAbrahamCode.replace(/💼 /g, '');

// The upload almost anything array:
// { icon: '📷', label: 'Images' } -> { label: 'Images' }
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '📷', label: 'Images' \}/g, "{ label: 'Images' }");
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '📄', label: 'Documents' \}/g, "{ label: 'Documents' }");
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '🌐', label: 'Website links' \}/g, "{ label: 'Website links' }");
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '💬', label: 'Conversations' \}/g, "{ label: 'Conversations' }");
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '📍', label: 'Locations' \}/g, "{ label: 'Locations' }");
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '📝', label: 'Descriptions' \}/g, "{ label: 'Descriptions' }");
askAbrahamCode = askAbrahamCode.replace(/\{ icon: '📋', label: 'Business info' \}/g, "{ label: 'Business info' }");

// And in the map function:
// <span className="text-2xl">{item.icon}</span>
askAbrahamCode = askAbrahamCode.replace(/<span className="text-2xl">\{item\.icon\}<\/span>/g, '');

fs.writeFileSync(askAbrahamPath, askAbrahamCode);
console.log('Done');
