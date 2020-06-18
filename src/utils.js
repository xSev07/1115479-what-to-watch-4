import {PosterType} from "./const";

export const getImageURL = (title, type) => {
  let transformTitle = title.toLowerCase().replace(`:`, ``).replace(/ /g, `-`);
  switch (type) {
    case PosterType.PREVIEW:
      break;
    case PosterType.POSTER:
      transformTitle = `${transformTitle}-${PosterType.POSTER}`;
      break;
    case PosterType.COVER:
      transformTitle = `${PosterType.COVER}-${transformTitle}`;
      break;
  }

  return `img/${transformTitle}.jpg`;
};
