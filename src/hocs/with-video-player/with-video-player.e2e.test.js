import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlayer from "./with-video-player";
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

const WrappedComponent = withVideoPlayer(Component);

const movie = movies[0];
const poster = `img/${movie.title}.jpg`;

it(`Should playing and stopping video`, () => {
  jest.useFakeTimers();

  const element = mount(
      <WrappedComponent
        poster={poster}
        videoPreview={movie.videoPreview}
        isMuted={true}
        isPlaying={false}
      />
  );

  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {
    return new Promise(() => {});
  });
  const load = jest.spyOn(window.HTMLMediaElement.prototype, `load`).mockImplementation(() => {});

  element.setState({isPlaying: true});
  element.instance().handleVideoPause();
  expect(element.state(`isPlaying`)).toBe(false);
  element.instance().handleVideoPlay();
  setTimeout(() => expect(element.state(`isPlaying`)).toBe(true), 1000);
  jest.runAllTimers();

  play.mockRestore();
  load.mockRestore();
});
