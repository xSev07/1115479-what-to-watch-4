import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {
  getFavoriteMovies,
  getFavoriteMoviesLoadingError,
  getFavoriteMoviesLoadingStatus
} from "../../reducer/data/selectors";
import {PureComponent} from "react/cjs/react.production.min";
import {Operation as DataOperation} from "../../reducer/data/data";
import {LoadError, Spinner} from "../svg/svg.jsx";

class MyList extends PureComponent {
  constructor(props) {
    super(props);

    this._getFavoriteMoviesTemplate = this._getFavoriteMoviesTemplate.bind(this);
  }

  render() {
    return (
      <div className="user-page">
        <Header
          className={`user-page__head`}
        >
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {this._getFavoriteMoviesTemplate()}
        </section>

        <Footer/>
      </div>
    );
  }

  _getFavoriteMoviesTemplate() {
    const {movies, loadingError, isLoading} = this.props;

    if (loadingError) {
      return (
        <div style={{marginTop: `50px`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`}}>
          <h2 style={{color: `#d9cd8d`}}>Извините, у нашего сервера лапки. Попробуйте позднее</h2>
          <br/>
          <LoadError/>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div style={{marginTop: `50px`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
          <Spinner/>
        </div>
      );
    }
    return <MovieList movies={movies}/>;
  }

  componentDidMount() {
    this.props.loadFavoriteMovies();
  }
}

const mapStateToProps = (state) => ({
  movies: getFavoriteMovies(state),
  loadingError: getFavoriteMoviesLoadingError(state),
  isLoading: getFavoriteMoviesLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteMovies() {
    dispatch(DataOperation.loadFavoriteMovies());
  }
});

MyList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
  loadingError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadFavoriteMovies: PropTypes.func.isRequired,
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
