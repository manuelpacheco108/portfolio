// One-off asset optimizer: shrinks the logo to web sizes.
// Original full-size PNG is preserved in git history (commit 71e5683).
import sharp from "sharp";
import { rename, stat } from "node:fs/promises";

const SRC = "public/manuelIcon.png";
const TMP = "public/manuelIcon.tmp.png";

const before = (await stat(SRC)).size;
await sharp(SRC).resize(512, 512, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(TMP);
await rename(TMP, SRC);
const after = (await stat(SRC)).size;

console.log(`logo: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
