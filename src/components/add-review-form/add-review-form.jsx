import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {StarsReview} from "../../const";
import withCommentValidation from "../../hocs/with-comment-validation/with-comment-validation.jsx";

const starsArray = [...Array(StarsReview.MAX).keys()].map((it) => it + 1);

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {rating, comment, formValid, onSubmit} = this.props;
    if (formValid) {
      const formData = {
        rating,
        comment,
      };
      onSubmit(formData);
    }
  }

  render() {
    const {rating, comment, formValid, isCommentSending, commentSendingError,
      onRatingChange, onCommentChange} = this.props;

    return (
      <form
        action="#"
        className="add-review__form"
        disabled={isCommentSending}
        style={{opacity: isCommentSending ? 0.5 : 1}}
      >
        {commentSendingError && (
          <div>
            <p>Error sending comment</p>
          </div>
        )}
        <div className="rating">
          <div className="rating__stars">
            {
              starsArray.map((it) =>
                <React.Fragment key={it}>
                  <input className="rating__input" id={`star-${it}`} type="radio" name="rating"
                    value={it} checked={it === rating}
                    onChange={onRatingChange}
                  />
                  <label className="rating__label" htmlFor={`star-${it}`}>Rating {it}</label>
                </React.Fragment>
              )
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea value={comment} className="add-review__textarea" name="text"
            id="review-text" placeholder="Review text" onChange={onCommentChange}/>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!formValid}
              onClick={this.handleSubmit}
              style={{opacity: formValid ? 1 : 0.5}}
            >
            Post
            </button>
          </div>

        </div>
      </form>
    );
  }
}

AddReviewForm.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  formValid: PropTypes.bool.isRequired,
  isCommentSending: PropTypes.bool.isRequired,
  commentSendingError: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export {AddReviewForm};
export default withCommentValidation(AddReviewForm);
