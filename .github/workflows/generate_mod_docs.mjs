import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extensionsDir = path.resolve(__dirname, "./../../bot/extensions");

const files = fs.readdirSync(extensionsDir).filter((f) => f.endsWith(".js"));

const result = [];

for (const file of files) {
  const filePath = path.join(extensionsDir, file);

  const module = await import(`file://${filePath}`);

  const name = module.name || file.replace(".js", "");
  const description = module.description || "";

  result.push({ name, description });
}

const outPath = path.resolve(__dirname, "../../docs/dbm/extensions.json");
await writeFile(outPath, JSON.stringify(result, null, 2));
console.log("extensions.json generated locally!");
