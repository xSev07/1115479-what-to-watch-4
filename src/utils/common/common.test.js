import {
  getRatingTextDescription, splitArrayInHalf, transformToFirstCapitalSymbol} from "./common";
import {TextRating} from "../../const";

describe(`Check the rating is correct`, () => {
  it(`should return correct rating with boundary value`, () => {
    expect(getRatingTextDescription(0.0)).toBe(TextRating.BAD);
  });

  it(`should return correct rating with median value`, () => {
    expect(getRatingTextDescription(6.7)).toBe(TextRating.GOOD);
  });

  it(`should return correct rating with overwhelming value`, () => {
    expect(getRatingTextDescription(10.4)).toBe(TextRating.NOT_FOUND);
  });

  it(`should return correct rating with negative value`, () => {
    expect(getRatingTextDescription(-1.5)).toBe(TextRating.NOT_FOUND);
  });

  it(`should return correct rating with empty value`, () => {
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

describe(`Check the array split is correct`, () => {
  it(`should return correct arrays with odd elements`, () => {
    expect(splitArrayInHalf([1, 2, 3]))
      .toEqual({
        firstHalf: [1, 2],
        secondHalf: [3]
      });
  });

  it(`should return correct arrays with even elements`, () => {
    expect(splitArrayInHalf([1, 2, 3, 4]))
      .toEqual({
        firstHalf: [1, 2],
        secondHalf: [3, 4]
      });
  });

  it(`should return correct arrays with 1 element`, () => {
    expect(splitArrayInHalf([1]))
      .toEqual({
        firstHalf: [1],
        secondHalf: []
      });
  });

  it(`should return correct arrays with 0 elements`, () => {
    expect(splitArrayInHalf([]))
      .toEqual({
        firstHalf: [],
        secondHalf: []
      });
  });

  it(`should return correct arrays with undefined`, () => {
    expect(splitArrayInHalf(undefined))
      .toEqual({
        firstHalf: [],
        secondHalf: []
      });
  });
});
