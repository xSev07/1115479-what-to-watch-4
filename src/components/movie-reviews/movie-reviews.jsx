import React from "react";
import {splitArrayInHalf, transformDate} from "../../utils/common/common";
import PropTypes from "prop-types";
import {Spinner, LoadError} from "../svg/svg.jsx";

const getCommentTemplate = (comment) => {
  const {commentId, author, text, date, rating} = comment;
  const formatedDate = transformDate(date);

  return (
    <div key={commentId} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>{formatedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

const MovieReviews = (props) => {
  const {comments, loadingError} = props;
  if (loadingError) {
    return (
      <div style={{marginTop: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
        <h2 style={{color: `#d9cd8d`}}>Извините, у нашего сервера лапки. Попробуйте позднее</h2>
        <LoadError/>
      </div>
    );
  }
  if (!comments) {
    return (
      <div style={{marginTop: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
        <Spinner/>
      </div>
    );
  }

  const halfsComments = splitArrayInHalf(comments);
  const firstCommentsColumn = halfsComments.firstHalf.map((it) => getCommentTemplate(it));
  const secondCommentsColumn = halfsComments.secondHalf.map((it) => getCommentTemplate(it));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstCommentsColumn}
      </div>
      <div className="movie-card__reviews-col">
        {secondCommentsColumn}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })),
};

export default MovieReviews;
