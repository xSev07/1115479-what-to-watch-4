import {TextRating} from "../../const";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

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

export const transformRuntime = (time) => {
  return moment.duration(time, `m`).format(`h[h] mm[m]`);
};

export const transformDuration = (time) => {
  return moment.duration(time, `s`).format(`h:mm:ss`);
};

export const transformDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};

export const splitArrayInHalf = (arr = []) => {
  const firstHalf = arr.slice(0, Math.ceil(arr.length / 2));
  const secondHalf = arr.slice(Math.ceil(arr.length / 2));
  return {firstHalf, secondHalf};
};

export const isValidEmail = (email) => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

export const isValidPassword = (password) => {
  return password.length > 2;
};

export const extendObject = (...rest) => {
  return Object.assign({}, ...rest);
};

export const replaceId = (url, id) => {
  return url.replace(`:id`, id);
};
