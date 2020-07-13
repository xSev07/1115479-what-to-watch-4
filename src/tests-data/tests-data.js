import NameSpace from "../reducer/name-space";

export const movies = [
  {
    id: `Hotel-2000`,
    actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    duration: 60,
    genre: [`drama`],
    inList: false,
    producer: `Wes Andreson`,
    rating: 8.9,
    title: `The Grand Budapest Hotel`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    votes: 240,
    year: 2000,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    preview: `img/the-grand-budapest-hotel.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#e1b0b2`,
  },
  {
    id: `Bohemian-2018`,
    actors: [
      `Rami Malek`,
      `Lucy Boynton`,
      `Gwilym Lee`
    ],
    description: [
      `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Музыкальный фестиваль Live Aid (1985)`
    ],
    duration: 134,
    genre: [`drama`],
    inList: false,
    producer: `Bryan Singer`,
    rating: 8.0,
    title: `Bohemian Rhapsody`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    votes: 220,
    year: 2018,
    poster: `img/bohemian-rhapsody-poster.jpg`,
    preview: `img/bohemian-rhapsody.jpg`,
    background: `img/bg-bohemian-rhapsody.jpg`,
    backgroundColor: `rgb(146, 159, 165)`,
  },
  {
    id: `Macbeth-2015`,
    actors: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Paddy Considine`
    ],
    description: [
      `From the Academy Award winning producers of The King’s Speech and acclaimed director Justin Kurzel, comes a visceral and visually breath-taking retelling of the classic tale about an ambitious Scottish lord who seizes the throne with the help of his wife. Starring Academy Award nominee Michael Fassbender and Academy Award winner Marion Cotillard, Macbeth is both visually epic and a breathtaking experience.`
    ],
    duration: 113,
    genre: [`documental`],
    inList: false,
    producer: `Justin Kurzel`,
    rating: 6.6,
    title: `Macbeth`,
    videoPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    votes: 220,
    year: 2015,
    poster: `img/macbeth-poster.jpg`,
    preview: `img/macbeth.jpg`,
    background: `img/bg-macbeth.jpg`,
    backgroundColor: `rgb(241, 233, 206)`,
  },
  {
    id: `Aviator-2005`,
    actors: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Kate Beckinsale`
    ],
    description: [
      `The Aviator is a 2004 American epic biographical drama film directed by Martin Scorsese and written by John Logan. It stars Leonardo DiCaprio as Howard Hughes, Cate Blanchett as Katharine Hepburn, and Kate Beckinsale as Ava Gardner. The supporting cast features Ian Holm, John C. Reilly, Alec Baldwin, Jude Law as Errol Flynn, Gwen Stefani as Jean Harlow, Kelli Garner as Faith Domergue, Matt Ross, Willem Dafoe, Alan Alda, and Edward Herrmann.`,
      `Based on the 1993 non-fiction book Howard Hughes: The Secret Life by Charles Higham, the film depicts the life of Howard Hughes, an aviation pioneer and director of Hell's Angels. The film portrays his life from 1927–1947 during which time Hughes became a successful film producer and an aviation magnate while simultaneously growing more unstable due to severe obsessive–compulsive disorder (OCD).`
    ],
    duration: 170,
    genre: [`thriller`],
    inList: false,
    producer: `Martin Scorsese`,
    rating: 7.5,
    title: `Aviator`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    votes: 220,
    year: 2005,
    poster: `img/aviator-poster.jpg`,
    preview: `img/aviator.jpg`,
    background: `img/bg-aviator.jpg`,
    backgroundColor: `rgb(214, 205, 175)`,
  },
];

export const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
};

export const genres = [
  `all genres`,
  `documental`,
  `drama`,
  `thriller`,
];

export const comments = [{
  commentId: `1`,
  userId: `10`,
  author: `Test`,
  rating: 5.2,
  text: `Test string`,
  date: new Date(`1995-12-17T03:24:00`),
},
{
  commentId: `2`,
  userId: `12`,
  author: `Test2`,
  rating: 8,
  text: `Test string 2`,
  date: new Date(`1997-11-10T13:24:00`),
}
];

export const storeData = {
  [NameSpace.DATA]: {
    movies,
    promo: promoMovie,
    comments,
  },
  [NameSpace.APP]: {
    genre: `all genres`,
  }
};
