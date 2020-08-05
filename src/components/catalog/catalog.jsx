import GenreList from "../genre-list/genre-list.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";
import PropTypes from "prop-types";
import {getActiveGenre, getFilteredMovies, getGenres, getShowedMoviesCount} from "../../reducer/app/selectors";
import ShowMore from "../show-more/show-more.jsx";
import {extendObject} from "../../utils/common/common";

const Catalog = (props) => {
  const {movies, genres, activeGenre, displayShowMoreButton, onGenreClick, onShowMoreClick} = props;

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
      />
      {displayShowMoreButton &&
        <ShowMore
          onClick={onShowMoreClick}
        />
      }
    </section>
  );
};

Catalog.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
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
  displayShowMoreButton: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilteredMovies: getFilteredMovies(state),
  activeGenre: getActiveGenre(state),
  showedMoviesCount: getShowedMoviesCount(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setFilterByGenre(genre));
    dispatch(ActionCreator.resetShowedMoviesCount());
  },
  onShowMoreClick() {
    dispatch(ActionCreator.incrementShowedMoviesCount());
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  const {allFilteredMovies, showedMoviesCount} = stateProps;
  const movies = allFilteredMovies.slice(0, showedMoviesCount);

  return extendObject(
      {},
      stateProps,
      dispatchProps,
      {
        movies,
        displayShowMoreButton: showedMoviesCount < allFilteredMovies.length
      }
  );
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Catalog);
