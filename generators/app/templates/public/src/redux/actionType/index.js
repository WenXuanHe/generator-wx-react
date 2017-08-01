 const KeyMirror = require ('keymirror');

const ActionTypes = KeyMirror({
  ERRORS: null,
  TODOS: null,
  TODO_ADD: null,
  TODO_UPDATE: null,
  TODO_UPDATE_STATE: null,
  TODOS_UPDATE_STATE: null,
  TODOS_REMOVE: null,
  TODO_CHANGE_EDITING: null,
  TODO_SWITCH_STATUS: null,
  TODO_GET_AUTHORS: null,
})

module.exports = ActionTypes;
