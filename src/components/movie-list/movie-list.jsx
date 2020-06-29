import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {getImageURL} from "../../utils/common/common";
import {ImageType} from "../../const";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              videoPreview={movie.videoPreview}
              poster={getImageURL(movie.title, ImageType.PREVIEW)}
              isMuted={true}
              onClick={onMovieCardClick}
            />
          );
        })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      })
  ),
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MovieList;
