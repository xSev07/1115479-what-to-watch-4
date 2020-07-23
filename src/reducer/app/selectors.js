import NameSpace from "../name-space";
import {ALL_GENRES_NAME, MAX_GENRES} from "../../const";
import {getAllMovies} from "../data/selectors";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.APP;

export const getGenreFromState = (state) => {
  return state[NAME_SPACE].genre;
};

export const getGenreFromMovie = (state, movieId) => {
  const allMovies = getAllMovies(state);
  const movie = allMovies.find((it) => it.id === movieId);
  return movie.genre;
};

/**
 * Возвращает отфильтрованный список фильмов по жанру.
 * Если ownProps не указан, то фильтрует по жанру в стейте,
 * иначе по жанру фильма(ищет по id)
 *
 * @param {object} state - state приложения
 * @param {object} ownProps - переданные пропсы
 * @param {string} ownProps.movieId - id фильма по которому надо отфильтровать
 */
export const getFilteredMovies = createSelector(
    getAllMovies,
    (state, ownProps) => {
      if (!ownProps) {
        return getGenreFromState(state);
      }
      return getGenreFromMovie(state, ownProps.movieId);
    },
    (allMovies, currentGenre) => {
      if (currentGenre === ALL_GENRES_NAME) {
        return allMovies;
      }
      return allMovies.filter((movie) => movie.genre.includes(currentGenre));
    }
);

export const getGenres = createSelector(
    getAllMovies,
    (allMovies) => {
      const genres = Array.from(allMovies.reduce((acc, it) => acc.add(it.genre), new Set()));
      genres.sort().splice(MAX_GENRES);
      genres.unshift(ALL_GENRES_NAME);

      return genres;
    }
);

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getAddMovieInListStatus = (state) => {
  return state[NAME_SPACE].canAddMovieInList;
};
