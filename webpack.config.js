const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    
    return [{
        entry: {
            app: ['babel-polyfill', 'react-hot-loader/patch', './src/index.jsx']
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? JSON.stringify('develope') : JSON.stringify('production')
              }),
        ].concat(isDevBuild ? [
            new HtmlWebpackPlugin({
                title: 'Development'
            }),
        ] : [
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('app.css')
        ]),
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: /src/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                babelrc: true,
                                presets: [
                                    ['env', { modules: false }],
                                    'react',
                                ]
                            }
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.styl$/,
                    use: isDevBuild
                        ? ['style-loader', 'css-loader', 'stylus-loader']
                        : ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'stylus-loader']
                        })
                },
            ]
        }
    }];
}