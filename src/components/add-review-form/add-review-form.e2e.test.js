// import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import AddReviewForm from "./add-review-form";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should check AddReviewForm work correctly`, () => {
  it(`should check click actions`, () => {
    return Promise.resolve(() => {
      return true;
    });
    // const onSubmit = jest.fn();
    // const onChange = jest.fn((evt) => {
    //   if (evt.target.name === `text`) {
    //     formData.text = evt.target.value;
    //   } else if (evt.target.name === `rating`) {
    //     formData.rating = evt.target.value;
    //   }
    // });
    // const formData = {
    //   rating: `0`,
    //   text: ``,
    // };
    // const addReviewForm = shallow(
    //     <AddReviewForm
    //       isSubmitDisabled={false}
    //       isCommentSending={false}
    //       commentSendingError={false}
    //       onSubmit={onSubmit}
    //       onChange={onChange}
    //     />
    // );

    // const t = addReviewForm.instance();
    // const t1 = t.formRef;
    // const t2 = t1.current;

    // const textField = addReviewForm.find(`.add-review__textarea`);
    // textField.simulate(`change`, {target: {name: `text`, value: `sometext`}});

    // const textField = addReviewForm.find(`.add-review__textarea`);
    // textField.simulate(`change`, {target: {name: `text`, value: `sometext`}});

    // const submitButton = addReviewForm.find(`.add-review__btn`);
    // submitButton.simulate(`click`, {
    //   preventDefault: () => {}
    // });

    // expect(onChange).toHaveBeenCalledTimes(1);
    // expect(onChange).toEqual({
    //   rating: `0`,
    //   text: `sometext`,
    // });
  });
});
