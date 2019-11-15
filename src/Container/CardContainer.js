import { getCard } from "/home/shivam/Desktop/start-learning-html/start-learning-react/src/Action/CardDesign.Action.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CardUser from "/home/shivam/Desktop/start-learning-html/start-learning-react/src/Component/CardUser.js";

const mapDispatchToProps = dispatch => {
  return {
    getCard: () => {
      dispatch(getCard());
    }
  };
};
const mapStateToProps = state => {
  return {
    UserData: state
  };
};

const CardUserContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardUser)
);

export default CardUserContainer;
