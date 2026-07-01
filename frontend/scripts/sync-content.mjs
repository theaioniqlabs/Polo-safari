import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(__dirname, "..");
const monorepoContent = path.join(frontendRoot, "..", "docs", "content");
const localContent = path.join(frontendRoot, "content");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(monorepoContent)) {
  copyDir(monorepoContent, localContent);
  console.log(`Synced content from ${monorepoContent} -> ${localContent}`);
} else if (fs.existsSync(localContent)) {
  console.log(`Using existing bundled content at ${localContent}`);
} else {
  console.error("No content source found for build.");
  process.exit(1);
}
