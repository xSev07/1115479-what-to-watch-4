import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import configureStore from "redux-mock-store";
import {movies, storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore(storeData);


it(`Should MyList render correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <StaticRouter>
          <MyList
            movies={movies}
            loadingError={false}
            isLoading={false}
            loadFavoriteMovies={() => {}}
          />
        </StaticRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
