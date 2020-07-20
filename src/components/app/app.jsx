import React from "react";
import Main from "../main/main.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route.jsx";
import MyList from "../my-list/my-list.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main}/>
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
        <Route path={AppRoute.MOVIE} component={MoviePage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
