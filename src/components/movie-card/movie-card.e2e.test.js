import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const title = `Test movie`;

describe(`MovieCardComponent`, () => {
  it(`should check hover on the card`, () => {
    const onCardHover = jest.fn();

    const movieCard = shallow(
        <MovieCard
          title={title}
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
