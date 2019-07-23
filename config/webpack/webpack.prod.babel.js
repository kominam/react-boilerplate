import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
      root: paths.root
    }),
    new MiniCssExtractPlugin({
      filename: `${paths.cssFolder}/[name].[hash].css`,
      chunkFilename: '[id].[hash].css'
    })
  ],
  devtool: 'source-map'
};
