require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

const { createPages, onCreateWebpackConfig } = require('./gatsby-node/index');

exports.createPages = createPages;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
