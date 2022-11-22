import useInput from "../../hooks/useInput";
import classes from "./Checkout.module.css";

const Checkout = props => {
  const {
    enteredValue: name,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: resetName,
  } = useInput(enteredValue => enteredValue.trim() !== "");

  const {
    enteredValue: street,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    hasError: streetHasError,
    reset: resetStreet,
  } = useInput(enteredValue => enteredValue.trim() !== "");

  const {
    enteredValue: city,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    hasError: cityHasError,
    reset: resetCity,
  } = useInput(enteredValue => enteredValue.trim() !== "");

  const {
    enteredValue: postalCode,
    inputChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    hasError: postalCodeHasError,
    reset: resetPostalCode,
  } = useInput(enteredValue => enteredValue.trim().length === 5);

  // Submit form
  const confirmHandler = event => {
    event.preventDefault();

    const formIsValid = name && street && city && postalCode;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name,
      street,
      city,
      postalCode,
    });

    console.log(name, city, street, postalCode);

    resetName();
    resetCity();
    resetStreet();
    resetPostalCode();
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
          value={name}
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
          value={street}
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
          value={postalCode}
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
          value={city}
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
