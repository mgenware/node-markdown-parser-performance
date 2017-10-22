'use strict';

const { Benchmark } = require('benchmark');

const suite = new Benchmark.Suite();
const fs = require('fs');
const path = require('path');
const PKG = require('../package.json');

// markdown-it
const markdownIt = require('markdown-it')('commonmark');
// commonmark
const _commonmark = require('commonmark');
const cmReader = new _commonmark.Parser();
const cmWriter = new _commonmark.HtmlRenderer();
// remarkable
const _Remarkable = require('remarkable');
const remarkable = new _Remarkable('commonmark');
// remark
const unified = require('unified');
const remarkParse = require('remark-parse');
const remarkHtml = require('remark-html');

const MD = fs.readFileSync(path.join(__dirname, './TEST_FILE.md'), 'utf8');

function getName(pkg) {
  const version = PKG.dependencies[pkg];
  return `${pkg} ${version}`;
}

// add tests
suite.add(getName('markdown-it'), () => {
  markdownIt.render(MD);
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
      unified()
        .use(remarkParse, { commonmark: true })
        .use(remarkHtml)
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
