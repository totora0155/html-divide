# HTML divide

## Install

```
npm i html-divide
```

## Usage

For example, Create index.html such as the following

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

  <!-- divide:head -->
  <p>head</p>
  <!-- enddivide -->

  <!-- divide:body -->
  <p>body</p>
  <!-- enddivide -->

</body>
</html>
```

Use this way

```js
'use strict';

const divide = require('html-divide'),
  fs = require('fs');

fs.readFile('path/to/index.html', 'utf-8', (err, content) => {
  const data = divide(content);
  try {
    assert(data.head.trim() === '<p>head</p>', 'head isnt <p>head</p>');
    assert(data.body.trim() === '<p>body</p>', 'body isnt <p>body</p>');
  } catch(err) {
    console.log(err);
  }
});

```

Output

```js
{ head: '\n  <p>head</p>\n  ', body: '\n  <p>body</p>\n  ' }
```

## Change log

- 0.1.0  
  Not included fs.readFile
