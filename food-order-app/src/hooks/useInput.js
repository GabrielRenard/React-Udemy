import React, { useState, useReducer } from "react";

const useInput = checkValidity => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const inputChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsEdited(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsEdited(false);
  };

  const isValid = checkValidity(enteredValue);
  const hasError = !isValid && isEdited;

  return {
    enteredValue: enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    hasError,
    reset,
  };
};

export default useInput;
