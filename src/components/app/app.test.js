import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {movies, promoMovie, storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

describe(`Should App render correctly`, () => {
  it(`should render correctly basic`, () => {
    const store = mockStore(storeData);

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              allMovies={movies}
              promoMovie={promoMovie}
              // loadingMovies={false}
              // loadingPromo={false}
              // loadingError={false}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly loading screen (loading movies)`, () => {
    const newData = Object.assign({},
        storeData[NameSpace.DATA],
        {
          loadingMovies: true
        });
    const newStoreData = Object.assign({},
        storeData,
        {[NameSpace.DATA]: newData});
    const store = mockStore(newStoreData);

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              allMovies={movies}
              promoMovie={promoMovie}
              // loadingMovies={true}
              // loadingPromo={false}
              // loadingError={false}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly loading screen (loading promo)`, () => {
    const newData = Object.assign({},
        storeData[NameSpace.DATA],
        {
          loadingPromo: true
        });
    const newStoreData = Object.assign({},
        storeData,
        {[NameSpace.DATA]: newData});
    const store = mockStore(newStoreData);

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              allMovies={movies}
              promoMovie={promoMovie}
              // loadingMovies={false}
              // loadingPromo={true}
              // loadingError={false}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly loading error screen`, () => {
    const newData = Object.assign({},
        storeData[NameSpace.DATA],
        {
          loadingError: true
        });
    const newStoreData = Object.assign({},
        storeData,
        {[NameSpace.DATA]: newData});
    const store = mockStore(newStoreData);

    const tree = renderer
      .create(
          <Provider store={store} >
            <App
              allMovies={movies}
              promoMovie={promoMovie}
              // loadingMovies={false}
              // loadingPromo={false}
              // loadingError={true}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
