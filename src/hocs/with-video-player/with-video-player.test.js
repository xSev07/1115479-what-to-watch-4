import React from "react";
import renderer from "react-test-renderer";
import withVideoPlayer from "./with-video-player";
import {movies} from "../../tests-data/tests-data";

const Component = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

const WrappedComponent = withVideoPlayer(Component);

const movie = movies[0];
const poster = `img/${movie.title}.jpg`;

it(`Should withVideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <WrappedComponent
        poster={poster}
        videoPreview={movie.videoPreview}
        isMuted={true}
        isPlaying={false}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
