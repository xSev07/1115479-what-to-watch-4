import React from "react";
import renderer from "react-test-renderer";
import withActiveElement from "./with-active-element";

const Component = () => {
  return (<></>);
};

const WrappedComponent = withActiveElement(Component);

it(`Should withActiveElement render correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent
          elements={[`elem1`, `elem2`, `elem3`]}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
