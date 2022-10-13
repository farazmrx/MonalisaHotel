const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

