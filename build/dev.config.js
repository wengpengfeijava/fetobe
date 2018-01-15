/**
 * Created by 46607 on 2018/1/15.
 */

const merge = require('webpack-merge');
const baseConfig = require('./base.config')

Object.keys(baseConfig.entry).forEach((entry) => {
    baseConfig.entry[entry] = ['./build/dev.client.js'].concat([baseConfig.entry[entry]])
})

module.exports = merge(baseConfig, {})