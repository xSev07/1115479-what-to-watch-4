import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUserAvatar} from "../../reducer/user/selectors";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const Header = (props) => {
  const {className, avatar, needUserBlock = true, children} = props;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      {needUserBlock && <div className="user-block">
        {avatar ? (
          <div className="user-block__avatar">
            <Link to={AppRoute.IN_LIST}>
              <img src={avatar} alt="User avatar" width="63" height="63"/>
            </Link>
          </div>
        ) : (
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        )}
      </div>}
    </header>
  );
};

const mapStateToProps = (state) => ({
  avatar: getUserAvatar(state),
});

Header.propTypes = {
  className: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  needUserBlock: PropTypes.bool,
  children: PropTypes.element,
};

Header.defaultProps = {
  className: `movie-card__head`,
};

export {Header};
export default connect(mapStateToProps)(Header);
