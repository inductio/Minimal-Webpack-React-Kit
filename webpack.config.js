const common = require('./webpack.common.js');
const dev = require('./webpack.dev.config.js');
const prod = require('./webpack.prod.config.js');
const isDev = process.env.NODE_ENV === 'development';
const { merge } = require('webpack-merge');

module.exports = merge(common, isDev ? dev : prod);
