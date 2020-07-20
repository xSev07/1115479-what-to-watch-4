import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import {Spinner} from "../svg/svg.jsx";

const Loader = () => {
  return (
    <div style={{background: `linear-gradient(-180deg,#180202 0%,#000 100%)`}}>
      <Header>
        <h1 className="visually-hidden">WTW</h1>
      </Header>
      <div style={{width: `100vw`, height: `calc(100vh - 94px - 138px)`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
        <Spinner/>
      </div>
      <Footer/>
    </div>
  );
};

export default Loader;
