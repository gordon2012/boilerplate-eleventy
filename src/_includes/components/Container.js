module.exports = (content = '', size) => {
  const style = size
    ? /*css*/ `
    max-width: ${size};
    margin: 0 auto;
  `
    : '';

  return /*html*/ `
  <div class="container" style="${style}">
    ${content}
  </div>
`;
};
