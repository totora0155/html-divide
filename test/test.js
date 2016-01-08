'use strict';

const divide = require('..'),
  fs = require('fs'),
  assert = require('assert');

fs.readFile('./test/test.html', 'utf-8', (err, content) => {
  const data = divide(content);
  try {
    assert(data.head.trim() === '<p>head</p>', 'head isnt <p>head</p>');
    assert(data.body.trim() === '<p>body</p>', 'body isnt <p>body</p>');
  } catch(err) {
    console.log(err);
  }
});
