import React, {createRef} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import LoginForm from "../login-form/login-form.jsx";

const SignIn = (props) => {
  const {authError, incorrectEmail, onSubmit} = props;


  // TODO:
  //  Вынести header в компонент(отличаются классы у header)
  //  Сделать перенаправление на главную страницу, если авторизация успешна
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <LoginForm
          authError={authError}
          incorrectEmail={incorrectEmail}
          onSubmit={onSubmit}
        />
      </div>

      <Footer/>
    </div>
  );
};

SignIn.propTypes = {
  authError: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
