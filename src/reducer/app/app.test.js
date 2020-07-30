import {reducer, ActionCreator, ActionType} from "./app";
import {ALL_GENRES_NAME} from "../../const";

const movies = [
  {
    genre: `genre1`
  },
  {
    genre: `genre1`
  },
  {
    genre: `genre1`
  },
  {
    genre: `genre3`
  },
  {
    genre: `genre4`
  },
  {
    genre: `genre5`
  },
  {
    genre: `genre5`
  }
];

describe(`Check app reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: ALL_GENRES_NAME,
      showedMoviesCount: 8,
      canAddMovieInList: true,
      canSendComment: false,
    });
  });

  describe(`Check correct set genre`, () => {
    it(`should return correct genre`, () => {
      expect(reducer({
        genre: ALL_GENRES_NAME,
        movies
      }, {
        type: ActionType.SET_FILTER_GENRE,
        payload: `genre1`,
      })).toEqual({
        genre: `genre1`,
        movies
      });
    });

    it(`should return all genre`, () => {
      expect(reducer({
        genre: `genre1`,
        movies
      }, {
        type: ActionType.SET_FILTER_GENRE,
        payload: ALL_GENRES_NAME,
      })).toEqual({
        genre: ALL_GENRES_NAME,
        movies
      });
    });
  });

  describe(`Check correct changing showed movies count`, () => {
    it(`should return increment state`, () => {
      expect(reducer({
        showedMoviesCount: 10,
      }, {
        type: ActionType.INCREMENT_SHOWED_MOVIES_COUNT,
        payload: 5,
      })).toEqual({
        showedMoviesCount: 15
      });
    });

    it(`should return reset state`, () => {
      expect(reducer({
        showedMoviesCount: 10,
      }, {
        type: ActionType.RESET_SHOWED_MOVIES_COUNT,
        payload: 5,
      })).toEqual({
        showedMoviesCount: 5
      });
    });
  });

  it(`Check correct change add movie in list status`, () => {
    expect(reducer({
      canAddMovieInList: true,
    }, {
      type: ActionType.SET_CAN_ADD_MOVIE_IN_LIST,
      payload: false,
    })).toEqual({
      canAddMovieInList: false
    });
  });

  describe(`Check action creator work correctly`, () => {
    it(`Action creator for set genre returns correct action`, () => {
      expect(ActionCreator.setFilterByGenre(`genre2`)).toEqual({
        type: ActionType.SET_FILTER_GENRE,
        payload: `genre2`,
      });
    });

    it(`Action creator for set genre returns correct action with empty genre`, () => {
      expect(ActionCreator.setFilterByGenre()).toEqual({
        type: ActionType.SET_FILTER_GENRE,
        payload: ALL_GENRES_NAME,
      });
    });

    it(`Action creator for increment showed movies count returns correct action`, () => {
      expect(ActionCreator.incrementShowedMoviesCount()).toEqual({
        type: ActionType.INCREMENT_SHOWED_MOVIES_COUNT,
        payload: 8,
      });
    });

    it(`Action creator for reset showed movies count returns correct action`, () => {
      expect(ActionCreator.resetShowedMoviesCount()).toEqual({
        type: ActionType.RESET_SHOWED_MOVIES_COUNT,
        payload: 8,
      });
    });

    it(`Action creator for chande add movie in list status returns correct action`, () => {
      expect(ActionCreator.changeAddMovieInListStatus(true)).toEqual({
        type: ActionType.SET_CAN_ADD_MOVIE_IN_LIST,
        payload: true,
      });
    });
  });
});
