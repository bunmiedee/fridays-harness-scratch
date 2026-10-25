const fs = require("fs");

const files = fs.readdirSync(__dirname).filter((f) => f.endsWith(".txt"));
if (files.length === 0) {
  console.error("expected at least one .txt file");
  process.exit(1);
}
console.log("ok:", files.join(", "));
