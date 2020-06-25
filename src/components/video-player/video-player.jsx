import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    const {poster, videoPreview} = this.props;
    const video = this._videoRef.current;
    video.poster = poster;
    video.src = videoPreview;
    video.width = 280;
    video.height = 175;
    video.muted = true;
  }

  componentWillUnmount() {
    this._videoRef.src = null;
    this._videoRef.poster = null;
    this._videoRef = null;
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
    return (
      <video
        ref={this._videoRef}
        // onMouseOver={() => {
        //   setTimeout(() => this.setState({isPlaying: true}), 1000);
        // }
        // }
        onMouseOver={() => this.setState({isPlaying: true})}
        onMouseLeave={() => this.setState({isPlaying: false})}
      >
      </video>
      // {/*<video*/}
      // {/*  width="280"*/}
      // {/*  height="175"*/}
      // {/*  muted*/}
      // {/*  poster={poster}*/}
      // {/*  onMouseOver={() => }*/}
      // {/*>*/}
      // {/*  <source src={videoPreview}/>*/}
      // {/*   Sorry, your browser doesnt support embedded videos.*/}
      // {/*</video>*/}
    );
  }
}
