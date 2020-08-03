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

      this.videoRef = createRef();

      this.state = {
        duration: 0,
        currentTime: 0,
        isPlaying: false,
      };

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
      this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
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
          onPlayButtonClick={this.handlePlayButtonClick}
          onFullscreenButtonClick={this.handleFullScreenButtonClick}
          onExitButtonClick={this.handleExitButtonClick}
        >
          <video
            ref={this.videoRef}
            className="player__video"
            preload="metadata"
            onClick={this.handlePlayButtonClick}
          />
        </Component>
      );
    }

    handlePlayButtonClick() {
      this.setState((state) => {
        return {isPlaying: !state.isPlaying};
      });
    }

    handleFullScreenButtonClick() {
      this.videoRef.current.requestFullscreen();
    }

    handleExitButtonClick() {
      this.props.history.goBack();
    }

    componentDidMount() {
      this._isMounted = true;
      const {movie} = this.props;
      const {video: src, preview} = movie;
      const video = this.videoRef.current;
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
      this.videoRef = null;
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
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
    history: PropTypes.object,
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

export {withFullscreenVideoPlayer};
export default composedHoc;
