import { useState } from "react";

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // Checks if user had a chance of editing the input
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = /\S+@\S+\.\S+/.test(enteredEmail);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputHandler = e => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailInputHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
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
    setEnteredEmail(""); // set state input to an empty string
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  /* Name input should be invalid if only both setEnteredNameIsValid is false
  AND enteredNameTouched (user had a chance to edit input field) is true */

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} //bind the value to set setEnteredName to empty string
        />
      </div>
      {nameInputIsInvalid && !emailInputIsInvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      {!nameInputIsInvalid && emailInputIsInvalid && (
        <p className="error-text">Email must not be empty</p>
      )}
      {nameInputIsInvalid && emailInputIsInvalid && (
        <p className="error-text">Fields must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
