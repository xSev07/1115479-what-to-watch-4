import React from "react";
import {splitArrayInHalf, transformDate} from "../../utils/common/common";
import PropTypes from "prop-types";

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

const MovieReview = (props) => {
  const {comments} = props;

  if (!comments) {
    return undefined;
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

MovieReview.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default MovieReview;
