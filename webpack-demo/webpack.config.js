const path = require('path');//创建连接

module.exports = {//导出模块
  entry: './src/index.js',//入口文件
  output: {//出口文件
    filename: 'bundle.js',//出口文件名
    path: path.resolve(__dirname, 'dist')//指定出口文件路径
  },
  module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
            test:/\.(jpg|png|gif|svg)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test:/\.(woff|woff2|eof|ttf|otf)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test:/\.xml$/,
            use:[
                'xml-loader'
            ]
        }
        ]
    }
};