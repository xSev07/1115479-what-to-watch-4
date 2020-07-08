import {extendObject} from "./const";
import {parseMovies} from "./adapters/movies";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  genre: `all genres`,
  movies: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  SET_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_MOVIES_WITH_GENRE: `GET_MOVIES_WITH_GENRE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_MOVIES: `LOAD_MOVIES`,
};

const ActionCreator = {
  setFilterByGenre: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre || `all`,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return extendObject(state, {genre: action.payload});
    case ActionType.REQUIRED_AUTHORIZATION:
      return extendObject(state, {authorizationStatus: action.payload});
    case ActionType.LOAD_MOVIES:
      return extendObject(state, {movies: parseMovies(action.payload)});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
