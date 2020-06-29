import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import {movies} from "../../tests-data/tests-data";

it(`Should MoviePage render correctly`, () => {
  const tree = renderer
    .create(
        <MoviePage
          movie={movies[0]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
