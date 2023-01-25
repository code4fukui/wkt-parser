import * as t from "https://deno.land/std/testing/asserts.ts";
import compare from 'https://code4fukui.github.io/js-struct-compare/src/index.mjs';
import wktParser from "./index.js";
import fixtures from "./test-fixtures.json" assert { type: "json" };

Deno.test("test", () => {
  fixtures.forEach(item => {
    const out = wktParser(item.code);
    const diff = JSON.stringify(compare(item.value, JSON.parse(JSON.stringify(out))), null, 2);
    t.assertEquals(diff, "[]");
  })
});
