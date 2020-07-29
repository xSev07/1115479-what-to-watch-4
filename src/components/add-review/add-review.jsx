import React from "react";
import Header from "../header/header.jsx";
import {getMovieByID} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import AddReviewForm from "../../add-review-form/add-review-form.jsx";
import {Operation as DataOperation} from "../../reducer/data/data";
import {ActionCreator} from "../../reducer/app/app";
import {getCanSendComment} from "../../reducer/app/selectors";
import {checkCommentLength} from "../../utils/validation/validation";
import {extendObject} from "../../utils/common/common";

const AddReview = (props) => {
  const {movie, isSubmitDisabled, handleFormSubmit, handleFormChange} = props;
  const {title, poster, background} = movie;

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
                <Link to={AppRoute.ROOT} className="breadcrumbs__link">{title}</Link>
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
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFormChange(formData) {
    const {rating, comment} = formData;
    if (rating && checkCommentLength(comment)) {
      dispatch(ActionCreator.canSendComment(true));
    } else {
      dispatch(ActionCreator.canSendComment(false));
    }
  },
  addComment(formData) {
    const {rating, comment} = formData;
    const commentData = {
      rating: parseInt(rating, 10),
      comment,
    };
    dispatch(DataOperation.addComment(ownProps.movieId, commentData));
  },
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

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddReview);
