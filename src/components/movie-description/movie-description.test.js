import React from "react";
import renderer from "react-test-renderer";
import {MovieDescription} from "./movie-description";
import {comments, movies} from "../../tests-data/tests-data";

describe(`Should MovieDescription render correctly`, () => {
  it(`Should render overview tab`, () => {
    const tree = renderer
      .create(
          <MovieDescription
            movie={movies[0]}
            comments={comments}
            elements={[`Overview`, `Details`, `Reviews`]}
            loadingCommentsError={false}
            activeElement={`Overview`}
            onElementClick={() => {
            }}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render details tab`, () => {
    const tree = renderer
      .create(
          <MovieDescription
            movie={movies[0]}
            comments={comments}
            elements={[`Overview`, `Details`, `Reviews`]}
            loadingCommentsError={false}
            activeElement={`Details`}
            onElementClick={() => {
            }}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render reviews tab`, () => {
    const tree = renderer
      .create(
          <MovieDescription
            movie={movies[0]}
            comments={comments}
            elements={[`Overview`, `Details`, `Reviews`]}
            loadingCommentsError={false}
            activeElement={`Reviews`}
            onElementClick={() => {
            }}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render reviews tab with loading error`, () => {
    const tree = renderer
      .create(
          <MovieDescription
            movie={movies[0]}
            comments={comments}
            elements={[`Overview`, `Details`, `Reviews`]}
            loadingCommentsError={true}
            activeElement={`Reviews`}
            onElementClick={() => {
            }}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render reviews tab with waiting download comments`, () => {
    const tree = renderer
      .create(
          <MovieDescription
            movie={movies[0]}
            // comments={comments}
            elements={[`Overview`, `Details`, `Reviews`]}
            loadingCommentsError={false}
            activeElement={`Reviews`}
            onElementClick={() => {
            }}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
