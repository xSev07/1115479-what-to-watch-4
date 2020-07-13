import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";
import {movies} from "../../tests-data/tests-data";


it(`Should MovieDetails render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetails
          {...movies[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
