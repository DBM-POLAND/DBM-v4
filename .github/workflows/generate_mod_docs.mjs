import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// folder z extensions
const extensionsDir = path.join(process.cwd(), "bot/extensions");

// folder docelowy w repo
const outDir = path.join(process.cwd(), "docs/dbm");
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(extensionsDir).filter((f) => f.endsWith(".js"));

const result = [];

for (const file of files) {
  const module = await import(`file://${path.join(extensionsDir, file)}`);
  const name = module.name || file.replace(".js", "");
  const description = module.description || "";
  result.push({ name, description });
}

// plik wyjściowy
const outPath = path.join(outDir, "extensions.json");
await writeFile(outPath, JSON.stringify(result, null, 2));

console.log("extensions.json generated at", outPath);
