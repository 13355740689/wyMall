const glob = require('glob')
const path = require('path')
const fs = require('fs')
const entryFile = glob.sync(path.join(__dirname,'../src/module/*'))

const PATH_SEP = path.sep

// console.log(entryFile)

const HtmlWebpackPlugin=require('html-webpack-plugin');

const entry = {}
const htmlWebpackPlugins = []





entryFile.forEach( file => {
  let walk = (_path) => {
    
    let stats = fs.statSync(_path)
    if (stats.isDirectory()) {
      console.log('directory:' + _path)
      console.log(glob.sync(path.join(_path,'/*')))
      glob.sync(path.join(_path,'/*')).forEach( file => {
        walk(file)
      })
    } else {
      let ext = path.extname(_path)
      if(ext === '.js'){
        console.log('js文件' + _path)
        const filename = path.basename(_path.split('/').pop(), '.js')
        console.log(filename)
        entry[filename] = [_path];
        if(filename === "main"){
          htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
              title: filename,
              chunks:['vendors','commons',filename],
              template: path.resolve(__dirname,`../src/module/${filename}.html`),
              filename: `${filename}.html`
            })
          )
        }else{
          htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
              title: filename,
              chunks:['vendors','commons',filename],
              // template: path.resolve(__dirname,`../src/module/${filename}/${filename}.html`),
              template: path.resolve(__dirname,`../src/module/main.html`),
              filename: `${filename}.html`
            })
          )
        }
      }
    }
  }
  walk(file) 
  return
})


module.exports = {
  entry,
  plugins:htmlWebpackPlugins
}
