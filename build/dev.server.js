/**
 * Created by 46607 on 2018/1/15.
 */
const app = require('express')(),
    hotMiddleware = require('webpack-hot-middleware'),
    devMiddleware = require('webpack-dev-middleware'),
    devConfig = require('./dev.config'),
    webpack = require('webpack');

const compiler = webpack(devConfig);
app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler, {}));
app.listen(process.evn.dev);