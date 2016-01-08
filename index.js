'use strict';

const HtmlDivider = require('./modules/html-divider');

module.exports = (content) => {
  const divider = new HtmlDivider(content);
  return divider.divide();
};
