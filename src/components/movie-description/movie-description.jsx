import MovieNav from "../movie-nav/movie-nav.jsx";
import React from "react";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import PropTypes from "prop-types";

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
    const tabs = Object.values(MovieTab);

    return (
      <div className="movie-card__desc">
        <MovieNav
          tabs={tabs}
          activeTab={this.state.activeTab}
          onClick={this._tabClickHandler}
        />
        {this._createTabContentTemplate()}
      </div>
    );
  }

  _createTabContentTemplate() {
    const {movie, comments} = this.props;
    switch (this.state.activeTab) {
      case MovieTab.OVERVIEW:
        return (
          <MovieOverview
            {...movie}
          />
        );
      case MovieTab.DETAILS:
        return (
          <MovieDetails
            {...movie}
          />
        );
      case MovieTab.REVIEWS:
        return (
          <MovieReviews
            comments={comments}
          />
        );
    }
    return undefined;
  }

  _tabClickHandler(tab) {
    this.setState({activeTab: tab});
  }
}

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default MovieDescription;
