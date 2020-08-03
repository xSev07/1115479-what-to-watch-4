import React, {PureComponent} from 'react';
import {StarsReview} from "../../const";
import {checkCommentLength} from "../../utils/validation/validation";

const withCommentValidation = (Component) => {
  class CommentValidationHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: StarsReview.DEFAULT,
        comment: ``,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    handleRatingChange(evt) {
      this.setState({rating: parseInt(evt.target.value, 10)});
    }

    handleCommentChange(evt) {
      this.setState({comment: evt.target.value});
    }

    render() {
      const {rating, comment} = this.state;
      const formValid = rating && checkCommentLength(comment);
      return (
        <Component
          rating={rating}
          comment={comment}
          formValid={formValid}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          {...this.props}
        />
      );
    }
  }

  return CommentValidationHoc;
};

export default withCommentValidation;
