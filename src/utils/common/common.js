import {ALL_GENRES_NAME, MAX_GENRES, TextRating} from "../../const";

export const getRatingTextDescription = (rating) => {
  if (rating >= 0 && rating < 3) {
    return TextRating.BAD;
  } else if (rating >= 3 && rating < 5) {
    return TextRating.NORMAL;
  } else if (rating >= 5 && rating < 8) {
    return TextRating.GOOD;
  } else if (rating >= 8 && rating < 10) {
    return TextRating.VERY_GOOD;
  } else if (rating === 10) {
    return TextRating.AWESOME;
  }
  return TextRating.NOT_FOUND;
};

export const transformToFirstCapitalSymbol = (str) => {
  if (str) {
    const lowerStr = str.toLowerCase();
    return `${lowerStr[0].toUpperCase()}${lowerStr.slice(1)}`;
  }
  return ``;
};

export const getGenres = (movies) => {
  // const genres = Array.from(movies.reduce((acc, movie) => acc.add(movie.genre), new Set()));
  const uniqGenres = new Set();
  movies.forEach((movie) => movie.genre.forEach((it) => uniqGenres.add(it)));
  const genres = Array.from(uniqGenres);
  genres.sort().splice(MAX_GENRES);
  genres.unshift(ALL_GENRES_NAME);

  return genres;
};

export const filterMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES_NAME) {
    return movies;
  }
  return movies.filter((movie) => movie.genre.includes(genre));
};
