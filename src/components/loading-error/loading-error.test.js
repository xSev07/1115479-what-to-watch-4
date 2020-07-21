import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";
import LoadingError from "./loading-error";

const mockStore = configureStore([]);
const store = mockStore(storeData);

it(`Should LoadingError render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store} >
          <StaticRouter>
            <LoadingError/>
          </StaticRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
