import {extendObject} from "../../const";
import {BASE_SERVER_URL} from "../../api";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatar: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_AVATAR: `ADD_AVATAR`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  addAvatar: (url) => ({
    type: ActionType.ADD_AVATAR,
    payload: url,
  }),
};

const writeUserInfo = (data, dispatch) => {
  const {avatar_url: avatarURL} = data;
  dispatch(ActionCreator.addAvatar(`${BASE_SERVER_URL}${avatarURL}`));
  dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        writeUserInfo(response.data, dispatch);
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        writeUserInfo(response.data, dispatch);
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extendObject(state, {authorizationStatus: action.payload});
    case ActionType.ADD_AVATAR:
      return extendObject(state, {avatar: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
