const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const apiMocker = require('webpack-api-mocker')

let devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            //需要一个全局路径
                            resources: [path.resolve(__dirname, './src/styles/base.scss')]
                        }
                    },
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader?indentedSyntax',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            //需要一个全局路径
                            resources: [path.resolve(__dirname, './src/styles/base.scss')]
                        }
                    },
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
    devServer: {
        // contentBase: path.join(__dirname, "dist"), // 静态资源路径
        // compress: true, // 使用gzip压缩
        port: 9999,
        historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
        noInfo: true, // 每次重新构建时，清除上次的webpack输出的信息
        overlay: true, // 在浏览器全屏输出错误
        // openPage: '',
        before(app) {
            apiMocker(app, path.resolve('./src/mocker/index.js'))
        },
    },
    performance: {
        // hints: "warning"
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new VueLoaderPlugin(),
    ],
}