import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import {movies} from "../../tests-data/tests-data";

it(`Should MovieList render correctly`, () => {
  const tree = renderer
    .create(<MovieList
      movies={movies}
      onTitleClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
