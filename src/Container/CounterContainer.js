import { increment, decrement } from "../Action/counter.action";

import { connect } from "react-redux";

import Counter from "../Components/Counter";
const mapDispatchToProps = dispatch => {
  return {
    increment: text => {
      dispatch(increment(text));
    },
    decrement: () => {
      dispatch(decrement());
    }
  };
};
const mapStateToProps = state => {
  return {
    count: state.count,
    data: state.data
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
