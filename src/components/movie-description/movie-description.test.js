import React from "react";
import renderer from "react-test-renderer";
import {MovieDescription} from "./movie-description";
import {movies} from "../../tests-data/tests-data";

it(`Should MovieDescription render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDescription
          {...movies[0]}
          comments={[{
            commentId: `1`,
            userId: `10`,
            author: `Test`,
            rating: 5.2,
            text: `Test string`,
            date: new Date(`1995-12-17T03:24:00`),
          }]}
          loadComments={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
