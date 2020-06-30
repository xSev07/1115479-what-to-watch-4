import {extendObject} from "./const";

const initialState = {
  genre: `all`,
  movies: [],
};

const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extendObject(state, state);
    case ActionType.GET_MOVIES_BY_GENRE:
      return extendObject(state, state);
  }

  return state;
};

export {reducer, ActionType};
