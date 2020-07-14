import {ALL_GENRES_NAME} from "../../const";
import NameSpace from "../name-space";
import {getFilteredMovies, getGenres} from "./selectors";

const movies = [
  {
    id: `1`,
    genre: `genre1`
  },
  {
    id: `2`,
    genre: `genre2`
  },
  {
    id: `3`,
    genre: `genre3`
  },
  {
    id: `4`,
    genre: `genre4`
  },
  {
    id: `5`,
    genre: `genre4`
  },
  {
    id: `6`,
    genre: `genre4`
  }
];

describe(`Check app selector work correctly`, () => {
  describe(`Check filtered movies by state is correct`, () => {
    it(`should return movies with unique genre`, () => {
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
            id: `1`,
            genre: `genre1`
          }
        ]);
    });

    it(`should return movies with same genre`, () => {
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
            id: `4`,
            genre: `genre4`
          },
          {
            id: `5`,
            genre: `genre4`
          },
          {
            id: `6`,
            genre: `genre4`
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

  describe(`Check filtered movies by movie id is correct`, () => {
    const state = {
      [NameSpace.DATA]: {
        movies,
      },
    };

    it(`should return movies with unique genre`, () => {
      expect(getFilteredMovies(state, {movieId: `1`}))
        .toEqual([
          {
            id: `1`,
            genre: `genre1`
          }
        ]);
    });

    it(`should return movies with same genre`, () => {
      expect(getFilteredMovies(state, {movieId: `5`}))
        .toEqual([
          {
            id: `4`,
            genre: `genre4`
          },
          {
            id: `5`,
            genre: `genre4`
          },
          {
            id: `6`,
            genre: `genre4`
          }
        ]);
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
      expect(getGenres(state)).toEqual([ALL_GENRES_NAME, `genre1`, `genre2`, `genre3`, `genre4`]);
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
