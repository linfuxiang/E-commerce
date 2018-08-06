let autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 20 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        })
    ]
}