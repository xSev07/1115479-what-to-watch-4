import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {transformDuration} from "../../utils/common/common";
import {getMovieByID} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {compose} from "redux";

const withFullscreenVideoPlayer = (Component) => {
  class FullscreenVideoPlayerHoc extends PureComponent {
    constructor(props) {

      super(props);

      this._videoRef = createRef();

      this.state = {
        duration: 0,
        currentTime: 0,
        isPlaying: false,
      };

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
    }

    render() {
      const {isPlaying, currentTime, duration} = this.state;
      const togglerPosition = (currentTime / duration * 100) || 0;
      const elapsedTime = transformDuration(duration - currentTime);

      return (
        <Component
          isPlaying={isPlaying}
          togglerPosition={togglerPosition}
          elapsedTime={elapsedTime}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullscreenButtonClick={this._handleFullScreenButtonClick}
          onExitButtonClick={this._handleExitButtonClick}
        >
          <video
            ref={this._videoRef}
            className="player__video"
            preload="metadata"
            onClick={this._handlePlayButtonClick}
          />
        </Component>
      );
    }

    _handlePlayButtonClick() {
      this.setState((state) => {
        return {isPlaying: !state.isPlaying};
      });
    }

    _handleFullScreenButtonClick() {
      this._videoRef.current.requestFullscreen();
    }

    _handleExitButtonClick() {
      window.history.back();
    }

    componentDidMount() {
      this._isMounted = true;
      const {movie} = this.props;
      const {video: src, preview} = movie;
      const video = this._videoRef.current;
      video.src = src;
      video.poster = preview;

      video.onloadedmetadata = () => {
        this.setState({duration: video.duration});
      };

      video.ontimeupdate = () => {
        if (this._isMounted) {
          this.setState({currentTime: Math.floor(video.currentTime)});
        }
      };

      video.onended = () => {
        this.setState({
          currentTime: 0,
          isPlaying: false,
        });
      };
    }

    componentWillUnmount() {
      this._isMounted = false;
      this._videoRef = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  FullscreenVideoPlayerHoc.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }).isRequired,
  };

  return FullscreenVideoPlayerHoc;
};

const mapStateToProps = (state, props) => ({
  movie: getMovieByID(state, {movieId: props.movieId}),
});

const composedHoc = compose(
    connect(mapStateToProps),
    withFullscreenVideoPlayer
);

export default composedHoc;
