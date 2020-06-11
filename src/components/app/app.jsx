import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoTitle, promoGenre, promoYear} = props;
  return (
    <Main
      title={promoTitle}
      genre={promoGenre}
      year={promoYear}
    />
  );
};

export default App;
