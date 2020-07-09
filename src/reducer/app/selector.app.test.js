import {ALL_GENRES_NAME} from "../../const";
import {_getFilteredMovies, _getGenres} from "./selectors";

const movies = [
  {
    genre: [`genre1`]
  },
  {
    genre: [`genre1`, `genre2`]
  },
  {
    genre: [`genre1`, `genre2`, `genre3`]
  },
  {
    genre: [`genre3`]
  },
  {
    genre: [`genre4`]
  },
  {
    genre: [`genre5`]
  },
  {
    genre: [`genre5`]
  }
];

describe(`Check app selector work correctly`, () => {
  describe(`Check the filtered movies is correct`, () => {
    it(`should return movies with unique genre`, () => {
      expect(_getFilteredMovies(movies, `genre4`))
        .toEqual([
          {
            genre: [`genre4`]
          }
        ]);
    });

    it(`should return movies with not unique genre`, () => {
      expect(_getFilteredMovies(movies, `genre1`))
        .toEqual([
          {
            genre: [`genre1`]
          },
          {
            genre: [`genre1`, `genre2`]
          },
          {
            genre: [`genre1`, `genre2`, `genre3`]
          }
        ]);
    });

    it(`should return movies with same genre`, () => {
      expect(_getFilteredMovies(movies, `genre5`))
        .toEqual([
          {
            genre: [`genre5`]
          },
          {
            genre: [`genre5`]
          }
        ]);
    });

    it(`should return no movies with nonexistent genre`, () => {
      expect(_getFilteredMovies(movies, `nonexistent genre`))
        .toEqual([]);
    });

    it(`should return all movies with all genres`, () => {
      expect(_getFilteredMovies(movies, ALL_GENRES_NAME))
        .toEqual(movies);
    });
  });

  describe(`Check creating a list of genres`, () => {
    it(`should return correct genres list`, () => {
      expect(_getGenres(movies)).toEqual([ALL_GENRES_NAME, `genre1`, `genre2`, `genre3`, `genre4`, `genre5`]);
    });

    it(`should return correct genres list with empty movies`, () => {
      expect(_getGenres([])).toEqual([ALL_GENRES_NAME]);
    });
  });
});
