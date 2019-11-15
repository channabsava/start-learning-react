import { INCREMENT_COUNT, DECREMENT_COUNT } from "../Action/counter.action";
const initialState = {
  count: 0
};
export default function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
