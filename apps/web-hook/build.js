// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './dist/index.js',
  platform: 'node',
  target: 'node14', // Specify your target environment
  external: ['express'], // Exclude dependencies from the bundle
}).catch(() => process.exit(1));
