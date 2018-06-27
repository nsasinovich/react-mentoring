const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        filename: 'js/[name].js',
        path: path.resolve(`${__dirname}/public`),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devtool: isDevMod ? 'source-map' : '',

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(ttf|eot|svg|woff|png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]',
                },
            },
        ],
    },

    plugins: [
        isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    ],
};
