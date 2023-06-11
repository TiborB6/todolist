const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, 'src/index.html'),
        }),
    ],   
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],  
    }
}