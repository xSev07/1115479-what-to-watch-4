import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
  class VideoPlayerHoc extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      const {isPlaying} = props;

      this.state = {
        isPlaying,
      };

      this._timeoutPlayingID = null;
      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleVideoPause = this._handleVideoPause.bind(this);
    }

    render() {
      return (
        <Component
          onPlay={this._handleVideoPlay}
          onPause={this._handleVideoPause}
          {...this.props}
        >
          <video
            ref={this._videoRef}
            width="280"
            height="175"
          />
        </Component>
      );
    }

    _handleVideoPlay() {
      this._timeoutPlayingID = setTimeout(() => {
        if (this._isMounted) {
          this.setState({isPlaying: true});
        }
      }, 1000);
    }

    _handleVideoPause() {
      clearTimeout(this._timeoutPlayingID);
      this.setState({isPlaying: false});
    }

    componentDidMount() {
      this._isMounted = true;
      const {poster, isMuted} = this.props;
      const video = this._videoRef.current;
      video.poster = poster;
      video.muted = isMuted;
    }

    componentWillUnmount() {
      this._isMounted = false;
      const video = this._videoRef.current;
      video.src = null;
      video.poster = null;
      video.muted = null;
    }

    componentDidUpdate() {
      const {videoPreview} = this.props;
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.src = videoPreview;
        video.play();
      } else {
        video.src = null;
        video.load();
      }
    }
  }

  VideoPlayerHoc.propTypes = {
    poster: PropTypes.string.isRequired,
    videoPreview: PropTypes.string.isRequired,
    isMuted: PropTypes.bool,
    isPlaying: PropTypes.bool,
  };

  return VideoPlayerHoc;
};

export default withVideoPlayer;
