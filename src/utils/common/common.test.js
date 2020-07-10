import {
  getRatingTextDescription,
  transformToFirstCapitalSymbol
} from "./common";
import {TextRating} from "../../const";

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

describe(`Check the string transform is correct`, () => {
  it(`should return correct string with one letter`, () => {
    expect(transformToFirstCapitalSymbol(`test`)).toBe(`Test`);
  });

  it(`should return correct string with two letters`, () => {
    expect(transformToFirstCapitalSymbol(`test string`)).toBe(`Test string`);
  });

  it(`should return correct string with empty string`, () => {
    expect(transformToFirstCapitalSymbol(``)).toBe(``);
  });

  it(`should return correct string with uppercase string`, () => {
    expect(transformToFirstCapitalSymbol(`TEST`)).toBe(`Test`);
  });
});
