var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV || 'development';
var ROOT_PATH = path.resolve(__dirname);

var appConfig = require('./src/common/config');
var configPlugin = new webpack.DefinePlugin({ APP_CONFIG: JSON.stringify(appConfig[NODE_ENV]) });

module.exports = {
    entry: {
        main: './index.web.js',
    },
    node: {
        __dirname: true
    },
    devtool: 'source-map',
    debug: true,
    plugins: [configPlugin],
    module: {
        loaders: [

            {
                test: /\.js?$/,
                exclude: /node_modules/,
                cacheable: true,
                loader: 'babel',
                query: {
                    plugins: [
                      "syntax-flow",
                      "transform-flow-strip-types",
                      "babel-plugin-root-import",
                      "syntax-async-functions",
                      "transform-regenerator"
                    ],
                    presets:  ["react-native-stage-0/decorator-support"],
                    retainLines: true,
                    cacheDirectory: true
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-=&.]+)?$/,
                loader : 'file-loader',
                include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader"},
        ],
    },
    resolve: {
        alias: {
            'react-native': 'react-native-web',
            'react-router-native': 'react-router'
        },
    },
    devServer: {
        historyApiFallback: true,
        inline:true,
        port: 9000
    },
};
