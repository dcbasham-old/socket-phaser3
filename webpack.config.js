const webpack = require('webpack');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
  ],
};
// other rules (from my fs-app-template):
//   {
//     test: /\.(gif|png|jpe?g|svg|xml)$/i,
//     use: 'file-loader',
//   },
//   {
//     test: [/\.vert$/, /\.frag$/],
//     use: 'raw-loader',
//   },
//   {
//     test: /\.css$/i,
//     use: ['style-loader', 'css-loader'],
//   },
