import React, {createRef} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";

const SignIn = (props) => {
  const {onSubmit} = props;
  const loginRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO: Здесь можно проверить валидность email адреса
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  // TODO:
  //  Вынести header в компонент(отличаются классы у header)
  //  Сделать перенаправление на главную страницу, если авторизация успешна
  //  Сделать вывод ошибок, если авторзиация не успешна
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
          onSubmit={handleSubmit}
        >
          {/* {authError && (*/}
          {/*  <div className="sign-in__message">*/}
          {/*    <p>We can’t recognize this email <br/> and password combination. Please try again.</p>*/}
          {/*  </div>*/}
          {/* )}*/}
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
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

export default SignIn;
