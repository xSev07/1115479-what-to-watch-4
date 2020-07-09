import NameSpace from "../name-space";
import {ALL_GENRES_NAME, MAX_GENRES} from "../../const";
import {getAllMovies} from "../data/selectors";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.APP;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const _getFilteredMovies = (allMovies, currentGenre) => {
  if (currentGenre === ALL_GENRES_NAME) {
    return allMovies;
  }
  return allMovies.filter((movie) => movie.genre.includes(currentGenre));
};

export const getFilteredMovies = createSelector(
    getAllMovies,
    getGenre,
    (allMovies, currentGenre) => {
      return _getFilteredMovies(allMovies, currentGenre);
    }
);

export const _getGenres = (allMovies) => {
  const uniqGenres = new Set();
  allMovies.forEach((movie) => movie.genre.forEach((it) => uniqGenres.add(it)));
  const genres = Array.from(uniqGenres);
  genres.sort().splice(MAX_GENRES);
  genres.unshift(ALL_GENRES_NAME);

  return genres;
};

export const getGenres = createSelector(
    getAllMovies,
    (allMovies) => {
      return _getGenres(allMovies);
    }
);

// export const getGenres = (state) => {
//   const allMovies = getAllMovies(state);
//   const uniqGenres = new Set();
//   allMovies.forEach((movie) => movie.genre.forEach((it) => uniqGenres.add(it)));
//   const genres = Array.from(uniqGenres);
//   genres.sort().splice(MAX_GENRES);
//   genres.unshift(ALL_GENRES_NAME);
//
//   return genres;
// };

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].genre;
};
