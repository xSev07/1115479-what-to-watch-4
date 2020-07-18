import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import configureStore from "redux-mock-store";
import {storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);
const store = mockStore(storeData);

describe(`Should Header render correctly`, () => {
  it(`should render basic Header`, () => {
    const tree = renderer
      .create(
          <Provider store={store} >
            <StaticRouter>
              <Header/>
            </StaticRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render Header with children and className`, () => {
    const tree = renderer
      .create(
          <Provider store={store} >
            <StaticRouter>
              <Header
                className={`test`}
              >
                <h1>Test Title</h1>
              </Header>
            </StaticRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
