const path = require('path');
const webpack = require('webpack');
const appConfig = require('./src/common/config');
const S3Plugin = require('webpack-s3-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = 'staging';

export default {
  devtool: 'source-map',

  entry: {
    main: './index.web.js',
  },
  node: {
    __dirname: true,
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[hash].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new webpack.DefinePlugin({
      APP_CONFIG: JSON.stringify(appConfig[NODE_ENV]),
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      filename: 'index.html',
    }),
    new S3Plugin({
      // s3Options are required
      s3Options: {
        accessKeyId: appConfig[NODE_ENV].AWS_ACCESS_KEY_ID,
        secretAccessKey: appConfig[NODE_ENV].AWS_SECRET_ACCESS_KEY,
        region: appConfig[NODE_ENV].AWS_REGION,
      },
      s3UploadOptions: {
        Bucket: appConfig[NODE_ENV].AWS_BUCKET,
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles'),
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime', 'babel-plugin-root-import'],
          presets: ['react-native-stage-0/decorator-support'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
};
