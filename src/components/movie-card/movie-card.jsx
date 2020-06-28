import React from "react";
import PropTypes from "prop-types";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";

const MovieCard = (props) => {
  const {id, title, onClick, onHover, onPlay, onPause} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => {
        onClick(id);
      }}
      onMouseOver={(evt) => {
        onHover(evt.currentTarget);
        onPlay();
      }}
      onMouseLeave={() => onPause()}
    >
      <div className="small-movie-card__image">
        {props.children}
      </div>
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
};

MovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoPreview: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export {MovieCard};
export default withVideoPlayer(MovieCard);
