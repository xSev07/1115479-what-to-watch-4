import {extendObject} from "./const";
import movies from "./mocks/movies";

const initialState = {
  genre: `all genres`,
  movies,
};

const ActionType = {
  SET_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_MOVIES_WITH_GENRE: `GET_MOVIES_WITH_GENRE`,
};

const ActionCreator = {
  setFilterByGenre: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre || `all`,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return extendObject(state, {genre: action.payload});
    // case ActionType.GET_MOVIES_WITH_GENRE:
    //   return state;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
