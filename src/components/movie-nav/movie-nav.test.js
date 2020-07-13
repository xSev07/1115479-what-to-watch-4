import React from "react";
import renderer from "react-test-renderer";
import MovieNav from "./movie-nav";

it(`Should MovieNav render correctly`, () => {
  const tree = renderer
    .create(
        <MovieNav
          tabs={[`tab1`, `tab2`, `tab3`]}
          activeTab={`tab2`}
          onClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
