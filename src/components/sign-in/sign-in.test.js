import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import configureStore from "redux-mock-store";
import {storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

const store = mockStore(storeData);

it(`Should SignIn render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <SignIn
              userAuthorized={false}
              authError={false}
              handleFormSubmit={() => {}}
            />
          </StaticRouter>
        </Provider>, {
          createNodeMock: () => {}
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
