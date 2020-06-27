import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {movies, promoMovie} from "../../tests-data/tests-data";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          promo={promoMovie}
          movies={movies}
          onMovieCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    );

  expect(tree).toMatchSnapshot();
});
