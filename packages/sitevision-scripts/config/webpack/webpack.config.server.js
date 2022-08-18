const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { getExternals, getServerOptimization } = require('./utils');
const babel = require('@babel/core');
const properties = require('../../util/properties');
const {
  getJsModuleLoader,
  getBabelLoader,
  getSvgLoader,
  getImageLoader,
  getCssLoader,
  getFontLoader,
} = require('./webpack.loaders');

const getServerConfig = ({
  serverSideOnly,
  cwd,
  indexEntry,
  outputPath,
  cssPrefix,
}) => {
  const manifest = properties.getManifest();
  const appId = manifest.id;
  const appVersion = manifest.version;
  const publicPath = `/webapp-files/${appId}/${appVersion}/`;

  return {
    mode: 'production',
    devtool: undefined,
    entry: indexEntry,
    output: {
      path: outputPath,
      filename: 'index.js',
      iife: true,
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            noErrorOnMissing: true,
            info: { minimized: true },
            from: './src/config/',
            to: './config',
            transform: (content, absolutePath) => {
              const { ext: extension } = path.parse(absolutePath);

              if (extension === '.js') {
                const result = babel.transformSync(content, {
                  compact: false,
                  presets: ['@sitevision/babel-preset-react-server'],
                });
                return result.code;
              }

              return content;
            },
          },
          {
            from: path.join(cwd, 'manifest.json'),
          },
          {
            noErrorOnMissing: true,
            from: path.join(cwd, 'appDataDefaults.json'),
          },
          {
            noErrorOnMissing: true,
            from: path.join(cwd, 'i18n'),
            to: './i18n',
          },
          {
            noErrorOnMissing: true,
            from: path.join(cwd, 'resource'),
            to: './resource',
          },
        ],
      }),
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
    module: {
      rules: [
        getJsModuleLoader(),
        getBabelLoader(),
        getCssLoader(cssPrefix, serverSideOnly),
        getImageLoader(),
        getSvgLoader(),
        getFontLoader(publicPath),
      ],
    },
    externals: [getExternals('commonjs')],
    optimization: getServerOptimization(),
  };
};

module.exports = {
  getServerConfig,
};
