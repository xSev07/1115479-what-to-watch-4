import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieDescription from "./movie-description";
import {comments, movies} from "../../tests-data/tests-data";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should switch active element in MovieDescription`, () => {
  const element = shallow(
      <MovieDescription
        movie={movies[0]}
        comments={comments}
        loadingCommentsError={true}
        activeTabDefault={`Reviews`}
        onElementClick={() => {}}
      />
  );

  expect(element.state(`activeElement`)).toBe(`Reviews`);
  element.instance().tabClickHandler(`Overview`);
  expect(element.state(`activeElement`)).toBe(`Overview`);
});
