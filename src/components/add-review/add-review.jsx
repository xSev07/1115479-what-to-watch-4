import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {
  getMovieByID,
  getSendingCommentError,
  getSendingCommentStatus
} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {AppRoute} from "../../const";
import AddReviewForm from "../add-review-form/add-review-form.jsx";
import {Operation as DataOperation} from "../../reducer/data/data";
import {replaceId} from "../../utils/common/common";
import {compose} from "redux";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isCommentSending === true
      && this.props.isCommentSending === false
      && !this.props.commentSendingError) {
      this.props.history.goBack();
    }
  }

  render() {
    const {movie, isCommentSending, commentSendingError,
      handleFormSubmit} = this.props;

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
            <img src={poster} alt={`${title} poster`} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <AddReviewForm
            isCommentSending={isCommentSending}
            commentSendingError={commentSendingError}
            onSubmit={handleFormSubmit}
          />
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
  isCommentSending: PropTypes.bool.isRequired,
  commentSendingError: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  movie: getMovieByID(state, {movieId: props.movieId}),
  isCommentSending: getSendingCommentStatus(state),
  commentSendingError: getSendingCommentError(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFormSubmit(formData) {
    const {rating, comment} = formData;
    const commentData = {
      rating: parseInt(rating, 10),
      comment,
    };
    dispatch(DataOperation.sendComment(ownProps.movieId, commentData));
  },
});

const composedComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(AddReview);

export {AddReview};
export default composedComponent;
