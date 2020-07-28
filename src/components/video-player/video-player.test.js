import React from "react";
import renderer from "react-test-renderer";
import {VideoPlayer} from "./video-player";

const innerComponent = <video/>;

describe(`Should VideoPlayer render correctly`, () => {
  it(`should render with start parameters`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            isPlaying={false}
            togglerPosition={0}
            elapsedTime={`1:30:00`}
            onPlayButtonClick={() => {}}
            onFullscreenButtonClick={() => {}}
            onExitButtonClick={() => {}}
          >
            {innerComponent}
          </VideoPlayer>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with custom parameters`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            isPlaying={true}
            togglerPosition={30}
            elapsedTime={`1:10:00`}
            onPlayButtonClick={() => {}}
            onFullscreenButtonClick={() => {}}
            onExitButtonClick={() => {}}
          >
            {innerComponent}
          </VideoPlayer>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
