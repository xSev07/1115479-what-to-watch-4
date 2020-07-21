import React from "react";
import Main from "../main/main.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route.jsx";
import MyList from "../my-list/my-list.jsx";
import {
  getLoadingError,
  getMoviesLoadingStatus,
  getPromoLoadingStatus,
} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import Loader from "../loader/loader.jsx";
import LoadingError from "../loading-error/loading-error.jsx";

const App = (props) => {
  const {loadingMovies, loadingPromo, loadingError} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={() => {
            if (loadingError) {
              return <LoadingError/>;
            }
            if (loadingMovies || loadingPromo) {
              return <Loader/>;
            }
            return <Main/>;
          }}
        />
        <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        <PrivateRoute
          exact
          path={AppRoute.IN_LIST}
          render={() => {
            return (
              <MyList/>
            );
          }}
        />
        <Route
          path={AppRoute.MOVIE}
          render={(props) => {
            const movieId = props.match.params.id;
            if (loadingError) {
              return <LoadingError/>;
            }
            if (loadingMovies) {
              return <Loader/>;
            }
            return <MoviePage movieId={movieId}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  loadingMovies: getMoviesLoadingStatus(state),
  loadingPromo: getPromoLoadingStatus(state),
  loadingError: getLoadingError(state),
});

export {App};
export default connect(mapStateToProps)(App);
