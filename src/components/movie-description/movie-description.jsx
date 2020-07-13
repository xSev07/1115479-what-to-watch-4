import MovieNav from "../movie-nav/movie-nav.jsx";
import React from "react";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import MovieReview from "../movie-reviews/movie-reviews.jsx";
import {getCommentsByMovie} from "../../reducer/data/selectors";
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
    const {comments} = this.props;
    switch (this.state.activeTab) {
      case MovieTab.OVERVIEW:
        return (
          <MovieOverview
            {...this.props}
          />
        );
      case MovieTab.DETAILS:
        return (
          <MovieDetails
            {...this.props}
          />
        );
      case MovieTab.REVIEWS:
        return (
          <MovieReview
            comments={comments}
          />
        );
    }
    return undefined;
  }

  _tabClickHandler(tab) {
    this.setState({activeTab: tab});
  }

  componentDidMount() {
    this.props.loadComments(this.props.id);
  }
}

const mapStateToProps = (state) => ({
  // TODO: сделать получение комментариев к конкретному фильму
  comments: getCommentsByMovie(state, {filmId: 1}),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    // TODO: Сделать проверку на уже загруженные комментарии, если она вообще нужна
    dispatch(DataOperation.loadComments(filmId));
  }
});

MovieDescription.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  loadComments: PropTypes.func.isRequired,
};

export {MovieDescription};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
