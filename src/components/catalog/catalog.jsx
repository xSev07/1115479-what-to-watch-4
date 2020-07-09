import GenreList from "../genre-list/genre-list.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import React from "react";
import {ShowedMovies} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";
import PropTypes from "prop-types";
import {getActiveGenre, getFilteredMovies, getGenres} from "../../reducer/app/selectors";

const Catalog = (props) => {
  const {movies, genres, activeGenre, onGenreClick, onMovieCardClick} = props;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList
        genres={genres}
        activeGenre={activeGenre}
        onClick={onGenreClick}
      />

      <MovieList
        movies={movies}
        onMovieCardClick={onMovieCardClick}
      />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state).slice(0, ShowedMovies.ON_START),
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setFilterByGenre(genre));
  },
});

Catalog.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        year: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        votes: PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
  ).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
