import {ALL_GENRES_NAME} from "../../const";
import NameSpace from "../name-space";
import {getFilteredMovies, getGenres} from "./selectors";

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
      const state = {
        [NameSpace.DATA]: {
          movies,
        },
        [NameSpace.APP]: {
          genre: `genre4`,
        }
      };

      expect(getFilteredMovies(state))
        .toEqual([
          {
            genre: [`genre4`]
          }
        ]);
    });

    it(`should return movies with not unique genre`, () => {
      const state = {
        [NameSpace.DATA]: {
          movies,
        },
        [NameSpace.APP]: {
          genre: `genre1`,
        }
      };

      expect(getFilteredMovies(state))
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
      const state = {
        [NameSpace.DATA]: {
          movies,
        },
        [NameSpace.APP]: {
          genre: `genre5`,
        }
      };

      expect(getFilteredMovies(state))
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
      const state = {
        [NameSpace.DATA]: {
          movies,
        },
        [NameSpace.APP]: {
          genre: `nonexistent genre`,
        }
      };

      expect(getFilteredMovies(state))
        .toEqual([]);
    });

    it(`should return all movies with all genres`, () => {
      const state = {
        [NameSpace.DATA]: {
          movies,
        },
        [NameSpace.APP]: {
          genre: ALL_GENRES_NAME,
        }
      };

      expect(getFilteredMovies(state))
        .toEqual(movies);
    });
  });

  describe(`Check creating a list of genres`, () => {
    it(`should return correct genres list`, () => {
      const state = {
        [NameSpace.DATA]: {
          movies,
        },
        [NameSpace.APP]: {
          genre: ALL_GENRES_NAME,
        }
      };
      expect(getGenres(state)).toEqual([ALL_GENRES_NAME, `genre1`, `genre2`, `genre3`, `genre4`, `genre5`]);
    });

    it(`should return correct genres list with empty movies`, () => {
      const state = {
        [NameSpace.DATA]: {
          movies: [],
        },
        [NameSpace.APP]: {
          genre: ALL_GENRES_NAME,
        }
      };
      expect(getGenres(state)).toEqual([ALL_GENRES_NAME]);
    });
  });
});
