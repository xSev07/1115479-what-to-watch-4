import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
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
              year={movie.year}
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
