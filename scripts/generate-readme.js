import fs from 'node:fs';

const sources = JSON.parse(fs.readFileSync('data/sources.json', 'utf8'));
const today = new Date().toISOString().slice(0, 10);

function short(value) {
  if (Array.isArray(value)) return value.slice(0, 4).join(', ') + (value.length > 4 ? '…' : '');
  return String(value || '');
}

const rows = sources.slice(0, 40).map(s =>
  `| [${s.name}](${s.url}) | ${short(s.categories)} | ${short(s.languages)} | ${s.free_to_read} / ${s.paywall} | ${s.ownership_funding} | ${s.ifcn_verified} | ${s.transparency_rating} | ${s.last_reviewed} |`
).join('
');

const readme = `# Free Press India 🇮🇳

Generated on ${today}.

Complete data: \`data/sources.json\`.

| Name | Categories | Languages | Free / Paywall | Ownership/Funding | IFCN | Transparency | Last reviewed |
|---|---|---|---|---|---|---|---|
${rows}
`;

fs.writeFileSync('README.generated.md', readme);
console.log('Wrote README.generated.md');
