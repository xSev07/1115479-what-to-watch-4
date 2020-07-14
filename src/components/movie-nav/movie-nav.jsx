import React from "react";
import PropTypes from "prop-types";

const createItem = (name, isActive, onClick) => {
  const className = `movie-nav__item${isActive ? ` movie-nav__item--active` : ``}`;
  return (
    <li key={name} className={className}>
      <a
        href="#"
        className="movie-nav__link"
        onClick={(evt) => {
          evt.preventDefault();
          onClick(name);
        }}
      >{name}</a>
    </li>
  );
};

const MovieNav = (props) => {
  const {tabs, activeTab, onClick} = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((it) => createItem(it, it === activeTab, onClick))}
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieNav;
