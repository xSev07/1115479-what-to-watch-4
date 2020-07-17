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
import {getLoginErrorStatus} from "../../reducer/user/selectors";

class App extends PureComponent {
  constructor(props) {
    super(props);
    // TODO: Возможно стоит вынести incorrectEmail в Redux
    this.state = {
      displayedMovie: -1,
      incorrectEmail: false,
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {allMovies: movies, authError} = this.props;
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
          <Route exact path="/login">
            <SignIn
              authError={authError}
              incorrectEmail={this.state.incorrectEmail}
              onSubmit={this._handleFormSubmit}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderMainScreen() {
    const {promoMovie} = this.props;
    const {displayedMovie} = this.state;
    if (displayedMovie === -1) {
      return (
        <Main
          promo={promoMovie}
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

  _handleFormSubmit(formData) {
    const {login} = this.props;
    const {loginValue, passwordValue} = formData;

    const emailValid = loginValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (emailValid) {
      this.setState({
        incorrectEmail: false,
      });
      login({
        login: loginValue,
        password: passwordValue,
      });
    } else {
      this.setState({
        incorrectEmail: true,
      });
    }
  }
}

const mapStateToProps = (state) => ({
  allMovies: getAllMovies(state),
  promoMovie: getPromoMovie(state),
  authError: getLoginErrorStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
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
  authError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
