import React from "react";
import Main from "../main/main.jsx";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route.jsx";
import MyList from "../my-list/my-list.jsx";
import CheckLoadRoute from "../check-load-route/check-load-route.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CheckLoadRoute
          exact
          path={AppRoute.ROOT}
          render={() => <Main/>}
        />
        <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        <PrivateRoute
          exact
          path={AppRoute.IN_LIST}
          render={() => {
            return <MyList/>;
          }}
        />
        <CheckLoadRoute
          exact
          path={AppRoute.MOVIE}
          render={(renderProps) => {
            const movieId = renderProps.computedMatch.params.id;
            return <MoviePage movieId={movieId}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
