import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {genres, movies} from "../../tests-data/tests-data";
import {Catalog} from "./catalog";
import configureStore from "redux-mock-store";
import {StaticRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const store = mockStore({
  movies,
  genre: `all genres`
});

it(`Should check click actions in the catalog component`, () => {
  const onGenreClick = jest.fn();
  const onShowMoreClick = jest.fn();

  const catalog = mount(
      <StaticRouter>
        <Catalog
          store={store}
          movies={movies}
          genres={genres}
          activeGenre={`all genres`}
          displayShowMoreButton={true}
          onGenreClick={onGenreClick}
          onShowMoreClick={onShowMoreClick}
        />
      </StaticRouter>
  );
  const genreLinks = catalog.find(`a.catalog__genres-link`);
  genreLinks.first().simulate(`click`);

  const showMoreButton = catalog.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(onGenreClick).toHaveBeenCalledTimes(1);
  expect(onShowMoreClick).toHaveBeenCalledTimes(1);
});
