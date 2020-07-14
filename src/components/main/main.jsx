import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Catalog from "../catalog/catalog.jsx";

const Main = (props) => {
  const {promo, onMovieCardClick} = props;
  // TODO: Сделать нормальную заглушку
  if (!promo) {
    return (<h1>Данные загружаются</h1>);
  }
  const {title, genre, year, poster, background} = promo;
  // TODO:
  //  Подумать можно ли вынести эту промо карточку и карточку со страницы детальной информации в 1 компонент

  return (
    <>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>
        <Header
          isMainPage={true}
        >
        </Header>

        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${title} poster`} width="218"
                height="327"/>
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          onMovieCardClick={onMovieCardClick}
        />

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
  onMovieCardClick: PropTypes.func.isRequired,
};

export default Main;
