const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        open: true
    }
};
