import React from "react";
import {getRatingTextDescription} from "../../utils/common/common";
import PropTypes from "prop-types";

const MovieOverview = (props) => {
  const {votes, producer, rating, actors, description} = props;
  const textRating = getRatingTextDescription(rating);
  const actorsText = `${actors.join(`, `)} and other`;
  const descriptionText = description.map((it, index) => <p key={index}>{it}</p>);
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{textRating}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {descriptionText}

        <p className="movie-card__director"><strong>Director: {producer}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actorsText}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  votes: PropTypes.number.isRequired,
  producer: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default MovieOverview;
