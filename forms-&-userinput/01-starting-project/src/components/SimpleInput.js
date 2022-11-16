import { useRef, useState } from "react";

const SimpleInput = props => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // Checks if user had a chance of editing the input

  const nameInputHandler = e => {
    setEnteredName(e.target.value); // set entered name on each keystroke
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    } else {
      setEnteredNameIsValid(false);
      setEnteredNameTouched(true);
    }
  };

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmitHandler = e => {
    setEnteredNameTouched(true);

    e.preventDefault();
    // If input is empty, do nothing (dont run code below i.e return)
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value; // set entered name only upon submit
    console.log(enteredValue);

    // nameInputRef.current.value = ""; => not ideal, leave DOM manipulation to react and not vanilla JS
    setEnteredName(""); // set state input to an empty string
  };

  /* Name input should be invalid if only both setEnteredNameIsValid is false
  AND enteredNameTouched (user had a chance to edit input field) is true */
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
