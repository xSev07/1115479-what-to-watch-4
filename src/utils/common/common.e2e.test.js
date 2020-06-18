import {getImageURL} from "./common";
import {PosterType} from "../../const";

describe(`Valid image url`, () => {
  it(`should return the correct address preview`, () => {
    expect(getImageURL(`Test Image`, PosterType.PREVIEW)).toBe(`img/test-image.jpg`);
  });

  it(`should return the correct address poster`, () => {
    expect(getImageURL(`Test Image`, PosterType.POSTER)).toBe(`img/test-image-poster.jpg`);
  });

  it(`should return the correct address cover`, () => {
    expect(getImageURL(`Test Image`, PosterType.COVER)).toBe(`img/bg-test-image.jpg`);
  });

  it(`should return the correct address preview with 1 letter`, () => {
    expect(getImageURL(`Test`, PosterType.PREVIEW)).toBe(`img/test.jpg`);
  });

  it(`should return empty address`, () => {
    expect(getImageURL(``, PosterType.PREVIEW)).toBe(``);
  });

  it(`should return the correct address preview with :`, () => {
    expect(getImageURL(`:Test: Image:`, PosterType.PREVIEW)).toBe(`img/test-image.jpg`);
  });
});
