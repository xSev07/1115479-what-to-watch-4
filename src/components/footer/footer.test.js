import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {StaticRouter} from "react-router-dom";

it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <StaticRouter>
          <Footer/>
        </StaticRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
