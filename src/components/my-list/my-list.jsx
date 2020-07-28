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
import CheckLoad from "../check-load/check-load.jsx";

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, loadingError, isLoading} = this.props;
    return (
      <div className="user-page">
        <Header
          className={`user-page__head`}
        >
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CheckLoad
            component={MovieList}
            movies={movies}
            loadingError={loadingError}
            isLoading={isLoading}
          />
        </section>

        <Footer/>
      </div>
    );
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
