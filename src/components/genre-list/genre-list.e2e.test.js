import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreList from "./genre-list";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`should check click on genre`, () => {
  const onClick = jest.fn();
  const genreList = mount(
      <GenreList
        genres={[`genre1`, `genre2`, `genre3`]}
        activeGenre={`genre1`}
        onClick={onClick}/>
  );

  const genreLinks = genreList.find(`a.catalog__genres-link`);
  genreLinks.forEach((it) => it.simulate(`click`));

  expect(onClick).toHaveBeenCalledTimes(3);
});
