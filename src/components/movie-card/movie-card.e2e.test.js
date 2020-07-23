import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieCard} from "./movie-card";
import {movies} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = movies[0];
const children = <></>;

describe(`MovieCardComponent`, () => {
  it(`should check actions on the card`, () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    const movieCard = shallow(
        <MovieCard
          id={movie.id}
          title={movie.title}
          videoPreview={movie.videoPreview}
          poster={`img/${movie.title}.jpg`}
          onPlay={onMouseEnter}
          onPause={onMouseLeave}
        >
          {children}
        </MovieCard>
    );
    const card = movieCard.find(`article.small-movie-card`);

    card.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    card.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
