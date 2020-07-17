import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUserAvatar} from "../../reducer/user/selectors";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {isMainPage = false, avatar} = props;
  const mainLink = isMainPage ? `` : `/`;
  // TODO:
  //  Сделать класс с помощью миксинов(вроде так называется)
  //  Добавить children(передавать заголовок)
  //  UserBlock вынести в отдельный компонент или так же добавлять миксинами
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={mainLink} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="user-block">
        {avatar ? (
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63"/>
          </div>
        ) : (
          <Link to="/login" className="user-block__link">Sign in</Link>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  avatar: getUserAvatar(state),
});

Header.propTypes = {
  isMainPage: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
};

export {Header};
export default connect(mapStateToProps)(Header);
