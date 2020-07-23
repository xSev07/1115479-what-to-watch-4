import {parseMovie, parseMovies} from "../../adapters/movies";
import {extendObject} from "../../const";
import {parseComments} from "../../adapters/comments";
import {ServerURL} from "../../api";
import {ActionCreator as AppActionCreator} from "../app/app";

const initialState = {
  movies: [],
  promo: undefined,
  comments: {},
  loadingMovies: true,
  loadingPromo: true,
  loadingError: false,
  loadingCommentsError: false,
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPDATE_MOVIE: `UPDATE_MOVIE`,
  LOADING_ERROR: `LOADING_ERROR`,
  LOADING_COMMENTS_ERROR: `LOADING_COMMENTS_ERROR`,
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
  updateMovie: (movie) => ({
    type: ActionType.UPDATE_MOVIE,
    payload: movie,
  }),
  loadingError: () => ({
    type: ActionType.LOADING_ERROR,
    payload: true,
  }),
  loadingCommentsError: (status) => ({
    type: ActionType.LOADING_COMMENTS_ERROR,
    payload: status,
  }),
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(ServerURL.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(parseMovies(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.loadingError());
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(ServerURL.PROMO_MOVIE)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(parseMovie(response.data, true)));
      })
      .catch(() => {
        dispatch(ActionCreator.loadingError());
      });
  },
  loadComments: (filmId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadingCommentsError(false));
    return api.get(`${ServerURL.COMMENTS}${filmId}`)
      .then((response) => {
        const comments = {
          [filmId]: parseComments(response.data),
        };
        dispatch(ActionCreator.loadComments(comments));
      })
      .catch(() => {
        dispatch(ActionCreator.loadingCommentsError(true));
      });
  },
  changeFavoriteStatus: (movie) => (dispatch, getState, api) => {
    dispatch(AppActionCreator.changeAddMovieInListStatus(false));
    const {id, inList} = movie;
    return api.post(`${ServerURL.FAVORITE}${parseInt(id, 10)}/${inList ? 0 : 1}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovie(parseMovie(response.data)));
        dispatch(AppActionCreator.changeAddMovieInListStatus(true));
        if (movie.isPromo) {
          dispatch(Operation.loadPromo());
        }
      })
      .catch(() => {
        dispatch(AppActionCreator.changeAddMovieInListStatus(true));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extendObject(state, {
        movies: action.payload,
        loadingMovies: false,
      });
    case ActionType.LOAD_PROMO:
      return extendObject(state, {
        promo: action.payload,
        loadingPromo: false,
      });
    case ActionType.LOAD_COMMENTS:
      const comments = extendObject(state.comments, action.payload);
      return extendObject(state, {comments});
    case ActionType.UPDATE_MOVIE:
      const newMovie = action.payload;
      const oldMovieIndex = state.movies.findIndex((it) => it.id === newMovie.id);
      const newMovies = [...state.movies.slice(0, oldMovieIndex), newMovie, ...state.movies.slice(oldMovieIndex + 1)];
      return extendObject(state, {movies: newMovies});
    case ActionType.LOADING_ERROR:
      return extendObject(state, {loadingError: action.payload});
    case ActionType.LOADING_COMMENTS_ERROR:
      return extendObject(state, {loadingCommentsError: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
