import {ActionCreator, ActionType, reducer} from "./reducer";

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

describe(`Check correct works with genres`, ()=> {

  // it(`Reducer without additional parameters should return initial state`, () => {
  //   expect(reducer(undefined, {})).toEqual({
  //     genre: `all`,
  //     movies: initialMovies,
  //   });
  // });

  describe(`Check correct set genre`, () => {
    it(`should return correct genre`, () => {
      expect(reducer({
        genre: `all`,
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
        payload: `all`,
      })).toEqual({
        genre: `all`,
        movies
      });
    });

    // it(`should return all genre with empty genre`, () => {
    //   expect(reducer({
    //     genre: `genre1`,
    //     movies
    //   }, {
    //     type: ActionType.SET_FILTER_GENRE,
    //     payload: ``,
    //   })).toEqual({
    //     genre: `all`,
    //     movies
    //   });
    // });
  });

  // describe(`Check correct get movies`, () => {
  //   it(`should return not changed movies`, () => {
  //     expect(reducer({
  //       genre: `genre2`,
  //       movies,
  //     }, {
  //       type: ActionType.GET_MOVIES_WITH_GENRE
  //     })).toEqual({
  //       genre: `genre2`,
  //       movies,
  //     });
  //   });

  // it(`should return movies with unique genre`, () => {
  //   expect(reducer({
  //     genre: `all`,
  //     movies,
  //   }, {
  //     type: ActionType.GET_MOVIES_BY_GENRE,
  //     payload: `genre4`0
  //   })).toEqual({
  //     genre: `genre4`,
  //     filteredMovies: [
  //       {
  //         genre: [`genre4`]
  //       }
  //     ],
  //   });
  // });


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
      payload: `all`,
    });
  });
});
