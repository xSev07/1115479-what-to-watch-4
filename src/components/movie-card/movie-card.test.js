import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {movies} from "../../tests-data/tests-data";

const movie = movies[0];

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          id={movie.id}
          title={movie.title}
          year={movie.year}
          videoPreview={movie.videoPreview}
          onClick={() => {}}
          onHover={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    );

  expect(tree).toMatchSnapshot();
});
