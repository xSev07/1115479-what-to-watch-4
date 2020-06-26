import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    const {muted} = props;

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
      isMuted: muted,
    };
  }

  componentDidMount() {
    const {poster, videoPreview} = this.props;
    const {isMuted} = this.state;
    const video = this._videoRef.current;
    video.poster = poster;
    video.src = videoPreview;
    video.width = 280;
    video.height = 175;
    video.muted = isMuted;

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
    if (this.state.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    // const {onMouseOver, onMouseLeave} = this.props;

    return (
      <video
        ref={this._videoRef}
        // onMouseOver={() => {
        //   // this.setState({isPlaying: true});
        //   onMouseOver();
        // }}
        // onMouseLeave={() => {
        //   // this.setState({isPlaying: false});
        //   onMouseLeave();
        // }}
        onMouseOver={() => {
          this._timeoutPlayingID = setTimeout(() => this.setState({isPlaying: true}), 1000);
        }}
        onMouseLeave={() => {
          clearTimeout(this._timeoutPlayingID);
          this.setState({isPlaying: false});
        }}
      >
      </video>
    );
  }
}
