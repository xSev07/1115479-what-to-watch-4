import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {promoTitle, promoGenre, promoYear, allMovies, onMovieTitleClick} = props;
  return (
    <Main
      title={promoTitle}
      genre={promoGenre}
      year={promoYear}
      movies={allMovies}
      onTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  allMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default App;
