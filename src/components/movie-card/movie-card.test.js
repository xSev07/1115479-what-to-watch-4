import React from "react";
import renderer from "react-test-renderer";
import {MovieCard} from "./movie-card";
import {movies} from "../../tests-data/tests-data";
import {StaticRouter} from "react-router-dom";

const movie = movies[0];
const children = <></>;

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <MovieCard
            id={movie.id}
            title={movie.title}
            videoPreview={movie.videoPreview}
            poster={`img/${movie.title}.jpg`}
            onClick={() => {}}
            onPlay={() => {}}
            onPause={() => {}}
          >
            {children}
          </MovieCard>
        </StaticRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
