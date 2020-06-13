import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {promoTitle, promoGenre, promoYear, allMovies} = props;
  return (
    <Main
      title={promoTitle}
      genre={promoGenre}
      year={promoYear}
      movies={allMovies}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  allMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
