import { getCard } from "../Action/CardDesign.Action.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CardUser from "../Component/CardUser";

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
