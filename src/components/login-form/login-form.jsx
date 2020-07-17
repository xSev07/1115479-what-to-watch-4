import React, {createRef} from "react";
import PropTypes from "prop-types";

const LoginForm = (props) => {
  const {authError, incorrectEmail, onSubmit} = props;
  const loginRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      loginValue: loginRef.current.value,
      passwordValue: passwordRef.current.value,
    };
    onSubmit(formData);
  };

  return (
    <form
      action="#"
      className="sign-in__form"
    >
      {authError && (
        <div className="sign-in__message">
          <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
        </div>
      )}
      {incorrectEmail && (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      )}
      <div className="sign-in__fields">
        <div className={`sign-in__field${incorrectEmail ? ` sign-in__field--error` : ``}`}>
          <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={loginRef}/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          onClick={handleSubmit}
        >Sign in</button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  authError: PropTypes.bool.isRequired,
  incorrectEmail: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
