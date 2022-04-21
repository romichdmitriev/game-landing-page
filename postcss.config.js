const autoprefixer = require('autoprefixer');

module.exports = (cfg) => {
  const dev = cfg.env === 'development';
  const scss = cfg.file.extname === '.scss';

  return {
    ident: 'postcss',
    map: dev ? { inline: false } : false,
    parser: scss ? 'postcss-scss' : false,
    plugins: {
      'postcss-import': {},
      'postcss-nesting': {},
      'postcss-preset-env': {
        stage: 3,
        features: {
          'custom-media-queries': true,
        },
      },
      autoprefixer,
    },
  };
};
