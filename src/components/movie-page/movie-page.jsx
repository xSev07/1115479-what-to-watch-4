import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieDescription from "../movie-description/movie-description.jsx";
import {getCommentsByMovie, getLoadingCommentsError, getMovieByID} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {MovieTab, ShowedMovies} from "../../const";
import MovieList from "../movie-list/movie-list.jsx";
import {getAddMovieInListStatus, getFilteredMovies} from "../../reducer/app/selectors";
import MovieHeader from "../movie-header/movie-header.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";

class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handlerButtonListClick = this._handlerButtonListClick.bind(this);
  }

  _handlerButtonListClick() {
    this.props.changeFavoriteStatus(this.props.movie);
  }

  render() {
    const {movies, movie, userAuthorized, canAddMovieInList, loadingCommentsError} = this.props;
    const {title, poster, background, backgroundColor} = movie;

    return (
    <>
      <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
        <div className="movie-card__hero">
          <h1 className="visually-hidden">WTW</h1>
          <Header/>

          <div className="movie-card__bg">
            <img src={background} alt={title}/>
          </div>

          <div className="movie-card__wrap">
            <MovieHeader
              movie={movie}
              userAuthorized={userAuthorized}
              needAddReviewButton={true}
              disableAddInList={!canAddMovieInList}
              onInListButtonClick={this._handlerButtonListClick}
            />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218"
                height="327"/>
            </div>

            <MovieDescription
              movie={this.props.movie}
              comments={this.props.comments}
              activeTabDefault={MovieTab.OVERVIEW}
              loadingCommentsError={loadingCommentsError}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList
            movies={movies}
          />
        </section>

        <Footer/>
      </div>
    </>
    );
  }

  componentDidMount() {
    if (!this.props.comments) {
      this.props.loadComments(this.props.movie.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie.id !== this.props.movie.id) {
      this.props.loadComments(this.props.movie.id);
    }
  }
}

const mapStateToProps = (state, props) => ({
  movie: getMovieByID(state, {movieId: props.movieId}),
  movies: getFilteredMovies(state, {movieId: props.movieId}).slice(0, ShowedMovies.ON_MOVIE_PAGE),
  comments: getCommentsByMovie(state, {movieId: props.movieId}),
  canAddMovieInList: getAddMovieInListStatus(state),
  userAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  loadingCommentsError: getLoadingCommentsError(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    dispatch(DataOperation.loadComments(filmId));
  },
  changeFavoriteStatus(movie) {
    dispatch(DataOperation.changeFavoriteStatus(movie));
  },
});

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired),
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    inList: PropTypes.bool.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })),
  userAuthorized: PropTypes.bool.isRequired,
  canAddMovieInList: PropTypes.bool.isRequired,
  loadingCommentsError: PropTypes.bool.isRequired,
  loadComments: PropTypes.func.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
};

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
