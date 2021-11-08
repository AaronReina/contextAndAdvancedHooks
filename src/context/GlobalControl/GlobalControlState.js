import { useReducer } from "react";
import GlobalControlContext from "./GlobalControlContext";
import GlobalControlReducer from "./GlobalControlReducer";
import { getBasic } from "./../../services/calls";

const GlobalControlState = (props) => {
  const initialState = {
    error: {},
    spinner: false,
    data: {},
  };

  const [state, dispatch] = useReducer(GlobalControlReducer, initialState);

  const setSpinner = (spinnerState) => {
    dispatch({ type: "SET_SPINNER", payload: spinnerState });
  };

  const setError = (status, text) => {
    dispatch({
      type: "SET_ERROR",
      payload: { status, text },
    });
  };

  const getData = async () => {
    try {
      setSpinner(true);
      const response = await getBasic("");
      setSpinner(false);
      dispatch({ type: "GET_DATA", payload: response });
    } catch (e) {
      setSpinner(false);
      setError(e.data.status, e.data.text);
    }
  };

  const resetError = () => {
    dispatch({
      type: "RESET_ERROR",
    });
  };

  return (
    <GlobalControlContext.Provider
      value={{
        error: state.error,
        spinner: state.spinner,
        data: state.data,
        setSpinner,
        getData,
        setError,
        resetError,
      }}
    >
      {props.children}
    </GlobalControlContext.Provider>
  );
};

export default GlobalControlState;
