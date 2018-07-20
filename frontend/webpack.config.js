const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, '/src/index.js')],
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '/src'),
                exclude: path.join(__dirname, '/node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-object-rest-spread', 'babel-plugin-transform-class-properties']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true                       
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                  publicPath: '/public',
                  name: '[name].[ext]',
                  limit: 10000,
                }
            }
        ]
    },
    resolve: {
        alias: {
            '~routes' : path.join(__dirname, '/src/routes/'),
            '~containers' : path.join(__dirname, '/src/containers/'),
            '~components' : path.join(__dirname, '/src/components/')
        }
    }
}