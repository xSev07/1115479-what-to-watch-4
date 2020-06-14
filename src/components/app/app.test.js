import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const year = 2014;
const movies = [
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      promoTitle={title}
      promoGenre={genre}
      promoYear={year}
      allMovies={movies}
      onMovieTitleClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
