import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {StarsReview} from "../../const";
import {checkCommentLength} from "../../utils/validation/validation";

const starsArray = [...Array(StarsReview.MAX).keys()].map((it) => it + 1);

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.commentRef = createRef();

    this.state = {
      rating: StarsReview.DEFAULT,
      formValid: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.formValid) {
      const formData = {
        rating: this.state.rating,
        comment: this.commentRef.current.value,
      };
      this.props.onSubmit(formData);
    }
  }

  handleFormChange() {
    this.setState((state) => {
      return {
        formValid: state.rating && checkCommentLength(this.commentRef.current.value),
      };
    });
  }

  handleRatingChange(evt) {
    this.setState({rating: parseInt(evt.target.value, 10)});
  }

  render() {
    const {formValid} = this.state;
    const {isCommentSending, commentSendingError} = this.props;

    return (
      <form
        action="#"
        className="add-review__form"
        disabled={isCommentSending}
        onChange={this.handleFormChange}
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
                    value={it} checked={it === StarsReview.DEFAULT}
                    onChange={this.handleRatingChange}
                  />
                  <label className="rating__label" htmlFor={`star-${it}`}>Rating {it}</label>
                </React.Fragment>
              )
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea ref={this.commentRef} className="add-review__textarea" name="text"
            id="review-text" placeholder="Review text"/>
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
  isCommentSending: PropTypes.bool.isRequired,
  commentSendingError: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddReviewForm;
