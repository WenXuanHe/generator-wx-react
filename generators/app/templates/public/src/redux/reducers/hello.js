
let data = require('../store/data');
let {Map} = require('immutable');

let isMap = (map) => map instanceof Map;

let reducer = (state = data.hello, action) => {

  const {type, payload, status} = action;
  state = isMap(state) ? state : Map(state);
  switch (type) {
    case "TODO_GET_AUTHORS":
      if(status === 'success'){
        return state.set('authors', payload.authors);
      }
      return state;
    default:
      return state;
  }
};

module.exports = reducer;

