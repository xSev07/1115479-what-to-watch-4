import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {getAllMovies} from "../../reducer/data/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route.jsx";
import MyList from "../my-list/my-list.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {allMovies: movies} = this.props;
    // TODO: Вынести ожидание загрузки фильмов в Main
    if (movies.length === 0) {
      return (<h1>Данные загружаются</h1>);
    }
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
  }
}

const mapStateToProps = (state) => ({
  allMovies: getAllMovies(state),
});

App.propTypes = {
  allMovies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        votes: PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
  ).isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
