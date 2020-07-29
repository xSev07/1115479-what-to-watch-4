export const checkCommentLength = (comment) => {
  return comment.length >= 50 && comment.length <= 400;
};
