import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUserAvatar} from "../../reducer/user/selectors";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  const {className, avatar, children} = props;

  // TODO:
  //  Сделать проверку url. Если это страница логина - не выводить user-block
  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <NavLink to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </NavLink>
      </div>
      {children}
      <div className="user-block">
        {avatar ? (
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63"/>
          </div>
        ) : (
          <NavLink to="/login" className="user-block__link">Sign in</NavLink>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  avatar: getUserAvatar(state),
});

Header.propTypes = {
  className: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  children: PropTypes.element,
};

Header.defaultProps = {
  className: `movie-card__head`,
};

export {Header};
export default connect(mapStateToProps)(Header);
