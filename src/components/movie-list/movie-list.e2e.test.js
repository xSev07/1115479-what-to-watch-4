import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieList from "./movie-list";
import {movies} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MovieListComponent`, () => {
  it(`should check click on the title or image`, () => {
    const onClick = jest.fn();

    const movieList = mount(
        <MovieList
          movies={movies}
          onMovieCardClick={onClick}
        />
    );

    const movieCards = movieList.find(`article.small-movie-card`);
    movieCards.forEach((it) => it.simulate(`click`));

    expect(onClick).toHaveBeenCalledTimes(movies.length);
    // expect(onClick.mock.calls[0][0]).toMatch(movies[0].id);
  });
});
