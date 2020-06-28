import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

describe(`Should VideoPlayer render correctly`, () => {
  it(`should render preview video player`, () => {
    const tree = renderer.create(
        <VideoPlayer/>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
