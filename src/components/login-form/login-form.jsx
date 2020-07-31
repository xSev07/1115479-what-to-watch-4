import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();
    const formData = {
      userLogin: this.emailRef.current.value,
      userPassword: this.passwordRef.current.value,
    };
    this.props.onSubmit(formData);
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
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
