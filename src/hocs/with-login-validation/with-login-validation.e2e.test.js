import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withLoginValidation from "./with-login-validation";

Enzyme.configure({
  adapter: new Adapter(),
});

const Component = () => {
  return (<></>);
};

const WrappedComponent = withLoginValidation(Component);

describe(`Should change withLoginValidation state`, () => {
  it(`should dont change state`, () => {
    const element = shallow(
        <WrappedComponent/>
    );

    expect(element.state(`incorrectEmail`)).toBe(false);
    expect(element.state(`incorrectPassword`)).toBe(false);

    element.instance().checkValidity({
      email: `test@gmail.com`,
      password: `12345`,
    });

    expect(element.state(`incorrectEmail`)).toBe(false);
    expect(element.state(`incorrectPassword`)).toBe(false);
  });

  it(`should change state`, () => {
    const element = shallow(
        <WrappedComponent/>
    );

    expect(element.state(`incorrectEmail`)).toBe(false);
    expect(element.state(`incorrectPassword`)).toBe(false);

    element.instance().checkValidity({
      email: `test`,
      password: `11`,
    });

    expect(element.state(`incorrectEmail`)).toBe(true);
    expect(element.state(`incorrectPassword`)).toBe(true);
  });
});
