import React from "react";
import PropTypes from "prop-types";
import {ImageType} from "../../const";
import {getImageURL} from "../../utils/common/common";

const MovieCard = (props) => {
  const {title, onClick, onHover} = props;
  const previewSrc = getImageURL(title, ImageType.PREVIEW);
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={onClick}
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
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default MovieCard;
