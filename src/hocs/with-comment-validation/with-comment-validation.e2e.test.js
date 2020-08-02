import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCommentValidation from "./with-comment-validation";
import {StarsReview} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

const Component = () => {
  return (<></>);
};

const WrappedComponent = withCommentValidation(Component);

it(`Should change withCommentValidations state`, () => {
  const element = shallow(
      <WrappedComponent/>
  );

  expect(element.state(`rating`)).toBe(StarsReview.DEFAULT);
  element.instance().handleRatingChange({target: {value: 5}});
  expect(element.state(`rating`)).toBe(5);

  expect(element.state(`comment`)).toBe(``);
  element.instance().handleCommentChange({target: {value: `test string`}});
  expect(element.state(`comment`)).toBe(`test string`);
});
