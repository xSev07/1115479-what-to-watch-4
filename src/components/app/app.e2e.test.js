import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {genres, movies, promoMovie} from "../../tests-data/tests-data";
import {Main} from "../main/main";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Checks interaction with movie cards`, () => {
  it(`Should check click on the title or image in movie card`, () => {
    const onClick = jest.fn();

    const movieList = mount(
        <Main
          promo={promoMovie}
          movies={movies}
          genres={genres}
          activeGenre={`all genres`}
          onGenreClick={() => {}}
          onMovieCardClick={onClick}
        />
    );

    const movieCards = movieList.find(`article.small-movie-card`);
    movieCards.forEach((it) => it.simulate(`click`));

    expect(onClick).toHaveBeenCalledTimes(movies.length);
    expect(onClick.mock.calls[0][0]).toMatch(movies[0].id);
  });
});
