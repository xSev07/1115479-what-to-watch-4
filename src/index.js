import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoFilm = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

ReactDOM.render(
    <App
      promoTitle={PromoFilm.TITLE}
      promoGenre={PromoFilm.GENRE}
      promoYear={PromoFilm.YEAR}
    />,
    document.querySelector(`#root`)
);

