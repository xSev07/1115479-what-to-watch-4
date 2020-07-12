const parseComment = (comment) => {
  const userData = comment[`user`];
  return {
    id: comment[`id`],
    userId: userData[`id`],
    userName: userData[`name`],
    rating: comment[`rating`],
    text: comment[`comment`],
    date: comment[`date`],
  };
};

const parseComments = (data) => {
  return data.map((comment) => parseComment(comment));
};

export {parseComments};
