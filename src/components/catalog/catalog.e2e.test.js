import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {genres, movies} from "../../tests-data/tests-data";
import {Catalog} from "./catalog";
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const store = mockStore({
  movies,
  genre: `all genres`
});

describe(`CatalogComponent`, () => {
  it(`should check click actions in the catalog component`, () => {
    const onMovieCardClick = jest.fn();
    const onGenreClick = jest.fn();

    const catalog = mount(
        <Catalog
          store={store}
          movies={movies}
          genres={genres}
          activeGenre={`all genres`}
          onGenreClick={onGenreClick}
          onMovieCardClick={onMovieCardClick}
        />
    );
    const movieTitles = catalog.find(`a.small-movie-card__link`);
    movieTitles.forEach((it) => it.simulate(`click`));

    const genreLinks = catalog.find(`a.catalog__genres-link`);
    genreLinks.first().simulate(`click`);

    expect(onMovieCardClick).toHaveBeenCalledTimes(movies.length);
    expect(onGenreClick).toHaveBeenCalledTimes(1);
  });
});
