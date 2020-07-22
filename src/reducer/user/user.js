import {extendObject} from "../../const";
import {BASE_SERVER_URL, ServerURL} from "../../api";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatar: ``,
  loginError: false,
  incorrectEmail: false,
  incorrectPassword: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_AVATAR: `ADD_AVATAR`,
  SET_LOGIN_ERROR_STATUS: `SET_LOGIN_ERROR_STATUS`,
  SET_INCORRECT_EMAIL: `SET_INCORRECT_EMAIL`,
  SET_INCORRECT_PASSWORD: `SET_INCORRECT_PASSWORD`,
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
  setLoginErrorStatus: (status) => ({
    type: ActionType.SET_LOGIN_ERROR_STATUS,
    payload: status,
  }),
  setIncorrectEmail: (status) => ({
    type: ActionType.SET_INCORRECT_EMAIL,
    payload: status,
  }),
  setIncorrectPassword: (status) => ({
    type: ActionType.SET_INCORRECT_PASSWORD,
    payload: status,
  }),
};

const writeUserInfo = (data, dispatch) => {
  const {avatar_url: avatarURL} = data;
  dispatch(ActionCreator.addAvatar(`${BASE_SERVER_URL}${avatarURL}`));
  dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(ServerURL.LOGIN)
      .then((response) => {
        writeUserInfo(response.data, dispatch);
      })
      .catch(() => {});
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(ServerURL.LOGIN, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setLoginErrorStatus(false));
        writeUserInfo(response.data, dispatch);
      })
      .catch(() => {});
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extendObject(state, {authorizationStatus: action.payload});
    case ActionType.ADD_AVATAR:
      return extendObject(state, {avatar: action.payload});
    case ActionType.SET_LOGIN_ERROR_STATUS:
      return extendObject(state, {loginError: action.payload});
    case ActionType.SET_INCORRECT_EMAIL:
      return extendObject(state, {incorrectEmail: action.payload});
    case ActionType.SET_INCORRECT_PASSWORD:
      return extendObject(state, {incorrectPassword: action.payload});
  }

  return state;
};

export {reducer, ActionType, ActionCreator, AuthorizationStatus, Operation};
