import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`MainComponent`, () => {
  it(`should movie title clicked`, function () {
    const onMovieTitleClick = jest.fn();

    const main = shallow(
        <Main
          promo={promoMovie}
          movies={movies}
          onTitleClick={onMovieTitleClick}
        />
    );
    const movieTitles = main.find(`a.small-movie-card__link`);
    movieTitles.forEach((it) => it.simulate(`click`));

    expect(onMovieTitleClick).toHaveBeenCalledTimes(movies.length);
  });
});
