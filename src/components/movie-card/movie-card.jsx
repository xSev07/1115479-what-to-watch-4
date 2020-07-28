import React from "react";
import PropTypes from "prop-types";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const MovieCard = (props) => {
  const {id, title, onPlay, onPause} = props;
  const url = AppRoute.MOVIE.replace(`:id`, id);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onPlay}
      onMouseLeave={onPause}
    >
      <Link
        className="small-movie-card__link"
        to={url}
      >
        <div className="small-movie-card__image">
          {props.children}
        </div>
        <h3 className="small-movie-card__title">
          {title}
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoPreview: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export {MovieCard};
export default withVideoPlayer(MovieCard);
