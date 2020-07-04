import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import {genres, movies, promoMovie} from "../../tests-data/tests-data";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          promo={promoMovie}
          movies={movies}
          genres={genres}
          activeGenre={`all genres`}
          onGenreClick={() => {}}
          onMovieCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
