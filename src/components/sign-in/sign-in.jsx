import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import LoginForm from "../login-form/login-form.jsx";
import {connect} from "react-redux";
import {
  getAuthorizationStatus,
  getIncorrectEmailStatus,
  getIncorrectPasswordStatus,
  getLoginErrorStatus
} from "../../reducer/user/selectors";
import {ActionCreator, AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user";
import Header from "../header/header.jsx";
import {extendObject, isValidEmail, isValidPassword} from "../../utils/common/common";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../const";

const SignIn = (props) => {
  const {userAuthorized, authError, incorrectEmail, incorrectPassword, handleFormSubmit} = props;

  if (userAuthorized) {
    return (
      <Redirect to={AppRoute.ROOT}/>
    );
  }

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
  userAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
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
  return extendObject(
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
  userAuthorized: PropTypes.bool.isRequired,
  authError: PropTypes.bool.isRequired,
  incorrectEmail: PropTypes.bool.isRequired,
  incorrectPassword: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignIn);
