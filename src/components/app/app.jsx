import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {PureComponent} from "react/cjs/react.production.min";
import MoviePage from "../movie-page/movie-page.jsx";
import {ShowedMovies} from "../../const";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._showedMovies = ShowedMovies.ON_START;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/dev-movie">
            {this._renderMovieScreen()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderMainScreen() {
    const {promoMovie, allMovies, onMovieTitleClick} = this.props;
    return (
      <Main
        promo={promoMovie}
        movies={allMovies.slice(0, this._showedMovies)}
        onTitleClick={onMovieTitleClick}
      />
    );
  }

  _renderMovieScreen() {
    const {allMovies} = this.props;
    return (
      <MoviePage
        movie={allMovies[8]}
      />
    );
  }
}

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
        rate: PropTypes.number.isRequired,
        votes: PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
  ).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default App;
