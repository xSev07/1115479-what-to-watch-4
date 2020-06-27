import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {movies} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = movies[0];

describe(`MovieCardComponent`, () => {
  it(`should check hover on the card`, () => {
    const onCardHover = jest.fn();

    const movieCard = shallow(
        <MovieCard
          id={movie.id}
          title={movie.title}
          year={movie.year}
          videoPreview={movie.videoPreview}
          onClick={() => {}}
          onHover={onCardHover}
        />
    );
    const card = movieCard.find(`article.small-movie-card`);

    const mockEvent = {
      currentTarget: `card`,
    };

    card.simulate(`mouseover`, mockEvent);

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover.mock.calls[0][0]).toMatch(`card`);
  });
});
