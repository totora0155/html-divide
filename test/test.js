'use strict';

const divide = require('..'),
  fs = require('fs'),
  assert = require('assert');

fs.readFile('./test/test.html', 'utf-8', (err, content) => {
  const data = divide(content);
  try {
    assert(data.head === '<p>head</p>', 'head isnt <p>head</p>');
    assert(data.body === '<p>body</p>', 'body isnt <p>body</p>');
    assert(data.content === '<p>content1</p>\n<p>content2</p>',
      'content isnt <p>content1</p>\n<p>content2</p>');
  } catch(err) {
    console.log(err);
  }
  console.log(data);
});
