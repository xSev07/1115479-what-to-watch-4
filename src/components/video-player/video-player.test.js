import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {movies} from "../../tests-data/tests-data";

const movie = movies[0];
const previewSrc = `img/${movie.title}.jpg`;

describe(`Should VideoPlayer render correctly`, () => {
  it(`should render basic video player`, () => {
    const tree = renderer.create(
        <VideoPlayer
          poster={previewSrc}
          videoPreview={movie.videoPreview}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(tree).toMatchSnapshot();
  });

  it(`should render preview video player`, () => {
    const tree = renderer.create(
        <VideoPlayer
          poster={previewSrc}
          videoPreview={movie.videoPreview}
          isMuted={true}
          isPlaying={false}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(tree).toMatchSnapshot();
  });
});
