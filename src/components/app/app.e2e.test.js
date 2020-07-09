import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {movies, promoMovie, storeData} from "../../tests-data/tests-data";
import Main from "../main/main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const store = mockStore(storeData);

describe(`Checks interaction with movie cards`, () => {
  it(`Should check click on the title or image in movie card`, () => {
    const onClick = jest.fn();

    const movieList = mount(
        <Provider store={store}>
          <Main
            promo={promoMovie}
            onMovieCardClick={onClick}
          />
        </Provider>
    );

    const movieCards = movieList.find(`article.small-movie-card`);
    movieCards.forEach((it) => it.simulate(`click`));

    expect(onClick).toHaveBeenCalledTimes(movies.length);
    expect(onClick.mock.calls[0][0]).toMatch(movies[0].id);
  });
});
