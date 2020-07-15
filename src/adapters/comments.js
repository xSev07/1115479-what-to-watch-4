const parseComment = (comment) => {
  const userData = comment.user;
  return {
    commentId: comment.id.toString(),
    userId: userData.id.toString(),
    author: userData.name,
    rating: comment.rating,
    text: comment.comment,
    date: new Date(comment.date),
  };
};

const parseComments = (data) => {
  return data.map((comment) => parseComment(comment));
};

export {parseComments};
