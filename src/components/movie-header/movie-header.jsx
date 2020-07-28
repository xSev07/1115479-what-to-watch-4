import React from "react";
import PropTypes from "prop-types";
import {transformToFirstCapitalSymbol} from "../../utils/common/common";
import PrivateLink from "../private-link/private-link.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const MovieHeader = (props) => {
  const {movie, needAddReviewButton, disableAddInList, onInListButtonClick} = props;
  const {title, genre, year, inList} = movie;
  const mainGenre = transformToFirstCapitalSymbol(genre);
  const videoURL = AppRoute.VIDEO_PLAYER.replace(`:id`, movie.id);

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{mainGenre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      <div className="movie-card__buttons">
        <Link
          className="btn btn--play movie-card__button"
          to={videoURL}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
        <PrivateLink
          disabled={disableAddInList}
          className="btn btn--list movie-card__button"
          type="button"
          onClick={onInListButtonClick}
        >
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref={inList ? `#in-list` : `#add`}></use>
          </svg>
          <span>My list</span>
        </PrivateLink>
        {needAddReviewButton && <a href="add-review.html" className="btn movie-card__button">Add review</a>}
      </div>
    </div>
  );
};

MovieHeader.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    inList: PropTypes.bool.isRequired,
  }).isRequired,
  needAddReviewButton: PropTypes.bool.isRequired,
  disableAddInList: PropTypes.bool.isRequired,
  onInListButtonClick: PropTypes.func.isRequired,
};

export default MovieHeader;
