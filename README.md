# HTML divide

[![npm version](https://badge.fury.io/js/html-divide.svg)](https://badge.fury.io/js/html-divide)

HTML divide to object by comment block.

## Install

```
npm i html-divide
```

## Usage

For example, Create index.html such as the following

```html
<!-- divide:head -->
<p>head</p>
<!-- enddivide -->

<!-- divide:body -->
<p>body</p>
<!-- enddivide -->

```

Use this way

```js
'use strict';

const divide = require('html-divide'),
  fs = require('fs');

fs.readFile('path/to/index.html', 'utf-8', (err, content) => {
  const data = divide(content);
  console.log(data);  // output
});

```

Output

```js
{ head: '\n  <p>head</p>\n  ', body: '\n  <p>body</p>\n  ' }
```

## Change log

- 0.1.0  
  Not included fs.readFile
