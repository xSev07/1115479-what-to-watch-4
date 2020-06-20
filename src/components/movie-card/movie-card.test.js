import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const title = `Test movie`;

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          id={`Test-1234`}
          title={title}
          onClick={() => {}}
          onHover={() => {}}
        />
    );

  expect(tree).toMatchSnapshot();
});
