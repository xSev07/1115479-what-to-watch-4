import React from "react";
import renderer from "react-test-renderer";
import withFullscreenVideoPlayer from "./with-fullscreen-video-player";
import {movies, storeData} from "../../tests-data/tests-data";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const Component = (props) => {
  // eslint-disable-next-line
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

const WrappedComponent = withFullscreenVideoPlayer(Component);

const mockStore = configureStore([]);

it(`Should withFullscreenVideoPlayer render correctly`, () => {
  const store = mockStore(storeData);
  const tree = renderer.create(
      <Provider store={store}>
        <WrappedComponent
          movieId={movies[0].id}
          history={{}}
          goBack={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
