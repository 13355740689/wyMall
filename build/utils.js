const path = require('path')
const config = require('./config')
/*
    返回绝对路径
 */
exports.resolve = function(dir) {
    return path.join(__dirname, '..', dir)
  }

/*
    静态文件存放路径
 */
exports.assetsPath = function(_path) {
    return path.join(config.assetsRoot, _path).replace(/\\/g, '/')
  }