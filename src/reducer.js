import {extendObject} from "./const";

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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return extendObject(state, {genre: action.payload});
    case ActionType.REQUIRED_AUTHORIZATION:
      return extendObject(state, {authorizationStatus: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus};
