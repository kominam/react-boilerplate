import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = [
  {
    test: /\.js(x)?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'file-loader'
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: ['url-loader?limit=10000', 'img-loader']
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
          reloadAll: true
        }
      },
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      {
        loader: 'sass-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }
];
