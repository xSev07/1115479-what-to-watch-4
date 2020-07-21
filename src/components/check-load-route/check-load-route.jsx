import React from "react";
import {Route} from "react-router-dom";
import LoadingError from "../loading-error/loading-error.jsx";
import Loader from "../loader/loader.jsx";
import {getLoadingError, getMoviesLoadingStatus, getPromoLoadingStatus} from "../../reducer/data/selectors";
import {connect} from "react-redux";

const CheckLoadRoute = (props) => {
  const {exact, path, render, loadingMovies, loadingPromo, loadingError} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        if (loadingError) {
          return <LoadingError/>;
        }
        if (loadingMovies || loadingPromo) {
          return <Loader/>;
        }
        return render(props);
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  loadingMovies: getMoviesLoadingStatus(state),
  loadingPromo: getPromoLoadingStatus(state),
  loadingError: getLoadingError(state),
});

export {CheckLoadRoute};
export default connect(mapStateToProps)(CheckLoadRoute);
