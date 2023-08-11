import { context, build } from 'esbuild';
import fs from 'node:fs/promises';
import { watch } from 'chokidar';
import { glob } from 'glob';

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

/** @type import('esbuild').Plugin */
const workerPlugin = {
  name: 'WorkerPlugin',
  setup: (pluginBuild) => {
    pluginBuild.onLoad({ filter: /.*\.worker\.js$/, namespace: 'worker' }, (opt) => {
      console.log(opt);
      return { contents: `export default (opts) => new Worker('${opt.path}', opts)` };
    });

    pluginBuild.onResolve({ filter: /.*\.worker\.js$/ }, async ({ path, kind }) => {
      if (kind != 'import-statement') throw new Error('Workers need to be imported using import statements');
      const outfile = '/workers/' + path.split('/').reverse()[0];
      await build({
        entryPoints: [path],
        outfile: pluginBuild.initialOptions.outdir + outfile,
        bundle: true,
        format: 'iife'
      });
      return { path: outfile, namespace: 'worker' };
    });

  }
};

const buildContext = await context({
  entryPoints: await glob('src/pages/**/*.ts{x,}'),
  plugins: [indexHtmlPlug, workerPlugin],
  outdir: './dist',
  splitting: true,
  keepNames: true,
  minify: !WATCH,
  bundle: true,
  format: 'esm',
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
