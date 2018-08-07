const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理输出文件夹

let devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: 'js/build.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.sass$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ' ./'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader?indentedSyntax',
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: {
                //     loaders: {
                //         // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                //         // the "scss" and "sass" values for the lang attribute to the right configs here.
                //         // other preprocessors should work out of the box, no loader config like this necessary.
                //         'scss': [
                //             'vue-style-loader',
                //             'css-loader',
                //             'sass-loader'
                //         ],
                //         'sass': [
                //             'vue-style-loader',
                //             'css-loader',
                //             'sass-loader?indentedSyntax'
                //         ]
                //     }
                //     // other vue-loader options go here
                // }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@src': path.resolve(__dirname, './src'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    performance: {
        // hints: "warning"
        hints: false
    },
    devtool: '#source-map',
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
    ],
}