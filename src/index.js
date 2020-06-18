import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/movies";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const onMovieTitleClickHandler = () => {};

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      allMovies={movies}
      onMovieTitleClick={onMovieTitleClickHandler}
    />,
    document.querySelector(`#root`)
);

