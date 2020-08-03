import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFullscreenVideoPlayer} from "./with-fullscreen-video-player";
import {movies} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should playing and stopping video with fullscreen video player`, () => {
  const element = mount(
      <WrappedComponent
        movie={movies[0]}
        history={{}}
        goBack={() => {}}
      />
  );

  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
  const load = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

  element.instance().handlePlayButtonClick();
  expect(element.state(`isPlaying`)).toBe(true);
  element.instance().handlePlayButtonClick();
  expect(element.state(`isPlaying`)).toBe(false);

  play.mockRestore();
  load.mockRestore();
});
