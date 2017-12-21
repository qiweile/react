var path = require('path');

// wabpack下面用来处理HTML的插件
var htmlWebpackPlugin = require('html-webpack-plugin')
// 导出配置
module.exports = {
    // 入口文件
    entry:path.join(__dirname,'main.js'),
    // 出口文件
    output:{
        // 输出路径
        path:path.join(__dirname,'dist'),
        // 输出时的文件名
        filename:'bundle.js'
    },
    // 配置loader
    module:{
        rules:[
            { test:/\.css$/,use:['style-loader','css-loader']},                            
            //exclude:要去除的文件夹
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
        ]
    },
    // 插件的节点帮我们注入bundle.js到index.html并将我们
    // 生成的html自动注入到index.html的末尾
    plugins:[
        new htmlWebpackPlugin({
            // 指定用当前的插件处理哪个文件
            template:path.join(__dirname,'index.html'),
            // 处理这个文件生成一个文件名叫什么
            filename:'index.html'
        })
    ]
}