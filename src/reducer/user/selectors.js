import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;

export const getUserAvatar = (state) => {
  return state[NAME_SPACE].avatar;
};
