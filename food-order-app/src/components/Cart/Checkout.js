import { useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import classes from "./Checkout.module.css";

const Checkout = props => {
  const {
    enteredValue: name,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useInput(enteredValue => enteredValue.trim() !== "");

  const {
    enteredValue: street,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    hasError: streetHasError,
  } = useInput(enteredValue => enteredValue.trim() !== "");

  const {
    enteredValue: city,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    hasError: cityHasError,
  } = useInput(enteredValue => enteredValue.trim() !== "");

  const {
    enteredValue: postalCode,
    inputChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    hasError: postalCodeHasError,
  } = useInput(enteredValue => enteredValue.trim().length === 5);

  // const [isValid, setIsValid] = useState(true);

  // const [formInputValidity, setFormInputValidity] = useState({
  //   name: true,
  //   street: true,
  //   city: true,
  //   postalCode: true,
  // });

  // Input validation
  // const isEmpty = value => value.trim() === "";
  // const isFiveChars = value => value.trim().length === 5;

  // Capture input values
  // const nameInputRef = useRef();
  // const streetInputRef = useRef();
  // const postalInputRef = useRef();
  // const cityInputRef = useRef();

  // Submit form
  const confirmHandler = event => {
    event.preventDefault();

    // const enteredName = nameInputRef.current.value;
    // const enteredStreet = streetInputRef.current.value;
    // const enteredPostal = postalInputRef.current.value;
    // const enteredCity = cityInputRef.current.value;

    // Check vailidity of captured inputs
    // const enteredNameIsValid = !isEmpty(enteredName);
    // const enteredStreetIsValid = !isEmpty(enteredStreet);
    // const enteredCityIsValid = !isEmpty(enteredCity);
    // const enteredPostalIsValid = isFiveChars(enteredPostal);

    // Update formValidity state
    // setFormInputValidity({
    //   name: enteredNameIsValid,
    //   street: enteredStreetIsValid,
    //   city: enteredCityIsValid,
    //   postalCode: enteredPostalIsValid,
    // });

    const formIsValid = name && street && city && postalCode;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    !nameHasError ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    !cityHasError ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    !streetHasError ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    !postalCodeHasError ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Please enter a valid street</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeHasError && (
          <p>Please enter a valid postal code (5 characters)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
