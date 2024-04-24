const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const packageJson = require('./package.json');

module.exports = () => ({
  output: {
    publicPath: 'http://localhost:8080/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.jsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'currency_vista',
      filename: 'remoteEntry.js',
      remotes: {
        currency_converter:
          'currency_converter@http://localhost:8081/remoteEntry.js',
        vista_dictionary:
          'vista_dictionary@http://localhost:8082/remoteEntry.js',
      },
      exposes: {},
      shared: packageJson.dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
    }),
    new Dotenv(),
  ],
});
