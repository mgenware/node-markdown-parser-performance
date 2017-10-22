'use strict';

const Benchmark = require('benchmark').Benchmark;

const suite = new Benchmark.Suite();
const fs = require('fs');
const PKG = require('../package.json');

// markdown
const markdown = require('markdown').markdown;
// markdown-it
const markdownIt = require('markdown-it')();
// showdown
const _showdown  = require('showdown');
const showdown = new _showdown.Converter();

const MD = fs.readFileSync('./TEST_FILE.md', 'utf8');

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
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function handler() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
