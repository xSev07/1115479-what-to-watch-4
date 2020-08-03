import {CommentLength, EMAIL_REG_EXP, PASSWORD_MIN_LENGTH} from "../../const";

export const checkCommentLength = (comment) => {
  return comment.length >= CommentLength.MIN && comment.length <= CommentLength.MAX;
};

export const isValidEmail = (email) => {
  return EMAIL_REG_EXP.test(String(email).toLowerCase());
};

export const isValidPassword = (password) => {
  return password.length > PASSWORD_MIN_LENGTH;
};
