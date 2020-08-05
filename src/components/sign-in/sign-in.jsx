import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import LoginForm from "../login-form/login-form.jsx";
import {connect} from "react-redux";
import {
  getAuthorizationStatus,
  getLoginErrorStatus
} from "../../reducer/user/selectors";
import {AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user";
import Header from "../header/header.jsx";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../const";

const SignIn = (props) => {
  const {userAuthorized, authError, handleFormSubmit} = props;

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
          onSubmit={handleFormSubmit}
        />
      </div>

      <Footer/>
    </div>
  );
};

SignIn.propTypes = {
  userAuthorized: PropTypes.bool.isRequired,
  authError: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  authError: getLoginErrorStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFormSubmit(formData) {
    dispatch(UserOperation.login(formData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
