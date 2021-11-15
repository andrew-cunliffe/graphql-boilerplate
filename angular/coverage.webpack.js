const sourcePath = require('path').join(__dirname, 'src');

module.exports = {
  module: {
    rules: [
      {
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: [`${sourcePath}/app`, `${sourcePath}/environments`],
        exclude: [/node_modules|\.scss/]
      }
    ]
  }
};
