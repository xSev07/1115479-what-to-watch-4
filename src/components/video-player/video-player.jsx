import React from "react";
import PropTypes from "prop-types";
import withFullscreenVideoPlayer from "../../hocs/with-fullscreen-video-player/with-fullscreen-video-player.jsx";
import {withRouter} from "react-router-dom";

const VideoPlayer = (props) => {
  const {
    isPlaying,
    togglerPosition,
    elapsedTime,
    onPlayButtonClick,
    onFullscreenButtonClick,
    onExitButtonClick,
  } = props;

  return (
    <div className="player">
      {props.children}
      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={togglerPosition} max="100"/>
            <div className="player__toggler" style={{left: `${togglerPosition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{elapsedTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onFullscreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref={`#full-screen`}></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.element,
  isPlaying: PropTypes.bool.isRequired,
  togglerPosition: PropTypes.number.isRequired,
  elapsedTime: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export {VideoPlayer};
export default withRouter(withFullscreenVideoPlayer(VideoPlayer));
