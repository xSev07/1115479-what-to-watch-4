import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const year = 2014;
const movies = [
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      title={title}
      genre={genre}
      year={year}
      movies={movies}
      onTitleClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
