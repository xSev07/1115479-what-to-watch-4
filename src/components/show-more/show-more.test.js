import renderer from "react-test-renderer";
import React from "react";
import ShowMore from "./show-more";

it(`should ShowMore render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
