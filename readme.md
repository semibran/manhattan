# manhattan
> Determines the [Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance) between two points in two-dimensional space

## install
```sh
npm install manhattan
```

## usage
```js
const manhattan = require('manhattan')
```

### `manhattan(a, b)`
Determines the Manhattan distance between points `a` and `b`, where a point is an object with the fields `x` and `y`.
```js
> manhattan({ x: 6, y: 6 }, { x: 5, y: 2 })
5
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
