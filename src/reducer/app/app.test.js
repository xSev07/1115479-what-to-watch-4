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
      genre: ALL_GENRES_NAME
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
  });
});
