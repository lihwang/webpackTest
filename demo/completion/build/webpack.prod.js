const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    mode: "production",
    // devtool: 'cheap-module-source-map',
    plugins: [
        
    ],
    optimization:{
        minimizer:[new OptimizeCSSAssetsPlugin({})]
    },
    output:{
        filename: '[name].[contenthash].js',//[contenthash]文件内容进行变化，仅线上使用
        chunkFilename: '[name].[contenthash].js',
    },
}

module.exports=prodConfig;