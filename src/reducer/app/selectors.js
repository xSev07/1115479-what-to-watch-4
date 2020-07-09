import NameSpace from "../name-space";
import {ALL_GENRES_NAME, MAX_GENRES} from "../../const";
import {getAllMovies} from "../data/selectors";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.APP;

export const getFilteredMovies = (state) => {
  const currentGenre = state[NAME_SPACE].genre;
  const allMovies = getAllMovies(state);
  if (currentGenre === ALL_GENRES_NAME) {
    return allMovies;
  }
  return allMovies.filter((movie) => movie.genre.includes(currentGenre));
};

export const getGenres = createSelector(
    getAllMovies,
    (allMovies) => {
      const uniqGenres = new Set();
      allMovies.forEach((movie) => movie.genre.forEach((it) => uniqGenres.add(it)));
      const genres = Array.from(uniqGenres);
      genres.sort().splice(MAX_GENRES);
      genres.unshift(ALL_GENRES_NAME);

      return genres;
    }
);

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].genre;
};
