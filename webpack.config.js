let devMode = process.env.NODE_ENV !== 'production'

if(devMode) {
    module.exports = require('./webpack.dev.config.js')
} else {
    module.exports = require('./webpack.prod.config.js')
}