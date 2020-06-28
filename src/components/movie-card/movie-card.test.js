import React from "react";
import renderer from "react-test-renderer";
import {MovieCard} from "./movie-card";
import {movies} from "../../tests-data/tests-data";

const movie = movies[0];
const children = <></>;

it(`Should MovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          id={movie.id}
          title={movie.title}
          videoPreview={movie.videoPreview}
          poster={`img/${movie.title}.jpg`}
          onClick={() => {}}
          onHover={() => {}}
          onPlay={() => {}}
          onPause={() => {}}
        >
          {children}
        </MovieCard>, {
          createNodeMock: () => {
            return {};
          }
        }
    );

  expect(tree).toMatchSnapshot();
});
