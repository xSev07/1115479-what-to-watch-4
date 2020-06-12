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

export default App;
