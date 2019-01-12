const input = 'src';
const components = `${input}/_includes/components`;

// Components
const Container = require(`./${components}/Container.js`);

module.exports = function(config) {
  config.addPairedShortcode('Container', Container);

  return {
    dir: {
      input,
      output: 'dist'
    }
  };
};
