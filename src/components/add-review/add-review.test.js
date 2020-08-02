import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import {movies, storeData} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Should AddReview render correctly`, () => {
  const store = mockStore(storeData);

  const tree = renderer
    .create(
        <Provider store={store}>
          <StaticRouter>
            <AddReview
              movie={movies[0]}
              isCommentSending={false}
              commentSendingError={false}
              history={{}}
              handleFormSubmit={() => {}}
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
