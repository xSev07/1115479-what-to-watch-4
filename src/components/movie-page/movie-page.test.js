import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import {movieDetail} from "../../tests-data/tests-data";

it(`Should MoviePage render correctly`, () => {
  const tree = renderer
    .create(
        <MoviePage
          movie={movieDetail}
        />
    );

  expect(tree).toMatchSnapshot();
});
