import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {promoMovie, allMovies, onMovieTitleClick} = props;
  return (
    <Main
      promo={promoMovie}
      movies={allMovies}
      onTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  allMovies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      })
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default App;
