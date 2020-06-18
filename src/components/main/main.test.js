import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const movies = [
  {
    actors: [],
    description: ``,
    duration: 0,
    genre: ``,
    inList: false,
    producer: ``,
    rate: ``,
    reviews: [],
    title: `Bohemian Rhapsody`,
    votes: ``,
    year: 2000,
  },
  {
    actors: [],
    description: ``,
    duration: 0,
    genre: ``,
    inList: false,
    producer: ``,
    rate: ``,
    reviews: [],
    title: `Macbeth`,
    votes: ``,
    year: 2000,
  },
  {
    actors: [],
    description: ``,
    duration: 0,
    genre: ``,
    inList: false,
    producer: ``,
    rate: ``,
    reviews: [],
    title: `Aviator`,
    votes: ``,
    year: 2000,
  }
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
