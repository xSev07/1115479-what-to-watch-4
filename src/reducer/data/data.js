import {parseMovie, parseMovies} from "../../adapters/movies";
import {extendObject} from "../../const";
import {parseComments} from "../../adapters/comments";

const initialState = {
  movies: [],
  promo: undefined,
  comments: {},
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(parseMovies(response.data)));
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(parseMovie(response.data)));
      });
  },
  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        const comments = {
          [filmId]: parseComments(response.data),
        };
        dispatch(ActionCreator.loadComments(comments));
      });
  },
  changeFavoriteStatus: (filmId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${parseInt(filmId, 10)}/${status ? 1 : 0}`)
      .then((response) => {
        debugger
        const actualMovie = parseMovie(response.data);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extendObject(state, {movies: action.payload});
    case ActionType.LOAD_PROMO:
      return extendObject(state, {promo: action.payload});
    case ActionType.LOAD_COMMENTS:
      const comments = extendObject(state.comments, action.payload);
      return extendObject(state, {comments});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
