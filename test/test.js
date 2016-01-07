'use strict';

const divide = require('..'),
  assert = require('assert');

divide('test/test.html', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(data);
  try {
    assert(data.head.trim() === '<p>head</p>', 'head isnt <p>head</p>');
    assert(data.body.trim() === '<p>body</p>', 'body isnt <p>body</p>');
  }
  catch(err) {
    console.log(err);
  }
});
