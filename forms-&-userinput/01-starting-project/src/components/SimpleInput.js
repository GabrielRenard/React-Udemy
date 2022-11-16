import { useRef, useState } from "react";

const SimpleInput = props => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputHandler = e => {
    setEnteredName(e.target.value); // set entered name on each keystroke
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value; // set entered name only upon submit
    console.log(enteredValue);

    // nameInputRef.current.value = ""; => not ideal, leave DOM manipulation to react and not vanilla JS
    setEnteredName(""); // set state input to an empty string
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName} //bind the value to set setEnteredName to empty string
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
