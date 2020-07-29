import {ALL_GENRES_NAME, ShowedMovies} from "../../const";
import {extendObject} from "../../utils/common/common";

const initialState = {
  genre: ALL_GENRES_NAME,
  showedMoviesCount: ShowedMovies.ON_START,
  canAddMovieInList: true,
  canSendComment: false,
};

const ActionType = {
  SET_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  INCREMENT_SHOWED_MOVIES_COUNT: `INCREMENT_SHOWED_MOVIES_COUNT`,
  RESET_SHOWED_MOVIES_COUNT: `RESET_SHOWED_MOVIES_COUNT`,
  SET_CAN_ADD_MOVIE_IN_LIST: `SET_CAN_ADD_MOVIE_IN_LIST`,
  SET_CAN_SEND_COMMENT: `SET_CAN_SEND_COMMENT`,
};

const ActionCreator = {
  setFilterByGenre: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre || ALL_GENRES_NAME,
  }),
  incrementShowedMoviesCount: () => ({
    type: ActionType.INCREMENT_SHOWED_MOVIES_COUNT,
    payload: ShowedMovies.ADDITIONAL,
  }),
  resetShowedMoviesCount: () => ({
    type: ActionType.RESET_SHOWED_MOVIES_COUNT,
    payload: ShowedMovies.ON_START,
  }),
  changeAddMovieInListStatus: (status) => ({
    type: ActionType.SET_CAN_ADD_MOVIE_IN_LIST,
    payload: status,
  }),
  canSendComment: (status) => ({
    type: ActionType.SET_CAN_SEND_COMMENT,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return extendObject(state, {genre: action.payload});
    case ActionType.INCREMENT_SHOWED_MOVIES_COUNT:
      const newCount = state.showedMoviesCount + action.payload;
      return extendObject(state, {showedMoviesCount: newCount});
    case ActionType.RESET_SHOWED_MOVIES_COUNT:
      return extendObject(state, {showedMoviesCount: action.payload});
    case ActionType.SET_CAN_ADD_MOVIE_IN_LIST:
      return extendObject(state, {canAddMovieInList: action.payload});
    case ActionType.SET_CAN_SEND_COMMENT:
      return extendObject(state, {canSendComment: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
