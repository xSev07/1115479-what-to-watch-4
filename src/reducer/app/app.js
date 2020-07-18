import {ALL_GENRES_NAME, extendObject} from "../../const";

const initialState = {
  genre: ALL_GENRES_NAME,
  loginStatus: false,
};

const ActionType = {
  SET_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
};

const ActionCreator = {
  setFilterByGenre: (genre) => ({
    type: ActionType.SET_FILTER_GENRE,
    payload: genre || ALL_GENRES_NAME,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_GENRE:
      return extendObject(state, {genre: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
