import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const movies = [
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`
];

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      promoMovie={promoMovie}
      allMovies={movies}
      onMovieTitleClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
