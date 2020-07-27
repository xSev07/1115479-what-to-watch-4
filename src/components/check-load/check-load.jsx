import React from "react";
import PropTypes from "prop-types";
import {LoadError, Spinner} from "../svg/svg.jsx";

const CheckLoad = (props) => {
  const {component: Component, loadingError, isLoading} = props;

  if (loadingError) {
    return (
      <div style={{marginTop: `50px`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`}}>
        <h2 style={{color: `#d9cd8d`}}>Извините, у нашего сервера лапки. Попробуйте позднее</h2>
        <LoadError/>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div style={{marginTop: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
        <Spinner/>
      </div>
    );
  }

  const newProps = Object.assign({}, props);
  delete newProps.component;
  delete newProps.loadingError;
  delete newProps.isLoading;

  return <Component {...newProps}/>;
};

CheckLoad.propTypes = {
  component: PropTypes.func.isRequired,
  loadingError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CheckLoad;
