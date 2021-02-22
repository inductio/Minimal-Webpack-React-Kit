console.log(process.env.NODE_ENV);

module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack.dev.config.js')
    : require('./webpack.prod.config.js');
