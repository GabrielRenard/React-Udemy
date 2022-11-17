import { useState } from "react";

const useInputV2 = checkValidity => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const valueIsValid = checkValidity(enteredValue);
  const hasError = !valueIsValid && isEdited;

  const inputChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsEdited(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInputV2;
