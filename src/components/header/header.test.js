import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import configureStore from "redux-mock-store";
import {storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";

const mockStore = configureStore([]);
const store = mockStore(storeData);

describe(`Should Header render correctly`, () => {
  it(`should render Header with main link`, () => {
    const tree = renderer
      .create(
          <Provider store={store} >
            <Header/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render Header with empty link`, () => {
    const tree = renderer
      .create(
          <Provider store={store} >
            <Header
              isMainPage={true}
            />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
