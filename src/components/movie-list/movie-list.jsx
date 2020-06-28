import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {getImageURL} from "../../utils/common/common";
import {ImageType} from "../../const";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
    this._handlerCardHover = this._handlerCardHover.bind(this);
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
              onHover={this._handlerCardHover}
            />
          );
        })
        }
      </div>
    );
  }

  _handlerCardHover(currentCard) {
    if (this.state.activeCard === currentCard) {
      return;
    }
    this.setState({activeCard: currentCard});
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
