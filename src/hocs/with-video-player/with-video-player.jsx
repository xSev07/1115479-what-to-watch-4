import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../../components/video-player/video-player.jsx";

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
          <VideoPlayer
            ref={this._videoRef}
          />
        </Component>
      );
    }

    _handleVideoPlay() {
      this._timeoutPlayingID = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    }

    _handleVideoPause() {
      clearTimeout(this._timeoutPlayingID);
      this.setState({isPlaying: false});
    }

    componentDidMount() {
      const {poster, videoPreview, isMuted} = this.props;
      const video = this._videoRef.current;
      video.poster = poster;
      video.src = videoPreview;
      video.muted = isMuted;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = null;
      video.poster = null;
      video.muted = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  return VideoPlayerHoc;
};

export default withVideoPlayer;
