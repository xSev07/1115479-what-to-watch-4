import React, {createRef} from "react";
import {MAX_STARS_REVIEW} from "../const";

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

const AddReviewForm = (props) => {
  const {isSubmitDisabled, onSubmit, onChange} = props;
  const formRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      rating: formRef.current.rating.value,
      comment: formRef.current.text.value,
    };
    onSubmit(formData);
  };

  const handleFormChange = () => {
    const formData = {
      rating: formRef.current.rating.value,
      comment: formRef.current.text.value,
    };
    onChange(formData);
  };

  return (
    <form ref={formRef} action="#" className="add-review__form" onChange={handleFormChange}>
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
            onClick={handleSubmit}
            style={{opacity: isSubmitDisabled ? 0.5 : 1}}
          >
            Post
          </button>
        </div>

      </div>
    </form>
  );
};

export default AddReviewForm;
