import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";
import {comments} from "../../tests-data/tests-data";

describe(`Should MovieReview render correctly`, () => {
  it(`should render correctly with 1 comment`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            comments={[comments[0]]}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly with 2 comments`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            comments={comments}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
