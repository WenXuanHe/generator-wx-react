let React = require('react');
let getStore = require('./store/index.js');
let routes = require('../routes/index.js');
let Provider = require('react-redux').Provider;
let store = getStore(window['_INITIAL_STATE_']);

module.exports = (
  <Provider store={store}>
    {routes}
  </Provider>
)
