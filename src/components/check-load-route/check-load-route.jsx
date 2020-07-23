import React from "react";
import PropTypes from "prop-types";
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

CheckLoadRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  loadingMovies: PropTypes.bool.isRequired,
  loadingPromo: PropTypes.bool.isRequired,
  loadingError: PropTypes.bool.isRequired,
};

export {CheckLoadRoute};
export default connect(mapStateToProps)(CheckLoadRoute);
