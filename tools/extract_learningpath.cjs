// Extracts the Learning Path data from the React component into JSON for the PDF builder.
// Usage: node tools/extract_learningpath.cjs tools/learningpath.json
const fs = require("fs");
const out = process.argv[2] || "tools/learningpath.json";
const src = fs.readFileSync("src/features/LearningPath.jsx", "utf8");
const a = src.indexOf("const COLORS");
const b = src.indexOf("export default function LearningPath");
const m = { exports: {} };
new Function("module", "exports", src.slice(a, b) + "\nmodule.exports = learningPath;")(m, m.exports);
fs.writeFileSync(out, JSON.stringify(m.exports, null, 1));
console.log("weeks:", m.exports.length);
