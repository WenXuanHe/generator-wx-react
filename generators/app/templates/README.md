![](/assets/logo_a7f0d3c.png)

# 一灯学堂Vue Pc端脚手架

[![NPM version](https://badge.fury.io/js/yog.png)](http://badge.fury.io/js/yog) [![Dependencies Status](https://david-dm.org/fex-team/yog.png)](https://david-dm.org/fex-team/yog)

An express-based Node.js web application bootstrapping module, extends kraken-js.

### install

on Linux/Unix

```bash
$ npm install yog
```

on Windows

open a `cmd`

```bash
npm install yog
```

### use

    .
    ├── app.js
    ├── config  # some `map.json` and `config.json`
    ├── controllers
    ├── lib
    ├── models
    ├── public # static
    └── views # views or template

_app.js_

```js
var yog = require('yog');
var app = require('express')();
var PORT = 4000;

app.use(yog()).listen(PORT, function () {
    console.log('Listening *:' + PORT);
});
```

detail see project [fex-team/yog-app](https://github.com/fex-team/yog-app)

```js
var s = 123;
function test(){
   alert(s);
}
```

### others

* [kraken-js](https://github.com/krakenjs/kraken-js)
* [swig](https://github.com/paularmstrong/swig/)
* [yog-view](https://github.com/fex-team/yog-view)
* [yog-bigpipe](https://github.com/fex-team/yog-bigpipe)
* [yog-swig](https://github.com/fex-team/yog-swig)



