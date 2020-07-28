import {ActionType, Operation, reducer} from "./data";
import {createAPI} from "../../api";
import {movies, promoMovie} from "../../tests-data/tests-data";
import {ActionCreator} from "./data";
import MockAdapter from "axios-mock-adapter";

const api = createAPI(() => {});
// TODO: Написать тесты на получение комментариев
describe(`Check data reducer work correctly`, () => {
  it(`reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      favoriteMovies: [],
      promo: undefined,
      comments: {},
      loadingMovies: true,
      loadingFavoriteMovies: false,
      loadingPromo: true,
      loadingError: false,
      loadingFavoriteError: false,
      loadingCommentsError: false,
    });
  });

  it(`reducer should update movies by load movies`, () => {
    expect(reducer({
      movies: []
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    })).toEqual({
      movies,
      loadingMovies: false,
    });
  });

  it(`reducer should update promo movie by load promo movie`, () => {
    expect(reducer({
      promo: undefined
    }, {
      type: ActionType.LOAD_PROMO,
      payload: promoMovie,
    })).toEqual({
      promo: promoMovie,
      loadingPromo: false,
    });
  });

  describe(`Check action creator work correctly`, () => {
    it(`Action creator for load movie returns correct action`, () => {
      expect(ActionCreator.loadMovies(movies)).toEqual({
        type: ActionType.LOAD_MOVIES,
        payload: movies,
      });
    });

    it(`Action creator for set genre returns correct action with empty genre`, () => {
      expect(ActionCreator.loadPromo(promoMovie)).toEqual({
        type: ActionType.LOAD_PROMO,
        payload: promoMovie,
      });
    });
  });
});

describe(`Operation in data reducer work correctly`, () => {
  const serverMovie = {
    [`background_color`]: ``,
    [`background_image`]: ``,
    [`description`]: ``,
    [`director`]: ``,
    [`genre`]: ``,
    [`id`]: 0,
    [`is_favorite`]: false,
    [`name`]: ``,
    [`poster_image`]: ``,
    [`preview_image`]: ``,
    [`preview_video_link`]: ``,
    [`rating`]: 0,
    [`released`]: 0,
    [`run_time`]: 0,
    [`scores_count`]: 0,
    [`starring`]: [``, ``, ``],
    [`video_link`]: ``,
    [`isPromo`]: false,
  };

  it(`should make a correct API call to /films`, () => {
    const convertedMovie = {
      id: `0`,
      actors: [``, ``, ``],
      description: [``],
      duration: 0,
      genre: ``,
      inList: false,
      producer: ``,
      rating: 0,
      title: ``,
      video: ``,
      videoPreview: ``,
      votes: 0,
      year: 0,
      poster: ``,
      preview: ``,
      background: ``,
      backgroundColor: ``,
      isPromo: false,
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [serverMovie]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [convertedMovie],
        });
      });
  });

  it(`should make a correct API call to /films/promo`, () => {
    const convertedMovie = {
      id: `0`,
      actors: [``, ``, ``],
      description: [``],
      duration: 0,
      genre: ``,
      inList: false,
      producer: ``,
      rating: 0,
      title: ``,
      video: ``,
      videoPreview: ``,
      votes: 0,
      year: 0,
      poster: ``,
      preview: ``,
      background: ``,
      backgroundColor: ``,
      isPromo: true,
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, serverMovie);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: convertedMovie,
        });
      });
  });
});
