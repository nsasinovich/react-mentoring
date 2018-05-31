const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const { mode } = options;

    return {
        entry: './src/index.js',

        output: {
            path: `${__dirname}/public`,
            filename: 'bundle.js',
            publicPath: '/',
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    loader: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(ttf|eot|svg|woff|png|jpg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]',
                    },
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'App',
                hash: true,
                template: path.resolve(__dirname, './src/index.html'),
            }),
        ],

        watch: mode === 'development',
        watchOptions: {
            aggregateTimeout: 300,
        },

        devtool: mode === 'development' ? 'source-map' : '',
        devServer: {
            contentBase: './public',
            compress: true,
            open: true,
        },

        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },

        optimization: mode === 'production' ? {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    uglifyOptions: {
                        compress: false,
                        ecma: 6,
                        mangle: true,
                    },
                    sourceMap: true,
                }),
            ],
        } : {},
    };
};

