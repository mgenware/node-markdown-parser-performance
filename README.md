# node-markdown-parser-performance
Node.js Markdown Parser Performance Comparison

## Results
2.8 GHz Intel Core i7, Node.js v8.7, macOS 10.13 High Sierra.
```
markdown     ^0.5.0  x 68.05 ops/sec ±1.50% (70 runs sampled)
markdown-it  ^8.4.0  x 120   ops/sec ±1.27% (78 runs sampled)
showdown     ^1.7.6  x 7.23  ops/sec ±2.19% (23 runs sampled)
commonmark   ^0.28.1 x 89.50 ops/sec ±1.06% (76 runs sampled)
remarkable   ^1.7.1  x 194   ops/sec ±1.46% (83 runs sampled)
remark       ^8.0.0  x 9.19  ops/sec ±4.10% (47 runs sampled)
```

## Test file
The test file is a copy of this [markdown file](https://github.com/airbnb/javascript/blob/master/README.md).

## Run tests
```sh
# npm
npm install
npm run bench_default
# yarn
yarn
yarn run bench_default
```
