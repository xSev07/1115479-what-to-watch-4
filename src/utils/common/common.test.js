import {
  getRatingTextDescription, transformRuntime,
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

describe(`Check the runtime transform is correct`, () => {
  it(`should return correct time with 99 minutes`, () => {
    expect(transformRuntime(99)).toBe(`1h 39m`);
  });

  it(`should return correct time with 90 minutes`, () => {
    expect(transformRuntime(90)).toBe(`1h 30m`);
  });

  it(`should return correct time with 61 minutes`, () => {
    expect(transformRuntime(61)).toBe(`1h 01m`);
  });

  it(`should return correct time with 60 minutes`, () => {
    expect(transformRuntime(60)).toBe(`1h`);
  });

  it(`should return correct time with 59 minutes`, () => {
    expect(transformRuntime(59)).toBe(`59m`);
  });

  it(`should return correct time with 5 minutes`, () => {
    expect(transformRuntime(5)).toBe(`05m`);
  });
});
