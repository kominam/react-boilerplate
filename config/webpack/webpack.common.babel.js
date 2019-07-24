import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from './paths';
import rules from './rules';

export default {
  entry: paths.entryPath,
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css', '.jsx', '.tsx'],
    alias: {
      '@components': paths.componentFolder,
      '@pages': paths.pageFolder,
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
