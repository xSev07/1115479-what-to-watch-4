import React from "react";
import renderer from "react-test-renderer";
import AddReviewForm from "./add-review-form";

describe(`Should AddReviewForm render correctly`, () => {
  it(`should render basic`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            isSubmitDisabled={false}
            isCommentSending={false}
            commentSendingError={false}
            onSubmit={() => {}}
            onChange={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with submit disabled`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            isSubmitDisabled={true}
            isCommentSending={false}
            commentSendingError={false}
            onSubmit={() => {}}
            onChange={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with sending error`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            isSubmitDisabled={false}
            isCommentSending={false}
            commentSendingError={true}
            onSubmit={() => {}}
            onChange={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
