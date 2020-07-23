import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {promoMovie, storeData} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

const store = mockStore(storeData);

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <Main
              promo={promoMovie}
              canAddMovieInList={true}
              changeFavoriteStatus={()=>{}}
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
