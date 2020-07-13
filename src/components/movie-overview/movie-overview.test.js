import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";
import {movies} from "../../tests-data/tests-data";

it(`Should MovieOverview render correctly`, () => {
  const tree = renderer
    .create(
        <MovieOverview
          {...movies[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
