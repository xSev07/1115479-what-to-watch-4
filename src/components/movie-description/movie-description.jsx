import MovieNav from "../movie-nav/movie-nav.jsx";
import React from "react";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import PropTypes from "prop-types";
import withActiveElement from "../../hocs/with-active-element/with-active-element.jsx";
import {MovieTab} from "../../const";

const MovieDescription = (props) => {

  const {movie, comments, elements, activeElement, loadingCommentsError, onElementClick} = props;

  return (
    <div className="movie-card__desc">
      <MovieNav
        tabs={elements}
        activeTab={activeElement}
        onClick={onElementClick}
      />
      {activeElement === MovieTab.OVERVIEW && (
        <MovieOverview {...movie}/>
      )}
      {activeElement === MovieTab.DETAILS && (
        <MovieDetails {...movie}/>
      )}
      {activeElement === MovieTab.REVIEWS && (
        <MovieReviews comments={comments} loadingError={loadingCommentsError}/>
      )}
    </div>
  );
};

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })),
  elements: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeElement: PropTypes.string.isRequired,
  onElementClick: PropTypes.func.isRequired,
};

export {MovieDescription};
export default withActiveElement(MovieDescription);
