import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {isValidEmail, isValidPassword} from "../../utils/common/common";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.state = {
      incorrectEmail: false,
      incorrectPassword: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    const emailValid = isValidEmail(email);
    const passwordValid = isValidPassword(password);
    const formValid = emailValid && passwordValid;

    this.setState({
      incorrectEmail: !emailValid,
      incorrectPassword: !passwordValid,
    });

    if (formValid) {
      const formData = {
        email,
        password,
      };
      this.props.onSubmit(formData);
    }
  }

  render() {
    const {incorrectEmail, incorrectPassword} = this.state;
    const {authError} = this.props;
    return (
      <form action="#" className="sign-in__form">
        {authError && (
          <div className="sign-in__message">
            <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
          </div>
        )}
        {(incorrectEmail || incorrectPassword) && (
          <div className="sign-in__message">
            <p>Please enter a valid user data</p>
          </div>
        )}
        <div className="sign-in__fields">
          <div className={`sign-in__field${incorrectEmail ? ` sign-in__field--error` : ``}`}>
            <input ref={this.emailRef} className="sign-in__input" type="email" placeholder="Email address" name="email" id="user-email"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className={`sign-in__field${incorrectPassword ? ` sign-in__field--error` : ``}`}>
            <input ref={this.passwordRef} className="sign-in__input" type="password" placeholder="Password" name="password"
              id="user-password"/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
            onClick={this.handleSubmit}
          >Sign in
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  authError: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
