import {ImageType} from "../../const";

export const getImageURL = (title, type) => {
  if (title === ``) {
    return ``;
  }

  let transformTitle = title.toLowerCase().replace(/:/g, ``).replace(/ /g, `-`);
  switch (type) {
    case ImageType.PREVIEW:
      break;
    case ImageType.POSTER:
      transformTitle = `${transformTitle}-${ImageType.POSTER}`;
      break;
    case ImageType.COVER:
      transformTitle = `${ImageType.COVER}-${transformTitle}`;
      break;
  }

  return `img/${transformTitle}.jpg`;
};
