import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page";
import {comments, movies, storeData} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`Should MoviePage render correctly`, () => {
  const store = mockStore(storeData);
  const tree = renderer
      .create(
          <Provider store={store}>
            <MoviePage
              movie={movies[0]}
              comments={comments}
              loadComments={() => {}}
            />
          </Provider>
      ).toJSON();

  expect(tree).toMatchSnapshot();
});
