export const SET_VISIBILITYFILTER = "SET_VISIBILITYFILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const VISIBILITYFILTER = "VISIBILITYFILTER";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
}

export function deleteTodo(id) {
  console.log(id, "action");
  return {
    type: DELETE_TODO,
    id
  };
}
