import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoFilm = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const allMovies = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

const onMovieTitleClickHandler = () => {};

ReactDOM.render(
    <App
      promoTitle={PromoFilm.TITLE}
      promoGenre={PromoFilm.GENRE}
      promoYear={PromoFilm.YEAR}
      allMovies={allMovies}
      onMovieTitleClick={onMovieTitleClickHandler}
    />,
    document.querySelector(`#root`)
);

