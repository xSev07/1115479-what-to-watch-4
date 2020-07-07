import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";
import {genres, movies} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should Catalog render correctly`, () => {
  const store = mockStore({
    movies,
    genre: `all genres`
  });

  const tree = renderer
    .create(
        <Catalog
          store={store}
          movies={movies}
          genres={genres}
          activeGenre={`all genres`}
          onGenreClick={() => {}}
          onMovieCardClick={() => {}}
        >
        </Catalog>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
