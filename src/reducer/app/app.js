import {ALL_GENRES_NAME, extendObject} from "../../const";

const initialState = {
  genre: ALL_GENRES_NAME,
  canAddMovieInList: true,
};

const ActionType = {
  SET_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  CHANGE_ADD_MOVIE_IN_LIST_STATUS: `CHANGE_ADD_MOVIE_IN_LIST_STATUS`,
};

const ActionCreator = {
  setFilterByGenre: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre || ALL_GENRES_NAME,
  }),
  changeAddMovieInListStatus: (status) => ({
    type: ActionType.CHANGE_ADD_MOVIE_IN_LIST_STATUS,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return extendObject(state, {genre: action.payload});
    case ActionType.CHANGE_ADD_MOVIE_IN_LIST_STATUS:
      return extendObject(state, {canAddMovieInList: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
