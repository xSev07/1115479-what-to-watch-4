// TODO: Реализовать парсинг комментариев

const parseComment = (comment) => {
  return comment;
};

const parseComments = (data) => {
  return data.map((comment) => parseComment(comment));
};

export {parseComments};
