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
<p>content1</p>

<!-- divide:head -->
<p>head</p>
<!-- enddivide -->

<!-- divide:body -->
<p>body</p>
<!-- enddivide -->

<p>content2</p>

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
{ head: '<p>head</p>',
  body: '<p>body</p>',
  content: '<p>content1</p>\n<p>content2</p>' }
```

## Change log

- 0.1.2  
  Fix set null in `content` when `/^[\n\s]*$/`
- 0.1.1  
  Add `content` property that collection of non-comment block
- 0.1.0  
  Not included fs.readFile
