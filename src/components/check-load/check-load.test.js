import React from "react";
import renderer from "react-test-renderer";
import CheckLoad from "./check-load";

const component = () => <span>test</span>;

describe(`Should CheckLoad render correctly`, () => {
  it(`Should render without errors`, () => {
    const tree = renderer
      .create(
          <CheckLoad
            component={component}
            loadingError={false}
            isLoading={false}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render with load error`, () => {
    const tree = renderer
      .create(
          <CheckLoad
            component={component}
            loadingError={true}
            isLoading={false}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render with waiting download`, () => {
    const tree = renderer
      .create(
          <CheckLoad
            component={component}
            loadingError={false}
            isLoading={true}
          />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
