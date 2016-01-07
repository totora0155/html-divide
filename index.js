'use strict';

const fs = require('fs'),
  HtmlDivider = require('./modules/html-divider');

module.exports = (filepath, cb) => {
  readHtml(filepath)
    .then(html => {
      const divider = new HtmlDivider(html),
        result = divider.divide();
      cb(null, result);
    })
    .catch(err => {
      cb(err, null);
    });
}


function readHtml(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}
