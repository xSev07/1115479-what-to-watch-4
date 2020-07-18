import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveElement from "./with-active-element";

Enzyme.configure({
  adapter: new Adapter(),
});

const Component = () => {
  return (<></>);
};

const WrappedComponent = withActiveElement(Component);

it(`Should switch active element`, () => {
  const element = shallow(
      <WrappedComponent
        elements={[`elem1`, `elem2`, `elem3`]}
      />
  );

  expect(element.state(`activeElement`)).toBe(`elem1`);
  element.instance()._tabClickHandler(`elem2`);
  expect(element.state(`activeElement`)).toBe(`elem2`);
});
