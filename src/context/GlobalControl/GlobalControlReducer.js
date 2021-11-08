import { SET_SPINNER, SET_ERROR, GET_DATA, RESET_ERROR } from "../types";

const GlobalControlReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_SPINNER:
      return {
        ...state,
        spinner: payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    case RESET_ERROR:
      return {
        ...state,
        error: {},
      };

    case GET_DATA:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};

export default GlobalControlReducer;
