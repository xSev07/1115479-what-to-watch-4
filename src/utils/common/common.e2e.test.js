import {getImageURL} from "./common";
import {ImageType} from "../../const";

describe(`Valid image url`, () => {
  it(`should return the correct address preview`, () => {
    expect(getImageURL(`Test Image`, ImageType.PREVIEW)).toBe(`img/test-image.jpg`);
  });

  it(`should return the correct address poster`, () => {
    expect(getImageURL(`Test Image`, ImageType.POSTER)).toBe(`img/test-image-poster.jpg`);
  });

  it(`should return the correct address cover`, () => {
    expect(getImageURL(`Test Image`, ImageType.COVER)).toBe(`img/bg-test-image.jpg`);
  });

  it(`should return the correct address preview with 1 letter`, () => {
    expect(getImageURL(`Test`, ImageType.PREVIEW)).toBe(`img/test.jpg`);
  });

  it(`should return empty address`, () => {
    expect(getImageURL(``, ImageType.PREVIEW)).toBe(``);
  });

  it(`should return the correct address preview with :`, () => {
    expect(getImageURL(`:Test: Image:`, ImageType.PREVIEW)).toBe(`img/test-image.jpg`);
  });
});
