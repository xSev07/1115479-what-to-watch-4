import React from "react";
import PropTypes from "prop-types";

const getPoster = (title) => {
  return title.toLowerCase().replace(`:`, ``).replace(/ /g, `-`);
};

const MovieCard = (props) => {
  const {title, onTitleClick, onHover} = props;
  const poster = `img/${getPoster(title)}.jpg`;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={(evt) => {
        onHover(evt.currentTarget);
      }}
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onTitleClick}
        >{title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default MovieCard;
