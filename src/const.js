export const MAX_GENRES = 8;

export const MAX_STARS_REVIEW = 5;

export const ShowedMovies = {
  ON_START: 8,
  ON_MOVIE_PAGE: 4,
  ADDITIONAL: 8,
};

export const TextRating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
  NOT_FOUND: `Impossible`,
};

export const ALL_GENRES_NAME = `all genres`;

export const MovieTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const ROUTE_ID = `:id`;

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  MOVIE: `/films/${ROUTE_ID}`,
  IN_LIST: `/my-list`,
  VIDEO_PLAYER: `/video/${ROUTE_ID}`,
  ADD_REVIEW: `/review/${ROUTE_ID}`,
};
