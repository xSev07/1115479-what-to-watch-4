import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayedMovie: -1,
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/dev-movie">
            <MoviePage
              movie={this.props.allMovies[8]}
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
      />
    );
  }

  _handleMovieCardClick(movieId) {
    const movieIndex = this.props.allMovies.findIndex((movie) => movie.id === movieId);
    this.setState({displayedMovie: movieIndex});
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
        genre: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        year: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        votes: PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  allMovies: state.movies,
});

export {App};
export default connect(mapStateToProps)(App);
