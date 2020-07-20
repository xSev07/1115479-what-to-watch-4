import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import LoginForm from "../login-form/login-form.jsx";
import {connect} from "react-redux";
import {getIncorrectEmailStatus, getIncorrectPasswordStatus, getLoginErrorStatus} from "../../reducer/user/selectors";
import {ActionCreator, Operation as UserOperation} from "../../reducer/user/user";
import Header from "../header/header.jsx";
import {isValidEmail, isValidPassword} from "../../utils/common/common";

const SignIn = (props) => {
  const {authError, incorrectEmail, incorrectPassword} = props;

  const _handleFormSubmit = (formData) => {
    const {login, setIncorrectEmail, setIncorrectPassword} = props;
    const {loginValue, passwordValue} = formData;

    const emailValid = isValidEmail(loginValue);
    const passwordValid = isValidPassword(passwordValue);

    if (emailValid && passwordValid) {
      login({
        login: loginValue,
        password: passwordValue,
      });
    }
    setIncorrectEmail(!emailValid);
    setIncorrectPassword(!passwordValid);
  };

  return (
    <div className="user-page">
      <Header
        className={`user-page__head`}
      >
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <LoginForm
          authError={authError}
          incorrectEmail={incorrectEmail}
          incorrectPassword={incorrectPassword}
          onSubmit={_handleFormSubmit}
        />
      </div>

      <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authError: getLoginErrorStatus(state),
  incorrectEmail: getIncorrectEmailStatus(state),
  incorrectPassword: getIncorrectPasswordStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  setIncorrectEmail(status) {
    dispatch(ActionCreator.setIncorrectEmail(status));
  },
  setIncorrectPassword(status) {
    dispatch(ActionCreator.setIncorrectPassword(status));
  },
});

SignIn.propTypes = {
  authError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
