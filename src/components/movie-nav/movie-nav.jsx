import React from "react";

const createItem = (name, isActive, onClick) => {
  const className = `movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`;
  return (
    <li key={name} className={className}>
      <a
        href="#"
        className="movie-nav__link"
        onClick={() => onClick(name)}
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

export default MovieNav;
