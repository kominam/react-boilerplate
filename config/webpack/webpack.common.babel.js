import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

import paths from './paths';
import rules from './rules';

module.exports = {
  entry: paths.entryPath,
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css', '.jsx', '.tsx'],
    alias: {
      'HELIGRAM-CONFIG': path.resolve(__dirname, '../../src/config')
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    })
  ]
};
