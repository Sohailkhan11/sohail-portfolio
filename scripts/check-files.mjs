// Runs automatically before `npm run dev` and `npm run build`.
import { existsSync } from 'node:fs';
const required = [
  'components/Portfolio.tsx', 'components/ui.tsx', 'components/Services.tsx', 'components/Projects.tsx',
  'components/Experience.tsx', 'components/Contact.tsx', 'lib/data.ts', 'app/layout.tsx', 'app/page.tsx',
  'app/globals.css', 'public/sohail.webp', 'tailwind.config.ts', 'postcss.config.mjs',
];
const missing = required.filter((f) => !existsSync(f));
if (missing.length) {
  console.error('\n✖ Project files are missing:\n  - ' + missing.join('\n  - '));
  console.error('\nExtract the FULL sohail-portfolio.zip into a new empty folder (do not copy single files), then run npm install again.\n');
  process.exit(1);
}
console.log('✔ All project files found.');
