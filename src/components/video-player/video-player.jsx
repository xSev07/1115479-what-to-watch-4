import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    // const {isPlaying, isMuted} = props;

    // this.state = {
    //   isPlaying,
    //   isMuted,
    //   isLoading: true,
    // };
  }

  componentDidMount() {
    const {poster, videoPreview, isMuted} = this.props;
    // const {isMuted} = this.state;
    const video = this._videoRef.current;
    video.poster = poster;
    video.src = videoPreview;
    video.width = 280;
    video.height = 175;
    video.muted = isMuted;

    // video.oncanplaythrough = () => this.setState({isLoading: false})
    // video.onplay = () => this.setState({isPlaying: true});
    // video.onpause = () => this.setState({isPlaying: false});
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = null;
    video.poster = null;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;
    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    return (
      <video
        ref={this._videoRef}
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  videoPreview: PropTypes.string.isRequired,
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool,
};
