import React from "react";
import renderer from "react-test-renderer";
import {PrivateLink} from "./private-link";
import {StaticRouter} from "react-router-dom";

describe(`Should PrivateLink render correctly`, () => {
  it(`should render button`, () => {
    const tree = renderer
      .create(
          <PrivateLink
            className={`test`}
            userAuthorized={true}
          >
            <span>Button</span>
          </PrivateLink>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render link`, () => {
    const tree = renderer
      .create(
          <StaticRouter>
            <PrivateLink
              className={`test`}
              userAuthorized={false}
            >
              <span>Link</span>
            </PrivateLink>
          </StaticRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
