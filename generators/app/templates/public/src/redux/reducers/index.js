let {combineReducers} = require('redux');
let home = require('./home');
let hello = require('./hello');

module.exports = combineReducers({
  home,
  hello
});
