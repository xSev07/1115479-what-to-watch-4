import React from "react";
import renderer from "react-test-renderer";
import {Catalog} from "./catalog";
import {genres, movies} from "../../tests-data/tests-data";
import {StaticRouter} from "react-router-dom";

describe(`Should Catalog render correctly`, () => {
  it(`Should render with show more button`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Catalog
              // store={store}
              movies={movies}
              genres={genres}
              activeGenre={`all genres`}
              showedMoviesCount={2}
              onGenreClick={() => {}}
              onShowMoreClick={() => {}}
            />
          </StaticRouter>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render without show more button`, () => {
    const tree = renderer
    .create(
        <StaticRouter>
          <Catalog
            // store={store}
            movies={movies}
            genres={genres}
            activeGenre={`all genres`}
            showedMoviesCount={8}
            onGenreClick={() => {}}
            onShowMoreClick={() => {}}
          />
        </StaticRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
