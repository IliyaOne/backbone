const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    devServer: {
           hot: false
},
    entry: { main: './src/js/main.js' },
    output: {
        path: path.join(__dirname, './files')
    },

    resolve: {
        alias: {
            application: path.resolve(__dirname, 'src/js/application'),
            "views/main-view": path.resolve(__dirname, 'src/js/views/main-view')
        },
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: []
                }
            }
        },
            {
            test: /\.html$/,
            use: [ {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        },
            {
                test: /\.css$/,
                use: [          {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WriteFilePlugin(),
        new MiniCssExtractPlugin(),
    ]
};
