import React from "react";
import {getRatingTextDescription} from "../../utils/common/common";

const MovieOverview = (props) => {
  const {votes, producer, rating, actors, description} = props;
  const textRating = getRatingTextDescription(rating);
  const actorsText = `${actors.join(`, `)} and other`;
  const DescriptionText = description.map((it, index) => <p key={index}>{it}</p>);
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
        {DescriptionText}

        <p className="movie-card__director"><strong>Director: {producer}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actorsText}</strong></p>
      </div>
    </>
  );
};

export default MovieOverview;
