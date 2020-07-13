import React from "react";
import {transformDate} from "../../utils/common/common";

const getCommentTemplate = (comment) => {
  const {author, text, date, rating} = comment;
  const formatedDate = transformDate(date);
  return (
    <div className="review">
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
  const commentsList = Object.values(comments);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsList.map((it) => getCommentTemplate(it))}
      </div>
      <div className="movie-card__reviews-col">

      </div>
    </div>
  );
};

export default MovieReview;
