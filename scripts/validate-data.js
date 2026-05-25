import fs from 'node:fs';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const data = JSON.parse(fs.readFileSync('data/sources.json', 'utf8'));
const schema = JSON.parse(fs.readFileSync('data/schema.json', 'utf8'));
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

const ok = validate(data);
if (!ok) {
  console.error(validate.errors);
  process.exit(1);
}

const ids = new Set();
for (const item of data) {
  if (ids.has(item.id)) {
    console.error(`Duplicate id: ${item.id}`);
    process.exit(1);
  }
  ids.add(item.id);
  if (!Array.isArray(item.evidence) || item.evidence.length < 1) {
    console.error(`Missing evidence: ${item.id}`);
    process.exit(1);
  }
}

console.log(`Validated ${data.length} sources.`);
