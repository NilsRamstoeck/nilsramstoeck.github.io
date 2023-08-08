import { context } from 'esbuild';
import fs from 'node:fs/promises';
import { watch } from 'chokidar';
import { glob } from 'glob';

const WATCH = process.argv.includes('--watch');

const htmlPlugin = {
  name: 'html-plug',
  setup(build) {
    build.onEnd(() => {
      fs.copyFileSync('./src/index.html', './dist/index.html');
    });
  }
};

const buildContext = await context({
  plugins: [htmlPlugin],
  entryPoints: ['src/main.ts'],
  outfile: './dist/main.js',
  minify: !WATCH,
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  define: WATCH ? undefined : {
    'process.env.NODE_ENV': "'production'",
  },
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
