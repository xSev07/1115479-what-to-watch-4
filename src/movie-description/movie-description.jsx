import MovieNav from "../components/movie-nav/movie-nav.jsx";
import React from "react";
import MovieOverview from "../components/movie-overview/movie-overview.jsx";

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

        <MovieOverview
          {...this.props}
        />
      </div>
    );
  }

  _tabClickHandler(tab) {
    this.setState({activeTab: tab});
  }
}

export default MovieDescription;
