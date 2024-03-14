const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: {
    index: './src/index.js',
  },

  devtool: 'inline-source-map',
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        type: 'asset/resource',
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  output: {
    filename: '[name].bundle.js', //Now adjust the config. We'll be adding our src/print.js as a new entry point (print) and we'll change the output as well, so that it will dynamically generate bundle names, based on the entry point names:
    path: path.resolve(__dirname, 'dist'),
    clean: true, //automatically cleaning up the /dist folder, so that only used files will be generated
  },

  watch: true,
};