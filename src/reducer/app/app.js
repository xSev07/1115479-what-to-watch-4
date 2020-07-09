import {extendObject} from "../../const";

const initialState = {
  genre: `all genres`,
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
