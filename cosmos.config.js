const path = require('path');

const sassLoader = {
  loader: require.resolve('sass-loader'),
  options: {
    sourceMap: true,
  },
};

module.exports.webpack = function (webpackConfig) {
  webpackConfig.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader'
  });
  webpackConfig.module.rules.push({
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  });
  webpackConfig.module.rules.push({
    "test"   : /\.scss$/,
    "use": [
      {
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader", // translates CSS into CommonJS
        options: {
          "sourceMap": false,
          "camelCase": "dashesOnly",
          "localIdentName": "[name]--[local]--[hash:base64:5]",
          "modules": true,
          "importLoaders": 2
        }
      },
      {
        loader: "sass-loader" // compiles Sass to CSS
      },
      {
        loader: `postcss-loader`,
        options: {
          sourceMap: true,
          sourceMapContents: true
       }
      },
      ]
  });
  return webpackConfig;
}