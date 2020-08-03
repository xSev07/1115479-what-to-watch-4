export const checkCommentLength = (comment) => {
  return comment.length >= 50 && comment.length <= 400;
};

export const isValidEmail = (email) => {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};

export const isValidPassword = (password) => {
  return password.length > 2;
};
