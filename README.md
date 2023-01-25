# wkt-parser

The wkt parser pulled out of proj4 so it can be hacked on.

## Usage

```JavaScript
import wktParser from "https://code4fukui.github.io/wkt-parser/index.js";
import fixtures from "./test-fixtures.json" assert { type: "json" };

fixtures.forEach((item, i) => {
  const out = wktParser(item.code);
  console.log(JSON.stringify(out, null, 2));
});
```

## Test

```sh
$ deno test
```
