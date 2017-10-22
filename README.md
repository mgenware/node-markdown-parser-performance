# node-markdown-parser-performance

Node.js Markdown Parser Performance Comparison

## Results

2.8 GHz Intel Core i7, Node.js v8.7, macOS 10.13 High Sierra.

### Libraries with default configuration

```sh
# npm
npm install
npm run bench_default
# yarn
yarn
yarn run bench_default
```

Results:
```
markdown    ^0.5.0  x 52.60 ops/sec ±1.21% (65 runs sampled)
markdown-it ^8.4.0  x 75.03 ops/sec ±8.44% (67 runs sampled)
showdown    ^1.7.6  x 5.63  ops/sec ±1.27% (19 runs sampled)
commonmark  ^0.28.1 x 69.10 ops/sec ±1.46% (68 runs sampled)
remarkable  ^1.7.1  x 141   ops/sec ±1.85% (76 runs sampled)
marked      ^0.3.6  x 89.43 ops/sec ±0.70% (72 runs sampled)
remark      ^8.0.0  x 6.59  ops/sec ±5.32% (35 runs sampled)
```

### Libraries with CommonMark configuration

```sh
# npm
npm install
npm run bench_commonmark
# yarn
yarn
yarn run bench_commonmark
```

Results:
```
markdown-it ^8.4.0  x 78.79 ops/sec ±11.00% (63 runs sampled)
commonmark  ^0.28.1 x 65.59 ops/sec ±7.87% (67 runs sampled)
remarkable  ^1.7.1  x 159   ops/sec ±1.68% (77 runs sampled)
remark      ^8.0.0  x 5.88  ops/sec ±5.92% (32 runs sampled)
```

## Test file

The test file is a copy of this [markdown file](https://github.com/airbnb/javascript/blob/master/README.md).
