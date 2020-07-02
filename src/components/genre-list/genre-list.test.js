import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";

it(`Should GenreList render correctly`, () => {
  const tree = renderer
    .create(
        <GenreList
          genres={[`genre1`, `genre2`, `genre3`]}
          activeGenre={`genre2`}
          onClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
