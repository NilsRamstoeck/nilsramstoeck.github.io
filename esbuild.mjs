import { context } from 'esbuild';
import fs from 'node:fs/promises';
import { watch } from 'chokidar';
import { glob } from 'glob';
import { WorkerPlugin } from 'esbuild-worker-plugin';

//Clear dist before building
try {
  await fs.rm('./dist', { recursive: true });
} catch (_) { }

const WATCH = process.argv.includes('--watch');

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
      fs.cp('./src/public', './dist', { recursive: true });
    });
  }
};

const buildContext = await context({
  entryPoints: await glob('src/pages/**/*.ts{x,}'),
  plugins: [indexHtmlPlug, WorkerPlugin({ workerOutdir: 'worker' })],
  outdir: './dist',
  bundle: true,
  splitting: true,
  keepNames: true,
  minify: !WATCH,
  format: 'esm',
  platform: 'browser',
  define: WATCH ? undefined : {
    'process.env.NODE_ENV': "'production'",
  },
  alias: {
    'react': 'preact/compat'
  },
  loader: { '.svg': 'dataurl', '.ttf': 'file', '.css':'css' },
  external: ['*.png'],
  tsconfig: './tsconfig.json',
  logLevel: 'info'
});

try { await buildContext.rebuild(); } catch (_) { }

if (WATCH) {
  watch('./src/', {
    recursive: true,
    persistent: true
  })
    .on('all', async () => { try { await buildContext.rebuild(); } catch (_) { } });
}
else buildContext.dispose();
