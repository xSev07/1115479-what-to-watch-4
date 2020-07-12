import React from "react";

const getCommentTemplate = (comment) => {
  const {author, text, date, rating} = comment;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>{date}</time>
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
