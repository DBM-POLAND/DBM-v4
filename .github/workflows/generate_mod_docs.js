const fs = require("fs");
const path = require("path");

console.log("=== Generate Mod Docs ===");

// folder z extensions
const extensionsDir = path.join(process.cwd(), "bot/extensions");
console.log("Extensions folder:", extensionsDir);

if (!fs.existsSync(extensionsDir)) {
  console.error("Extensions folder does NOT exist!");
  process.exit(1);
}

const files = fs.readdirSync(extensionsDir).filter((f) => f.endsWith(".js"));
console.log("Found extension files:", files);

const outDir = path.join(process.cwd(), "docs/dbm");
fs.mkdirSync(outDir, { recursive: true });
console.log("Output folder:", outDir);

const result = [];

for (const file of files) {
  const filePath = path.join(extensionsDir, file);
  console.log(`\nProcessing file: ${filePath}`);

  try {
    const module = require(filePath);
    console.log("Module exports:", module);

    const name = module.name || file.replace(".js", "");
    const description = module.description || "";

    console.log("-> Name:", name);
    console.log("-> Description:", description);

    result.push({ name, description });
  } catch (err) {
    console.error(`Failed to import ${file}:`, err);
  }
}

const outPath = path.join(outDir, "extensions.json");
fs.writeFileSync(outPath, JSON.stringify(result, null, 2));

console.log("\n=== Finished ===");
console.log("extensions.json generated at", outPath);
console.log("Total extensions:", result.length);
