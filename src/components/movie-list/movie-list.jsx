import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {StaticRouter} from "react-router-dom";

const MovieList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      <StaticRouter>
        {
          movies.map((movie) => {
            return (

              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                videoPreview={movie.videoPreview}
                poster={movie.preview}
                isMuted={true}
              />
            );
          })
        }
      </StaticRouter>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      })
  ),
};

export default MovieList;
