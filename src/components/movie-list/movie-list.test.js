import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import {movies} from "../../tests-data/tests-data";
import {StaticRouter} from "react-router-dom";

it(`Should MovieList render correctly`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <MovieList
            movies={movies}
            onMovieCardClick={() => {}}
          />
        </StaticRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
