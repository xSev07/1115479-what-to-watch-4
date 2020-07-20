import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;

export const getUserAvatar = (state) => {
  return state[NAME_SPACE].avatar;
};

export const getLoginErrorStatus = (state) => {
  return state[NAME_SPACE].loginError;
};

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getIncorrectEmailStatus = (state) => {
  return state[NAME_SPACE].incorrectEmail;
};

export const getIncorrectPasswordStatus = (state) => {
  return state[NAME_SPACE].incorrectPassword;
};
