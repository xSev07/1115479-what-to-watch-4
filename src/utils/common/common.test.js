import {
  filterMoviesByGenre,
  getGenres,
  getRatingTextDescription,
  transformToFirstCapitalSymbol
} from "./common";
import {ALL_GENRES_NAME, TextRating} from "../../const";

const movies = [
  {
    genre: [`genre1`]
  },
  {
    genre: [`genre1`, `genre2`]
  },
  {
    genre: [`genre1`, `genre2`, `genre3`]
  },
  {
    genre: [`genre3`]
  },
  {
    genre: [`genre4`]
  },
  {
    genre: [`genre5`]
  },
  {
    genre: [`genre5`]
  }
];

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

describe(`Check the filtered movies is correct`, () => {
  it(`should return movies with unique genre`, () => {
    expect(filterMoviesByGenre(movies, `genre4`))
      .toEqual([
        {
          genre: [`genre4`]
        }
      ]);
  });

  it(`should return movies with not unique genre`, () => {
    expect(filterMoviesByGenre(movies, `genre1`))
      .toEqual([
        {
          genre: [`genre1`]
        },
        {
          genre: [`genre1`, `genre2`]
        },
        {
          genre: [`genre1`, `genre2`, `genre3`]
        }
      ]);
  });

  it(`should return movies with same genre`, () => {
    expect(filterMoviesByGenre(movies, `genre5`))
      .toEqual([
        {
          genre: [`genre5`]
        },
        {
          genre: [`genre5`]
        }
      ]);
  });

  it(`should return no movies with nonexistent genre`, () => {
    expect(filterMoviesByGenre(movies, `nonexistent genre`))
      .toEqual([]);
  });

  it(`should return all movies with all genres`, () => {
    expect(filterMoviesByGenre(movies, ALL_GENRES_NAME))
      .toEqual(movies);
  });
});

describe(`Check creating a list of genres`, () => {
  it(`should return correct genres list`, () => {
    expect(getGenres(movies)).toEqual([ALL_GENRES_NAME, `genre1`, `genre2`, `genre3`, `genre4`, `genre5`]);
  });

  it(`should return correct genres list with empty movies`, () => {
    expect(getGenres([])).toEqual([ALL_GENRES_NAME]);
  });
});
