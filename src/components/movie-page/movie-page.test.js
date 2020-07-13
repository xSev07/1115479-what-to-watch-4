import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import {movies, storeData} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "../../api";
import MockAdapter from "axios-mock-adapter";
import {Operation} from "../../reducer/data/data";

const mockStore = configureStore([thunk]);
const store = mockStore(storeData);

const api = createAPI(() => {});

const serverComments =
  {
    id: 1,
    user: {
      id: 4,
      name: `User`,
    },
    rating: 6,
    comment: `Comment text`,
    date: new Date(`1995-12-17T03:24:00`),
  };

it(`Should MoviePage render correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsLoader = Operation.loadComments(1);

  apiMock
  .onGet(`/comments/1`)
  .reply(200, [JSON.stringify(serverComments)]);

  return commentsLoader(dispatch, () => {
  }, api)
  .then(() => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviePage
              movie={movies[0]}
            />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
