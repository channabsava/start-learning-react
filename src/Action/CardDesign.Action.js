import axios from "axios";
export const CARD_REQUESTING = "CARD_REQUESTING";
export const CARD_SUCCESS = "CARD_SUCCESS";
export const CARD_FAILURE = "CARD_FAILURE";

export function cardRequesting() {
  return {
    type: CARD_REQUESTING,
    status: "REQUESTING"
  };
}

export function cardSucess(data) {
  return {
    type: CARD_SUCCESS,
    status: "SUCCESS",
    userData: data
  };
}

export function cardFailure(error) {
  return {
    type: CARD_FAILURE,
    status: "FAILURE",
    error
  };
}

export function getCard() {
  return async (dispatch, getState) => {
    dispatch(cardRequesting());
    try {
      const result = await axios.get("http://api.github.com/users");

      if (result.error) {
        throw result.error;
      }
      const res = result.data;

      return dispatch(cardSucess(res));
    } catch (e) {
      return dispatch(cardFailure(e.message));
    }
  };
}
