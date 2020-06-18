import React from "react";
import PropTypes from "prop-types";
import {PosterType} from "../../const";
import {getImageURL} from "../../utils";

const MovieCard = (props) => {
  const {title, onTitleClick, onHover} = props;
  const previewSrc = getImageURL(title, PosterType.PREVIEW);
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={(evt) => {
        onHover(evt.currentTarget);
      }}
    >
      <div className="small-movie-card__image">
        <img src={previewSrc} alt={title} width="280" height="175"/>
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
