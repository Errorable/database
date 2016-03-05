# errorable-database [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> database errors for errorable

## Installation

```sh
$ npm install --save errorable-database
```

## Usage

```js
var errorable = require('errorable');
var errorableDatabase = require('errorable-database');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableDatabase, 'zh-CN').errors;
var enUsErrors = new Generator(errorableDatabase, 'en-US').errors;

console.log(cnErrors.Error.message); //数据库错误！
console.log(enUsErrors.Error.message); //Database Error!

```
## License

MIT © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/errorable-database.svg
[npm-url]: https://npmjs.org/package/errorable-database
[travis-image]: https://travis-ci.org/Errorable/database.svg?branch=master
[travis-url]: https://travis-ci.org/Errorable/database
[daviddm-image]: https://david-dm.org/Errorable/database.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Errorable/database
[coveralls-image]: https://coveralls.io/repos/Errorable/database/badge.svg
[coveralls-url]: https://coveralls.io/r/Errorable/database
