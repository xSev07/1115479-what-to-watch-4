import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {movies, promoMovie} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`should movie title clicked`, () => {
    const onMovieCardClick = jest.fn();

    const main = mount(
        <Main
          promo={promoMovie}
          movies={movies}
          activeGenre={`all genres`}
          onGenreClick={() => {}}
          onMovieCardClick={onMovieCardClick}
        />
    );
    const movieTitles = main.find(`a.small-movie-card__link`);
    movieTitles.forEach((it) => it.simulate(`click`));

    expect(onMovieCardClick).toHaveBeenCalledTimes(movies.length);
  });
});
