import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {MAX_STARS_REVIEW} from "../../const";

const createStarsTemplate = (count) => {
  let res = [];

  for (let i = 1; i <= count; i++) {
    res.push(
        <React.Fragment key={i}>
          <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i}/>
          <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
        </React.Fragment>
    );
  }
  return res;
};

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.formRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.getFormData = this.getFormData.bind(this);
  }

  getFormData() {
    const form = this.formRef.current;
    const formData = {
      rating: form.rating.value,
      comment: form.text.value,
    };
    return formData;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.getFormData());
  }

  handleFormChange() {
    this.props.onChange(this.getFormData());
  }

  render() {
    const {isSubmitDisabled, isCommentSending, commentSendingError} = this.props;
    return (
      <form
        ref={this.formRef}
        action="#"
        className="add-review__form"
        disabled={isCommentSending}
        onChange={this.handleFormChange}
        style={{opacity: isSubmitDisabled ? 0.5 : 1}}
      >
        {commentSendingError && (
          <div>
            <p>Error sending comment</p>
          </div>
        )}
        <div className="rating">
          <div className="rating__stars">
            {
              createStarsTemplate(MAX_STARS_REVIEW)
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="text"
            id="review-text" placeholder="Review text"/>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isSubmitDisabled}
              onClick={this.handleSubmit}
              style={{opacity: isSubmitDisabled ? 0.5 : 1}}
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
  isSubmitDisabled: PropTypes.bool.isRequired,
  isCommentSending: PropTypes.bool.isRequired,
  commentSendingError: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddReviewForm;
