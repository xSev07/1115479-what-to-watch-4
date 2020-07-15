import React from "react";
import renderer from "react-test-renderer";
import {MovieDescription} from "./movie-description";
import {comments, movies} from "../../tests-data/tests-data";

it(`Should MovieDescription render correctly`, () => {
  const tree = renderer
    .create(
        <MovieDescription
          movie={movies[0]}
          comments={comments}
          elements={[`Overview`, `Details`, `Reviews`]}
          activeElement={`Overview`}
          onElementClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
