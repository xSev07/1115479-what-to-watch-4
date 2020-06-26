import React from "react";
import PropTypes from "prop-types";
import {ImageType} from "../../const";
import {getImageURL} from "../../utils/common/common";
import VideoPlayer from "../video-player/video-player.jsx";
import {PureComponent} from "react/cjs/react.production.min";

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   isPlaying: false,
    // };
  }

  render() {
    const {id, title, videoPreview, onClick, onHover} = this.props;
    const previewSrc = getImageURL(title, ImageType.PREVIEW);
    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => {
          onClick(id);
        }}
        onMouseOver={(evt) => {
          onHover(evt.currentTarget);
          // this._timeoutPlayingID = setTimeout(() => {
          //   this.setState({isPlaying: true});
          // }, 1000);
        }}
        // onMouseLeave={() => {
        //   clearTimeout(this._timeoutPlayingID);
        //   this.setState({isPlaying: false});
        // }}
      >
        {/* <div className="small-movie-card__image">*/}
        <VideoPlayer
          poster={previewSrc}
          videoPreview={videoPreview}
          muted={true}
          // onMouseOver={() => {
          //   this._timeoutPlayingID = setTimeout(() => {
          //     this.setState({isPlaying: true});
          //   }, 1000);
          // }}
          // onMouseLeave={() => {
          //   clearTimeout(this._timeoutPlayingID);
          //   this.setState({isPlaying: false});
          // }}
        />
        {/* </div>*/}
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
          >
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};
