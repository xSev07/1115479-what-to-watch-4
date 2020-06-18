import React from "react";
import PropTypes from "prop-types";

const getPoster = (title) => {
  return title.toLowerCase().replace(`:`, ``).replace(/ /g, `-`);
};

const MovieCard = (props) => {
  const {title, year, onTitleClick, onHover} = props;
  const key = `${title.split(` `)[0]}-${year}`;
  const poster = `img/${getPoster(title)}.jpg`;
  return (
    <article
      key={key}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onTitleClick}
          onMouseOver={onHover}
        >{title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default MovieCard;
