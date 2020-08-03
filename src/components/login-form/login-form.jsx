import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import withLoginValidation from "../../hocs/with-login-validation/with-login-validation.jsx";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();
    const {checkValidity} = this.props;
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    if (checkValidity({email, password})) {
      const formData = {
        email,
        password,
      };
      this.props.onSubmit(formData);
    }
  }

  render() {
    const {authError, incorrectEmail, incorrectPassword} = this.props;
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
  incorrectEmail: PropTypes.bool.isRequired,
  incorrectPassword: PropTypes.bool.isRequired,
  checkValidity: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export {LoginForm};
export default withLoginValidation(LoginForm);
