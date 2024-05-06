const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const packageJson = require('./package.json');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const publicPath = isProduction
    ? 'https://tone4hook.github.io/currency-vista/'
    : 'http://localhost:8080/';

  const currency_converter = isProduction
    ? 'currency_converter@https://tone4hook.github.io/currency-converter/remoteEntry.js'
    : 'currency_converter@http://localhost:8081/remoteEntry.js';

  const vista_dictionary = isProduction
    ? 'vista_dictionary@https://tone4hook.github.io/vista-dictionary/remoteEntry.js'
    : 'vista_dictionary@http://localhost:8082/remoteEntry.js';

  return {
    output: {
      uniqueName: 'currency_vista',
      publicPath,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.vue', '.jsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },

    optimization: {
      runtimeChunk: 'single',
    },

    devServer: {
      port: 8080,
      historyApiFallback: true,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
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
          currency_converter,
          vista_dictionary,
        },
        exposes: {
          './ErrorStore': './src/stores/error',
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: packageJson.dependencies.vue,
          },
          'vue-router': {
            singleton: true,
            requiredVersion: packageJson.dependencies['vue-router'],
          },
          pinia: {
            singleton: true,
            requiredVersion: packageJson.dependencies.pinia,
          },
          bootstrap: packageJson.dependencies.bootstrap,
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        favicon: './src/assets/favicon.ico',
      }),
      new Dotenv(),
    ],
  };
};
