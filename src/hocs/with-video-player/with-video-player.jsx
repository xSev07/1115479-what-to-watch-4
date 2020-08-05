import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
  class VideoPlayerHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
        isPlaying: false,
      };

      this.timeoutPlayingID = null;
      this.handleVideoPlay = this.handleVideoPlay.bind(this);
      this.handleVideoPause = this.handleVideoPause.bind(this);
    }

    componentDidMount() {
      this._isMounted = true;
      const {poster, isMuted} = this.props;
      const video = this.videoRef.current;
      video.poster = poster;
      video.muted = isMuted;
    }

    componentDidUpdate() {
      const {videoPreview} = this.props;
      const video = this.videoRef.current;
      if (this.state.isPlaying) {
        video.src = videoPreview;
        video.play()
          .catch(() => {});
      } else {
        video.load();
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
      this.videoRef = null;
    }

    handleVideoPlay() {
      this.timeoutPlayingID = setTimeout(() => {
        if (this._isMounted) {
          this.setState({isPlaying: true});
        }
      }, 1000);
    }

    handleVideoPause() {
      clearTimeout(this.timeoutPlayingID);
      this.setState({isPlaying: false});
    }

    render() {
      return (
        <Component
          onPlay={this.handleVideoPlay}
          onPause={this.handleVideoPause}
          {...this.props}
        >
          <video
            ref={this.videoRef}
            width="280"
            height="175"
          />
        </Component>
      );
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
