var webpack = require('webpack');
var path = require('path');

module.exports = {
    // 程式的入口
    entry: './app/index.js',
    // 要輸出到哪裡
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // ProvidePlugin
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],

    // 載入哪些類型的檔案 
    module: {

        // loader:指定要載入的loader
        loaders: [
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] }, // to load css
            { test: /\.(png|jpg)$/, loader: 'url-loader' } // to laod img
        ],
    }
}
