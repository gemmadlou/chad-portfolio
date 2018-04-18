const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

let plugins = [];

if (process.env.environment !== 'production') {
    plugins.push(new Dotenv);
}

if (process.env.environment === 'production') {
    plugins.push(new UglifyJsPlugin);
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
              environment: JSON.stringify(process.env.environment),
              CONTENTFUL_ACCESS_TOKEN: JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
              CONTENTFUL_SPACE_ID: JSON.stringify(process.env.CONTENTFUL_SPACE_ID)
            }
        })
    );
}

module.exports = {
    watch: process.env.environment !== 'production',
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'source-map',
    entry: [
        "./src/js/app.js",
        "./src/scss/style.scss"
    ],
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "app.js"
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ["env"]
                   }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react"]
                    }
                 }
            }
       ]
    }
}