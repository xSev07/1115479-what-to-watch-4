import React, {createRef} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";

const SignIn = (props) => {
  const {authError, onSubmit} = props;
  const loginRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const loginValue = loginRef.current.value;

    // TODO:
    //  Сделать отображение сообщения об ошибке
    //  Вынести форму в отдельный компонент и перерисовывать только её при ошибке
    const emailValid = loginValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (emailValid) {
      onSubmit({
        login: loginValue,
        password: passwordRef.current.value,
      });
    }
  };

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
        <form
          action="#"
          className="sign-in__form"
        >
          {authError && (
            <div className="sign-in__message">
              <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
            </div>
          )}
          <div className="sign-in__fields">
            <div className="sign-in__field">
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
