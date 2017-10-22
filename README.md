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

## Test file
The test file is a copy of this [markdown file](https://github.com/airbnb/javascript/blob/master/README.md).

## Run tests
```sh
# npm
npm install
npm run bench
# yarn
yarn
yarn run bench
```
