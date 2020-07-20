import React from "react";
import PropTypes from "prop-types";
import {transformToFirstCapitalSymbol} from "../../utils/common/common";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MovieDescription from "../movie-description/movie-description.jsx";
import {getCommentsByMovie, getMovieByID} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {MovieTab, ShowedMovies} from "../../const";
import MovieList from "../movie-list/movie-list.jsx";
import {getFilteredMovies} from "../../reducer/app/selectors";
import store from "../../reducer/store";

const tabs = Object.values(MovieTab);

class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this._tabs = tabs;

    this.handlerButtonListClick = this.handlerButtonListClick.bind(this);
  }

  handlerButtonListClick() {
    const {id, inList} = this.props.movie;

    store.dispatch(DataOperation.changeFavoriteStatus(id, !inList));
  }

  render() {
    const {movies, movie} = this.props;
    // TODO: Убрать movie из пропсов и получать его по адресной строке после 8го модуля
    const {title, genre, year, poster, background, backgroundColor, inList} = movie;
    const mainGenre = transformToFirstCapitalSymbol(genre);

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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{mainGenre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={this.handlerButtonListClick}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={inList ? `#in-list` : `#add`}></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
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
              elements={this._tabs}
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
    this.props.loadComments(this.props.movie.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie.id !== this.props.movie.id) {
      this.props.loadComments(this.props.movie.id);
    }
  }
}

const mapStateToProps = (state, props) => ({
  movie: getMovieByID(state, {movieId: props.match.params.id}),
  movies: getFilteredMovies(state, {movieId: props.match.params.id}).slice(0, ShowedMovies.ON_MOVIE_PAGE),
  comments: getCommentsByMovie(state, {movieId: props.match.params.id}),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    // TODO: Сделать проверку на уже загруженные комментарии, если она вообще нужна
    dispatch(DataOperation.loadComments(filmId));
  }
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
  }).isRequired).isRequired,
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
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })),
  loadComments: PropTypes.func.isRequired,
};

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
