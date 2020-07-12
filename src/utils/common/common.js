import {TextRating} from "../../const";

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
  const hoursRaw = Math.trunc(time / 60);
  const minutesRaw = time - hoursRaw * 60;
  const space = (hoursRaw > 0 && minutesRaw > 0) ? ` ` : ``;
  const hours = hoursRaw === 0 ? `` : `${hoursRaw}h`;

  let minutes;
  if (minutesRaw === 0) {
    minutes = ``;
  } else if (minutesRaw < 10) {
    minutes = `0${minutesRaw}m`;
  } else {
    minutes = `${minutesRaw}m`;
  }

  return `${hours}${space}${minutes}`;
};
