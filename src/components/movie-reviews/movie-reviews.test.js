import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";

describe(`Should MovieReview render correctly`, () => {
  it(`should render correctly with 1 comment`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            comments={[{
              commentId: `1`,
              userId: `10`,
              author: `Test`,
              rating: 5.2,
              text: `Test string`,
              date: new Date(`1995-12-17T03:24:00`),
            }]}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly with 2 comments`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            comments={[{
              commentId: `1`,
              userId: `10`,
              author: `Test`,
              rating: 5.2,
              text: `Test string`,
              date: new Date(`1995-12-17T03:24:00`),
            },
            {
              commentId: `2`,
              userId: `12`,
              author: `Test2`,
              rating: 8,
              text: `Test string 2`,
              date: new Date(`1997-11-10T13:24:00`),
            }
            ]}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
