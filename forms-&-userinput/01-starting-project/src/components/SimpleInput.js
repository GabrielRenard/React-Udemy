import { useState } from "react";

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // Checks if user had a chance of editing the input

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputHandler = e => {
    setEnteredName(e.target.value); // set entered name on each keystroke
  };

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = e => {
    setEnteredNameTouched(true);

    e.preventDefault();
    // If input is empty, do nothing (dont run code below i.e return)
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    // nameInputRef.current.value = ""; => not ideal, leave DOM manipulation to react and not vanilla JS
    setEnteredName(""); // set state input to an empty string
    setEnteredNameTouched(false);
  };

  /* Name input should be invalid if only both setEnteredNameIsValid is false
  AND enteredNameTouched (user had a chance to edit input field) is true */

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} //bind the value to set setEnteredName to empty string
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
