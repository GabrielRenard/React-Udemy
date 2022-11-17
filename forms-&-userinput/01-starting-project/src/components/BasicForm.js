import { useState } from "react";

const BasicForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";
  const lastNameIsValid = lastName.trim() !== "";
  const emailIsValid = /\S+@\S+\.\S+/.test(email);

  const firstNameHasError = !firstNameIsValid && firstNameIsTouched;
  const lastNameHasError = !lastNameIsValid && lastNameIsTouched;
  const emailHasError = !emailIsValid && emailIsTouched;

  const firstNameChangeHandler = e => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = e => {
    setLastName(e.target.value);
  };
  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };

  const firstNameBlurHandler = () => {
    setFirstNameIsTouched(true);
  };
  const lastNameBlurHandler = () => {
    setLastNameIsTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p>Please enter a valid name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p>Please enter a valid last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
