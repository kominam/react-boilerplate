import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';

import paths from './paths';

export default {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${paths.cssFolder}/[name].[hash].css`,
      chunkFilename: '[id].[hash].css'
    }),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /js/,
          handler: 'CacheFirst'
        },
        {
          urlPattern: new RegExp(
            '^https://fonts.(?:googleapis|gstatic).com/(.*)'
          ),
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
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('../../src/registerServiceWorker.js')
    })
  ],
  devtool: 'source-map'
};
