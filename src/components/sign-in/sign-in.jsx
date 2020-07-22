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
  const {authError, incorrectEmail, incorrectPassword, handleFormSubmit} = props;

  return (
    <div className="user-page">
      <Header
        className={`user-page__head`}
        needUserBlock={false}
      >
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <LoginForm
          authError={authError}
          incorrectEmail={incorrectEmail}
          incorrectPassword={incorrectPassword}
          onSubmit={handleFormSubmit}
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

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign(
      {},
      stateProps,
      {
        handleFormSubmit(formData) {
          const {login, setIncorrectEmail, setIncorrectPassword} = dispatchProps;
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
        }
      }
  );
};

SignIn.propTypes = {
  authError: PropTypes.bool.isRequired,
  incorrectEmail: PropTypes.bool.isRequired,
  incorrectPassword: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignIn);
