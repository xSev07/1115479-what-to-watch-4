import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {movies, promoMovie} from "../../tests-data/tests-data";

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(<App
      promoMovie={promoMovie}
      allMovies={movies}
      onMovieTitleClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
