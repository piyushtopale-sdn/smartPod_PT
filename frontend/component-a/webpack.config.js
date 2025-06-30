const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    output: {
        publicPath: 'auto',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'componentA',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App',
                './Login': './src/Login',
                './Register': './src/Register',
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: '^18.0.0' },
                'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' },
                'react-router-dom': { singleton: true, eager: true },
                redux: { singleton: true },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
