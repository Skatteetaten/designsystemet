import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

type PackageConfig = {
  // Package name as it appears in node_modules
  name: string;
  // Base directory within the package where source files are located
  sourceDir: string;
  // List of problematic file paths relative to sourceDir
  problemPaths: string[];
};
const PROBLEMATIC_PACKAGES: PackageConfig[] = [
  {
    name: 'playroom',
    sourceDir: 'src',
    problemPaths: [
      '/config.ts',
      'Playroom/CodeEditor/CodeMirror2.tsx',
      'Playroom/CodeEditor/keymaps/lines.ts',
      'Playroom/Playroom.tsx',
      'Playroom/Toolbar/Toolbar.tsx',
      'StoreContext/StoreContext.tsx',
      'utils/componentsToHints.ts',
      'utils/formatting.ts',
    ],
  },
];

async function addTsNoCheck(): Promise<void> {
  try {
    const rootNodeModules = join(process.cwd(), 'node_modules');

    for (const pkg of PROBLEMATIC_PACKAGES) {
      const packagePath = join(rootNodeModules, pkg.name, pkg.sourceDir);
      console.log(`Processing ${pkg.name} in ${packagePath}`);

      for (const problemPath of pkg.problemPaths) {
        const fullPath = join(packagePath, problemPath);

        try {
          const content = await readFile(fullPath, 'utf-8');

          if (!content.includes('// @ts-nocheck')) {
            const newContent = `// @ts-nocheck\n${content}`;
            await writeFile(fullPath, newContent);
            console.log(`Added @ts-nocheck to ${fullPath}`);
          } else {
            console.log(`@ts-nocheck already present in ${fullPath}`);
          }
        } catch (err: any) {
          if (err.code === 'ENOENT') {
            console.warn(`File not found: ${fullPath}`);
          } else {
            console.warn(`Could not process ${fullPath}:`, err);
          }
        }
      }
    }

    console.log('Successfully processed all packages');
  } catch (err) {
    console.error('Error processing files:', err);
    process.exit(1);
  }
}

void addTsNoCheck();
