const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src')
    },
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*']
  },
});

// https://github.com/jantimon/html-webpack-plugin/issues/218
// https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/
// https://github.com/ivarprudnikov/webpack-static-html-pages/tree/master/src
// https://github.com/erickzhao/static-html-webpack-boilerplate
