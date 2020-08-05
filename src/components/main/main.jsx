import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Catalog from "../catalog/catalog.jsx";
import {connect} from "react-redux";
import {getPromoMovie} from "../../reducer/data/selectors";
import MovieHeader from "../movie-header/movie-header.jsx";
import {Operation as DataOperation} from "../../reducer/data/data";
import {getAddMovieInListStatus} from "../../reducer/app/selectors";

const Main = (props) => {
  const {promo, canAddMovieInList, changeFavoriteStatus} = props;

  const {title, poster, background} = promo;

  const _handlerButtonListClick = () => {
    changeFavoriteStatus(promo);
  };

  return (
    <>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>
        <Header/>

        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${title} poster`} width="218"
                height="327"/>
            </div>
            <MovieHeader
              movie={promo}
              needAddReviewButton={false}
              disableAddInList={!canAddMovieInList}
              onInListButtonClick={_handlerButtonListClick}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog/>

        <Footer/>
      </div>
    </>
  );
};

Main.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }),
  canAddMovieInList: PropTypes.bool.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promo: getPromoMovie(state),
  canAddMovieInList: getAddMovieInListStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus(movie) {
    dispatch(DataOperation.changeFavoriteStatus(movie));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
