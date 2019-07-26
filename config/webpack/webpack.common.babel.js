import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

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
      '@utils': paths.utilFolder,
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
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /js/,
          handler: 'CacheFirst'
        },
        {
          urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
          handler: 'CacheFirst'
        },
        {
          urlPattern: /.*/,
          handler: 'NetworkFirst'
        }
      ]
    }),
    new WebpackPwaManifest({
      name: 'React Boilerplate',
      short_name: 'React Boil',
      description: 'Minimal React Boilerplate for starter',
      background_color: '#ffffff',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: 'src/images/appIcon_92x92.png',
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
};
