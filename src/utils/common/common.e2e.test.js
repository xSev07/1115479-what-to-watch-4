import {getImageURL, getRatingTextDescription} from "./common";
import {ImageType, TextRating} from "../../const";

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

describe(`Check the rating is correct`, () => {
  it(`should return correct rating with boundary value`, () => {
    expect(getRatingTextDescription(0.0)).toBe(TextRating.BAD);
  });

  it(`should return correct rating with median value`, () => {
    expect(getRatingTextDescription(6.7)).toBe(TextRating.GOOD);
  });

  it(`should return correct rating witch overwhelming value`, () => {
    expect(getRatingTextDescription(10.4)).toBe(TextRating.NOT_FOUND);
  });

  it(`should return correct rating witch negative value`, () => {
    expect(getRatingTextDescription(-1.5)).toBe(TextRating.NOT_FOUND);
  });

  it(`should return correct rating witch empty value`, () => {
    expect(getRatingTextDescription()).toBe(TextRating.NOT_FOUND);
  });
});
