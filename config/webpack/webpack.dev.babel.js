import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';
import path from 'path';

import paths from './paths';

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js'
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Jarvis({
      port: 1337
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.tsx'],
    alias: {
      'HELIGRAM-CONFIG': path.resolve(__dirname, '../../src/config')
    }
  },
  devtool: 'eval-source-map'
};
