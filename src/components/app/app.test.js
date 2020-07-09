import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {movies, promoMovie} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should App render correctly`, () => {
  const store = mockStore({
    movies,
    promo: promoMovie,
    genre: `all genres`,
  });

  const tree = renderer
    .create(
        <Provider store={store} >
          <App/>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
