const CleanCSS = require('clean-css');

const input = 'src';
const components = `${input}/_includes/components`;

// Components
const Container = require(`./${components}/Container.js`);

module.exports = function(config) {
  config.addFilter('cssmin', function(code) {
    return process.env.ELEVENTY_PRODUCTION
      ? new CleanCSS({}).minify(code).styles
      : code;
  });

  config.addPairedShortcode('Container', Container);

  return {
    dir: {
      input,
      output: 'dist'
    }
  };
};
