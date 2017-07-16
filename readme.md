# manhattan
> Calculate the [Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance) between two points

![Manhattan distance](diagram.png "skrrt")

This module exposes the function `distance(a, b)`, which determines the Manhattan distance between points `a` and `b`.
```js
> const distance = require('manhattan')
> distance([2, 5], [4, 8])
5
```
[![NPM](https://nodei.co/npm/manhattan.png?mini)](https://www.npmjs.com/package/manhattan)

## see also
- [`semibran/euclidean`](https://github.com/semibran/euclidean) - calculate Euclidean distance
- [`semibran/chebyshev`](https://github.com/semibran/chebyshev) - calculate Chebyshev distance
- [`semibran/vector`](https://github.com/semibran/vector) - more vector math
- [`kchapelier/von-neumann`](https://github.com/kchapelier/von-neumann) - find all points within a given Manhattan distance

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
