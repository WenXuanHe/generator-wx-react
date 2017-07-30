/**
 * 支持ssr， 用commonjs规范书写
 */
require('./global');
let React = require('react');
let render = require('react-dom').render;
let Provider = require('./redux/index.js');

render(
  Provider,
  document.getElementById('app')
);
