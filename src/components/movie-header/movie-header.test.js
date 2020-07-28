import React from "react";
import renderer from "react-test-renderer";
import {movies, storeData} from "../../tests-data/tests-data";
import MovieHeader from "./movie-header.jsx";
import {StaticRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";

const mockStore = configureStore([]);
const store = mockStore(storeData);

describe(`Should MovieHeader render correctly`, () => {
  it(`should render with review button`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Provider store={store} >
              <MovieHeader
                movie={movies[0]}
                needAddReviewButton={true}
                disableAddInList={false}
                onInListButtonClick={() => {}}
              />
            </Provider>
          </StaticRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render without review button`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Provider store={store} >
              <MovieHeader
                movie={movies[0]}
                needAddReviewButton={false}
                disableAddInList={false}
                onInListButtonClick={() => {}}
              />
            </Provider>
          </StaticRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with disabled add in list button`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <Provider store={store} >
              <MovieHeader
                movie={movies[0]}
                needAddReviewButton={true}
                disableAddInList={true}
                onInListButtonClick={() => {}}
              />
            </Provider>
          </StaticRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with no authorized user`, () => {
    const newData = Object.assign({},
        storeData[NameSpace.USER],
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH
        });
    const newStoreData = Object.assign({},
        storeData,
        {[NameSpace.USER]: newData});
    const newStore = mockStore(newStoreData);

    const tree = renderer
      .create(
          <StaticRouter>
            <Provider store={newStore} >
              <MovieHeader
                movie={movies[0]}
                needAddReviewButton={true}
                disableAddInList={false}
                onInListButtonClick={() => {}}
              />
            </Provider>
          </StaticRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
