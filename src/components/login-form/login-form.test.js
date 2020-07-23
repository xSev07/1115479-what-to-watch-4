import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "./login-form";

describe(`Should LoginForm render correctly`, () => {
  it(`should render basic form`, () => {
    const tree = renderer
      .create(
          <LoginForm
            authError={false}
            incorrectEmail={false}
            incorrectPassword={false}
            onSubmit={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render form with auth error`, () => {
    const tree = renderer
      .create(
          <LoginForm
            authError={true}
            incorrectEmail={false}
            incorrectPassword={false}
            onSubmit={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render form with incorrect email`, () => {
    const tree = renderer
      .create(
          <LoginForm
            authError={false}
            incorrectEmail={true}
            incorrectPassword={false}
            onSubmit={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render form with incorrect password`, () => {
    const tree = renderer
      .create(
          <LoginForm
            authError={false}
            incorrectEmail={false}
            incorrectPassword={true}
            onSubmit={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
