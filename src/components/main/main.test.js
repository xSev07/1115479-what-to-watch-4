import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      promo={promoMovie}
      movies={movies}
      onTitleClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
