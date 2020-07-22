import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page";
import {comments, movies, storeData} from "../../tests-data/tests-data";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Should MoviePage render correctly`, () => {
  const store = mockStore(storeData);
  const tree = renderer
      .create(
          <Provider store={store}>
            <StaticRouter>
              <MoviePage
                movies={movies}
                movie={movies[0]}
                comments={comments}
                userAuthorized={true}
                canAddMovieInList={true}
                loadComments={() => {}}
                onMovieCardClick={() => {}}
                changeFavoriteStatus={() => {}}
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
