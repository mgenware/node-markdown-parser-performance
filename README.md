# node-markdown-parser-performance

Node.js Markdown Parser Performance Comparison. 

**Note that this comparison only focuses on [CommonMark](http://commonmark.org/) or [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) (which is based on the CommonMark spec) libraries.**

## Running benchmarks
```sh
yarn
yarn benchmark
```

## Results

2.8 GHz Intel Core i7, Node.js v9.11.1, macOS 10.13 High Sierra.
```
markdown-it   ^8.4.1  x 111   ops/sec ±3.05% (73 runs sampled)
commonmark    ^0.28.1 x 85.77 ops/sec ±0.92% (71 runs sampled)
cmark-gfm-js  ^1.1.5  x 106   ops/sec ±0.75% (74 runs sampled)
```

Xeon(R) CPU E31220 @ 3.10GHz, Node.js v10.0.0, CentOS Linux release 7.4.1708 (Core)
```
markdown-it   ^8.4.1  x 76.50 ops/sec ±9.87% (67 runs sampled)
commonmark    ^0.28.1 x 70.82 ops/sec ±3.18% (71 runs sampled)
cmark-gfm-js  ^1.1.5  x 77.99 ops/sec ±5.03% (66 runs sampled)
```

## Test file

The test file is a copy of this [markdown file](https://github.com/airbnb/javascript/blob/master/README.md).

## Why are some libraries not included?
* Not Commonmark-compliant.
* Not actively maintained.
