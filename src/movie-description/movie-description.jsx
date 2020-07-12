import MovieNav from "../components/movie-nav/movie-nav.jsx";
import React from "react";
import {getRatingTextDescription} from "../utils/common/common";

const MovieTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class MovieDescription extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: MovieTab.OVERVIEW,
    };

    this._tabClickHandler = this._tabClickHandler.bind(this);
  }

  render() {
    const {votes, producer, rating, actors, description} = this.props;
    const textRating = getRatingTextDescription(rating);
    const actorsText = `${actors.join(`, `)} and other`;
    const DescriptionText = description.map((it, index) => <p key={index}>{it}</p>);
    const tabs = Object.values(MovieTab);

    return (
      <div className="movie-card__desc">
        <MovieNav
          tabs={tabs}
          activeTab={this.state.activeTab}
          onClick={this._tabClickHandler}
        />

        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{textRating}</span>
            <span className="movie-rating__count">{votes} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          {DescriptionText}

          <p className="movie-card__director"><strong>Director: {producer}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {actorsText}</strong></p>
        </div>
      </div>
    );
  }

  _tabClickHandler(tab) {
    this.setState({activeTab: tab});
  }
}

export default MovieDescription;
