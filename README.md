# node-markdown-parser-performance

Node.js Markdown Parser Performance Comparison. **Note that this comparison only focuses on [CommonMark](http://commonmark.org/) or [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) (which is a based on the CommonMark spec) libraries.**

## Running benchmarks
```sh
yarn
yarn run benchmark
```

## Results

2.8 GHz Intel Core i7, Node.js v9.11.1, macOS 10.13 High Sierra.
```
markdown-it ^8.4.0  x 78.79 ops/sec ±11.00% (63 runs sampled)
commonmark  ^0.28.1 x 65.59 ops/sec ±7.87% (67 runs sampled)
remarkable  ^1.7.1  x 159   ops/sec ±1.68% (77 runs sampled)
remark      ^8.0.0  x 5.88  ops/sec ±5.92% (32 runs sampled)
```

## Test file

The test file is a copy of this [markdown file](https://github.com/airbnb/javascript/blob/master/README.md).
