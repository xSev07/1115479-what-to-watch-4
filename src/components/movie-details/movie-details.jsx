import React from "react";
import {transformRuntime} from "../../utils/common/common";
import PropTypes from "prop-types";

const MovieDetails = (props) => {
  const {producer, actors, duration, genre, year} = props;
  const runtime = transformRuntime(duration);
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{producer}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actors.map((it) => <React.Fragment key={it}>{it}, <br/></React.Fragment>)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runtime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  producer: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  duration: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieDetails;
