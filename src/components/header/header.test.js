import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

describe(`Should Header render correctly`, () => {
  it(`should render Header with main link`, () => {
    const tree = renderer
      .create(
          <Header/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render Header with empty link`, () => {
    const tree = renderer
      .create(
          <Header
            isMainPage={true}
          >
          </Header>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
