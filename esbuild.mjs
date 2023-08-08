import { context } from 'esbuild';
import fs from 'node:fs/promises';
import { watch } from 'chokidar';
import { glob } from 'glob';

//Clear dist before building
try {
  await fs.rm('./dist', { recursive: true });
} catch (_) { }

const WATCH = process.argv.includes('--watch');

// fs.cpSync('./src/public', './dist', { recursive: true });
/** @type import('esbuild').Plugin */
const indexHtmlPlug = {
  name: 'indexHtmlPlug',
  setup(pluginBuild) {
    pluginBuild.onEnd((result) => {
      const start = 'dist';
      const recursivelyAddIndexHtml = async (dir) => {
        const currentDir = await fs.readdir(dir, { withFileTypes: true });
        for (const item of currentDir) {
          if (item.name == 'index.js') {
            await fs.copyFile('src/index.html', `${dir}/index.html`);
          }
          if (item.isDirectory()) {
            recursivelyAddIndexHtml(`${dir}/${item.name}`);
          }
        }
      };
      recursivelyAddIndexHtml(start);
    });
  }
};

const buildContext = await context({
  entryPoints: await glob('src/pages/**/*.ts{x,}'),
  plugins: [indexHtmlPlug],
  outdir: './dist',
  splitting: true,
  keepNames: true,
  minify: !WATCH,
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  define: WATCH ? undefined : {
    'process.env.NODE_ENV': "'production'",
  },
  alias: {
    'react': 'preact/compat'
  },
  loader: { '.css': 'text', '.svg': 'dataurl' },
  tsconfig: './tsconfig.json',
  logLevel: 'info'
});

buildContext.rebuild();

if (WATCH) {
  watch('./src/', {
    recursive: true
  })
    .on('all', () => buildContext.rebuild());
}
else buildContext.dispose();
