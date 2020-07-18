import NameSpace from "../name-space";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getAllMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promo;
};

export const getAllComments = (state) => {
  return state[NAME_SPACE].comments;
};

export const getMovieByID = createSelector(
    getAllMovies,
    (state, ownProps) => ownProps,
    (allMovies, ownProps) => {
      const {movieId} = ownProps;
      return allMovies.find((movie) => movie.id === movieId);
    }
);

export const getCommentsByMovie = createSelector(
    getAllComments,
    (state, ownProps) => ownProps,
    (allComments, ownProps) => {
      const {movieId} = ownProps;
      return allComments[movieId];
    }
);
