import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import {LoadError} from "../svg/svg.jsx";

const LoadingError = () => {
  return (
    <div style={{background: `linear-gradient(-180deg,#180202 0%,#000 100%)`}}>
      <Header>
        <h1 className="visually-hidden">WTW</h1>
      </Header>
      <div style={{width: `100vw`, height: `calc(100vh - 94px - 138px)`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`}}>
        <h2 style={{color: `#d9cd8d`}}>Извините, у нашего сервера лапки. Попробуйте позднее</h2>
        <LoadError/>
      </div>
      <Footer/>
    </div>
  );
};

export default LoadingError;
