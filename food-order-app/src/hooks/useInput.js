import React, { useState } from "react";

const useInput = checkValidity => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const inputChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsEdited(true);
  };

  const isValid = checkValidity(enteredValue);
  const hasError = !isValid && isEdited;

  return {
    enteredValue: isValid,
    inputChangeHandler,
    inputBlurHandler,
    hasError,
  };
};

export default useInput;
