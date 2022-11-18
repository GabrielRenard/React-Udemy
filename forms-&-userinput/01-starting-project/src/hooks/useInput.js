import { useReducer } from "react";

const initialState = {
  enteredValue: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT": {
      return {
        enteredValue: action.value,
        isTouched: state.isTouched,
      };
    }
    case "BLUR": {
      return {
        enteredValue: state.enteredValue,
        isTouched: true,
      };
    }
    case "RESET": {
      return {
        enteredValue: "",
        isTouched: false,
      };
    }
  }
  return inputReducer;
};

const useInput = validateValue => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validateValue(state.enteredValue);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = e => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
