let autoprefixer = require('autoprefixer')
let pxtorem = require('postcss-pxtorem')
// let borderwidth = require('postcss-border-width')
let border1px = require('./plugins/postcss-border1px')
let writesvg = require('postcss-write-svg')
module.exports = {
    plugins: [
        border1px(),
        writesvg(),
        // borderwidth({}),
        autoprefixer({
            browsers: ['last 20 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }),
        pxtorem({
            rootValue: 75,
            unitPrecision: 5, // rem小数位
            propList: ['*'], // 需要转化的属性
            selectorBlackList: [], // 类名黑名单
            replace: true,
            mediaQuery: false, // 允许在媒体查询中转化px
            minPixelValue: 12 // 需要转化的最小px值
        }),
    ]
}