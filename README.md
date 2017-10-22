# node-markdown-parser-performance
Node.js Markdown Parser Performance Comparison

## Results
2.8 GHz Intel Core i7, Node.js v8.7, macOS 10.13 High Sierra.
```
markdown ^0.5.0      x 69.33  ops/sec ±0.95% (71 runs sampled)
markdown-it ^8.4.0   x 123    ops/sec ±2.08% (79 runs sampled)
showdown ^1.7.6      x 7.20   ops/sec ±1.72% (23 runs sampled)
commonmark ^0.28.1   x 89.40  ops/sec ±1.03% (76 runs sampled)
remarkable ^1.7.1    x 218    ops/sec ±0.72% (85 runs sampled)
remark ^8.0.0        x 9.35   ops/sec ±3.71% (48 runs sampled)
Fastest is remarkable ^1.7.1
```

## Run tests
```sh
# npm
npm install
npm run bench
# yarn
yarn
yarn run bench
```

## Test code
```javascript
'use strict';

const { Benchmark } = require('benchmark');

const suite = new Benchmark.Suite();
const fs = require('fs');
const path = require('path');
const PKG = require('../package.json');

// markdown
const { markdown } = require('markdown');
// markdown-it
const markdownIt = require('markdown-it')();
// showdown
const _showdown = require('showdown');
const showdown = new _showdown.Converter();
// commonmark
const _commonmark = require('commonmark');
const cmReader = new _commonmark.Parser();
const cmWriter = new _commonmark.HtmlRenderer();
// remarkable
const _Remarkable = require('remarkable');
const remarkable = new _Remarkable('commonmark');
// remark
const remark = require('remark');
const remarkHTML = require('remark-html');

const MD = fs.readFileSync(path.join(__dirname, './TEST_FILE.md'), 'utf8');

function getName(pkg) {
  const version = PKG.dependencies[pkg];
  return `${pkg} ${version}`;
}

// add tests
suite.add(getName('markdown'), () => {
  markdown.toHTML(MD);
})
  .add(getName('markdown-it'), () => {
    markdownIt.render(MD);
  })
  .add(getName('showdown'), () => {
    showdown.makeHtml(MD);
  })
  .add(getName('commonmark'), () => {
    cmWriter.render(cmReader.parse(MD));
  })
  .add(getName('remarkable'), () => {
    remarkable.render(MD);
  })
  .add(getName('remark'), {
    defer: true,
    fn: (deferred) => {
      remark()
        .use(remarkHTML)
        .process(MD, (err, file) => {
          String(file);
          deferred.resolve();
        });
    },
  })
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function handler() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });

```