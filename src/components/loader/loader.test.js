import React from "react";
import renderer from "react-test-renderer";
import Loader from "./loader.jsx";
import configureStore from "redux-mock-store";
import {storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore(storeData);

it(`Should Loader render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store} >
          <StaticRouter>
            <Loader/>
          </StaticRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
