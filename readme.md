# is-postscript [![Build Status](https://travis-ci.org/arthurvr/is-postscript.svg?branch=master)](https://travis-ci.org/arthurvr/is-postscript)

> Check if a Buffer/Uint8Array is a postscript


## Installation

```
$ npm install --save is-postscript
```


## Usage

```js
const readChunk = require('read-chunk'); // npm install read-chunk
const isPostscript = require('is-postscript');
const buf = readChunk.sync('program.ps', 0, 2);

isPostscript(buf);
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
