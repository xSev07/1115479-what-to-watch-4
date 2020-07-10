import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {promoMovie, storeData} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const store = mockStore(storeData);

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            promo={promoMovie}
            onMovieCardClick={()=>{}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
