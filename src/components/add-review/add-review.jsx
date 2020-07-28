import React from "react";
import Header from "../header/header.jsx";
import {getMovieByID} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import AddReviewForm from "../../add-review-form/add-review-form.jsx";

const AddReview = (props) => {
  const {movie} = props;
  const {title, poster, background} = movie;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.ROOT} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>

    </section>
  );
};

const mapStateToProps = (state, props) => ({
  movie: getMovieByID(state, {movieId: props.movieId}),
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
