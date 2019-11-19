import { ADD_TODO, DELETE_TODO } from "../Action/Todo.Action.js";

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      let existingState = state;
      let newState = [];
      newState.push(...existingState);
      newState.push({ id: action.id, text: action.text });
      return newState;

    case DELETE_TODO:
      const deletestate = state.filter(data => {
        return data.id !== action.id;
      });

      return deletestate;
    default:
      return state;
  }
}

export default todo;
