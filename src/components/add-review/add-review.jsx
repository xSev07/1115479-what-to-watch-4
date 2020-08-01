import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {
  getCommentSendedStatus,
  getMovieByID,
  getSendingCommentError,
  getSendingCommentStatus
} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {AppRoute} from "../../const";
import AddReviewForm from "../add-review-form/add-review-form.jsx";
import {Operation as DataOperation} from "../../reducer/data/data";
import {ActionCreator as AppActionCreator} from "../../reducer/app/app";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data";
import {getCanSendComment} from "../../reducer/app/selectors";
import {checkCommentLength} from "../../utils/validation/validation";
import {extendObject, replaceId} from "../../utils/common/common";

const AddReview = (props) => {
  const {movie, isSubmitDisabled, isCommentSending, commentSendingError, isCommentSended,
    history, historyGoBack, handleFormSubmit, handleFormChange} = props;
  if (isCommentSended) {
    // в таком варианте не работает(писал в телеге)
    historyGoBack(history);
  }

  const {title, poster, background} = movie;
  const movieLink = replaceId(AppRoute.MOVIE, movie.id);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={movieLink} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm
          isSubmitDisabled={isSubmitDisabled}
          isCommentSending={isCommentSending}
          commentSendingError={commentSendingError}
          onSubmit={handleFormSubmit}
          onChange={handleFormChange}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state, props) => ({
  movie: getMovieByID(state, {movieId: props.movieId}),
  isSubmitDisabled: !getCanSendComment(state),
  isCommentSending: getSendingCommentStatus(state),
  isCommentSended: getCommentSendedStatus(state),
  commentSendingError: getSendingCommentError(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFormChange(formData) {
    const {rating, comment} = formData;
    if (rating && checkCommentLength(comment)) {
      dispatch(AppActionCreator.canSendComment(true));
    } else {
      dispatch(AppActionCreator.canSendComment(false));
    }
  },
  addComment(formData) {
    const {rating, comment} = formData;
    const commentData = {
      rating: parseInt(rating, 10),
      comment,
    };
    dispatch(DataOperation.sendComment(ownProps.movieId, commentData));
  },
  historyGoBack(history) {
    dispatch(DataActionCreator.setCommentSended(false));
    history.goBack();
  }
});

const mergeProps = (stateProps, dispatchProps) => {
  return extendObject(
      stateProps,
      dispatchProps,
      {
        handleFormSubmit(formData) {
          if (!stateProps.isSubmitDisabled) {
            dispatchProps.addComment(formData);
          }
        }
      }
  );

};

AddReview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  isCommentSending: PropTypes.bool.isRequired,
  isCommentSended: PropTypes.bool.isRequired,
  commentSendingError: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  historyGoBack: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(withRouter(AddReview));
