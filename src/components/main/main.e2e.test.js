import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";
import {movies, promoMovie} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`should check click actions in the main component`, () => {
    const onMovieCardClick = jest.fn();
    const onGenreClick = jest.fn();

    const main = mount(
        <Main
          promo={promoMovie}
          movies={movies}
          activeGenre={`all genres`}
          onGenreClick={onGenreClick}
          onMovieCardClick={onMovieCardClick}
        />
    );
    const movieTitles = main.find(`a.small-movie-card__link`);
    movieTitles.forEach((it) => it.simulate(`click`));

    const genreLinks = main.find(`a.catalog__genres-link`);
    genreLinks.first().simulate(`click`);

    expect(onMovieCardClick).toHaveBeenCalledTimes(movies.length);
    expect(onGenreClick).toHaveBeenCalledTimes(1);
  });
});
