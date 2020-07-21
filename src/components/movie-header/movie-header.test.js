import React from "react";
import renderer from "react-test-renderer";
import {movies} from "../../tests-data/tests-data";
import MovieHeader from "./movie-header.jsx";

describe(`Should MovieHeader render correctly`, () => {
  it(`should render with review button`, () => {
    const tree = renderer
      .create(
          <MovieHeader
            movie={movies[0]}
            needAddReviewButton={true}
            disableAddInList={false}
            onInListButtonClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render without review button`, () => {
    const tree = renderer
      .create(
          <MovieHeader
            movie={movies[0]}
            needAddReviewButton={false}
            disableAddInList={false}
            onInListButtonClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with disabled add in list button`, () => {
    const tree = renderer
      .create(
          <MovieHeader
            movie={movies[0]}
            needAddReviewButton={true}
            disableAddInList={true}
            onInListButtonClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
