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

Use this

```js
'use strict';

const divide = require('..'),
  assert = require('assert');

divide('.index.html', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(data);  // output
});
```

Output

```js
{ head: '\n  <p>head</p>\n  ', body: '\n  <p>body</p>\n  ' }
```
