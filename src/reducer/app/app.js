import {ALL_GENRES_NAME, ShowedMovies} from "../../const";
import {extendObject} from "../../utils/common/common";

const initialState = {
  genre: ALL_GENRES_NAME,
  showedMoviesCount: ShowedMovies.ON_START,
  canAddMovieInList: true,
};

const ActionType = {
  SET_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  INCREMENT_SHOWED_MOVIES_COUNT: `INCREMENT_SHOWED_MOVIES_COUNT`,
  RESET_SHOWED_MOVIES_COUNT: `RESET_SHOWED_MOVIES_COUNT`,
  CHANGE_ADD_MOVIE_IN_LIST_STATUS: `CHANGE_ADD_MOVIE_IN_LIST_STATUS`,
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
    type: ActionType.CHANGE_ADD_MOVIE_IN_LIST_STATUS,
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
    case ActionType.CHANGE_ADD_MOVIE_IN_LIST_STATUS:
      return extendObject(state, {canAddMovieInList: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
