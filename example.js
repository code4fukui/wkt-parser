import wktParser from './index.js';
import fixtures from './test-fixtures.json' assert { type: "json" };

fixtures.forEach((item, i) => {
  const out = wktParser(item.code);
  console.log(JSON.stringify(out, null, 2));
});
