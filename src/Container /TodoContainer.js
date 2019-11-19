import { addTodo, deleteTodo } from "../Action/Todo.Action.js";
import { connect } from "react-redux";
import AddTodoForm from "../Components/AddTodoForm.js";

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm);

export default TodoContainer;
