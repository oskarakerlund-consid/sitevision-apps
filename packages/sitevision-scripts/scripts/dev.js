import path from 'path';
import spawn from 'cross-spawn';
import * as properties from '../util/properties.js';
import resolveBin from 'resolve-bin';
import webpack from 'webpack';
import { copyChunksToResources } from './util/copychunks.js';
import { getDirname } from '../util/dirname.js';

const __dirname = getDirname(import.meta.url);

const SITEVISION_SCRIPTS_PATH = path.resolve(
  __dirname,
  '..',
  'bin',
  'sitevision-scripts.js'
);

const SPAWN_PROPERTIES = {
  stdio: 'inherit',
};

(async function () {
  const manifest = properties.getManifest();
  if (manifest.bundled) {
    const { default: webpackConfig } = await import(
      '../config/webpack/webpack.config.js'
    );

    webpack(
      webpackConfig({
        dev: true,
        cssPrefix: manifest.id,
        restApp: properties.getAppType() === 'rest',
      })
    ).watch(
      {
        ignored: ['**/dist/**', '**/build/**', '**/node_modules/**'],
      },
      (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        copyChunksToResources(properties.BUILD_DIR_PATH);
        console.log(stats.toString({ colors: true }));

        spawn.sync('node', [SITEVISION_SCRIPTS_PATH, 'zip'], SPAWN_PROPERTIES);
        spawn.sync(
          'node',
          [SITEVISION_SCRIPTS_PATH, 'deploy', 'force'],
          SPAWN_PROPERTIES
        );
      }
    );
  } else {
    spawn(
      resolveBin.sync('nodemon'),
      [
        '--watch',
        properties.SRC_DIR_PATH,
        '-e',
        'js,html,css,less,json',
        SITEVISION_SCRIPTS_PATH,
        'build',
        'force-deploy',
      ],
      SPAWN_PROPERTIES
    );
  }
})();
