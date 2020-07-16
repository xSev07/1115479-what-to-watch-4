import React from "react";
import PropTypes from "prop-types";

const createUserBlockTemplate = (avatar) => {
  return (
    <div className="user-block__avatar">
      <img src={avatar} alt="User avatar" width="63" height="63"/>
    </div>
  );
};

const createSignInTemplate = () => {
  return (
    <a href="sign-in.html" className="user-block__link">Sign in</a>
  );
};

const Header = (props) => {
  const {isMainPage = false, avatar} = props;
  const mainLink = isMainPage ? `` : `/`;
  // TODO: Заменить a на Link
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href={mainLink} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <div className="user-block">
        {avatar ? createUserBlockTemplate(avatar) : createSignInTemplate()}
      </div>
    </header>
  );
};

Header.propTypes = {
  isMainPage: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
};

export default Header;
