let autoprefixer = require('autoprefixer')
let px2rem = require('postcss-px2rem')
module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 20 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }),
        px2rem({ remUnit: 75 }),
    ]
}