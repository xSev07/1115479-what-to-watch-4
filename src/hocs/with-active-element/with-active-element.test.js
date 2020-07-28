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
          activeTabDefault={`elem1`}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
