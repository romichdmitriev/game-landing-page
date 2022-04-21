const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const CSSExtractor = new MiniCssExtractPlugin({
  filename: 'styles/[name].css',
  chunkFilename: 'styles/[id].css',
});

const htmlPages = [...glob.sync('./src/pages/*.html')].map(
  (htmlFile) =>
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.basename(htmlFile),
      template: path.resolve(`${__dirname}/src/pages/`, path.basename(htmlFile)),
    }),
);

const pugPages = [...glob.sync('./src/pages/**/*.pug')].map(
  (pugFile) =>
    new HtmlWebpackPlugin({
      filename: path.basename(pugFile.replace(/\.pug/, '.html')),
      template: path.resolve(`${__dirname}/src/pages/`, path.basename(pugFile)),
    }),
);

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, 'src'),
  entry: ['./js/index.js', './styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[id].[hash:8].js',
  },
  resolve: {
    extensions: ['.js', '.pug'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@utils': path.resolve(__dirname, 'src/js/utils/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@js': path.resolve(__dirname, 'src/js/'),
    },
  },
  optimization: {
    // chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true,
            self: true,
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader', 'svgo-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
        generator: {
          filename: '[path][name]-[hash][ext]',
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        type: 'asset',
        generator: {
          filename: '[path][name]-[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    CSSExtractor,
    new SpriteLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon'),
          to: path.resolve(__dirname, 'dist/assets/favicon'),
        },
        /* {
          from: path.resolve(__dirname, 'src/assets/files'),
          to: path.resolve(__dirname, 'dist/assets/files'),
        }, */
      ],
    }),
    ...pugPages,
    ...htmlPages,
  ],
};
