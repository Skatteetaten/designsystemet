import { readFileSync } from 'fs';
import { dirname, join } from 'path';

export function handleVersion(): void {
  const __dirname = dirname(new URL(import.meta.url).pathname);
  const packagePath = join(__dirname, 'package.json');
  const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
  console.info(pkg.version);
}
