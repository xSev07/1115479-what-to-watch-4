import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import {getAllMovies, getPromoMovie} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation} from "../../reducer/user/user";
import {userIsAuthorized} from "../../reducer/user/selectors";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayedMovie: -1,
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  render() {
    const movies = this.props.allMovies;
    // TODO: Сделать нормальную заглушку
    if (movies.length === 0) {
      return (<h1>Данные загружаются</h1>);
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/dev-movie">
            <MoviePage
              movie={movies[0]}
            />
          </Route>
          <Route exact path="/dev-login">
            <SignIn/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderMainScreen() {
    const {promoMovie, userIsAuthorized} = this.props;
    const {displayedMovie} = this.state;
    if (displayedMovie === -1) {
      return (
        <Main
          promo={promoMovie}
          userAuthorized={userIsAuthorized}
          onMovieCardClick={this._handleMovieCardClick}
        />
      );
    }
    return (
      <MoviePage
        movie={this.props.allMovies[displayedMovie]}
        onMovieCardClick={this._handleMovieCardClick}
      />
    );
  }

  _handleMovieCardClick(movieId) {
    const movieIndex = this.props.allMovies.findIndex((movie) => movie.id === movieId);
    this.setState({displayedMovie: movieIndex});
  }

  componentDidMount() {
    this.props.loadPromo();
    this.props.loadMovies();
    this.props.checkAuth();
  }
}

const mapStateToProps = (state) => ({
  allMovies: getAllMovies(state),
  promoMovie: getPromoMovie(state),
  userIsAuthorized: userIsAuthorized(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies() {
    dispatch(DataOperation.loadMovies());
  },
  loadPromo() {
    dispatch(DataOperation.loadPromo());
  },
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  }
});

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
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
  loadPromo: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
