import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import {filterMoviesByGenre, getGenres} from "../../utils/common/common";
import GenreList from "../genre-list/genre-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import {ShowedMovies} from "../../const";
import Header from "../header/header.jsx";

const Main = (props) => {
  const {promo, movies, genres, activeGenre, onMovieCardClick, onGenreClick} = props;
  const {title, genre, year} = promo;

  return (
    <>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>
        <Header
          isMainPage={true}
        >
        </Header>

        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
                height="327"/>
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
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

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
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

const mapStateToProps = (state) => ({
  movies: filterMoviesByGenre(state.movies, state.genre).slice(0, ShowedMovies.ON_START),
  activeGenre: state.genre,
  genres: getGenres(state.movies),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setFilterByGenre(genre));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
