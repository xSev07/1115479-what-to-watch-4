import MovieNav from "../movie-nav/movie-nav.jsx";
import React from "react";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import MovieReview from "../movie-reviews/movie-reviews.jsx";

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
    const {comments} = this.props;

    return (
      <div className="movie-card__desc">
        <MovieNav
          tabs={tabs}
          activeTab={this.state.activeTab}
          onClick={this._tabClickHandler}
        />

        {/*<MovieOverview*/}
        {/*  {...this.props}*/}
        {/*/>*/}
        {/*<MovieDetails*/}
        {/*  {...this.props}*/}
        {/*/>*/}
        <MovieReview
          comments={comments}
        />
      </div>
    );
  }

  _tabClickHandler(tab) {
    this.setState({activeTab: tab});
  }

  componentDidMount() {
    this.props.loadComments(this.props.id);
  }
}

const mapStateToProps = (state) => ({
  // TODO: сделать селектор и получение комментариев к конкретному фильму
  comments: state.DATA.comments,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    // TODO: Сделать проверку на уже загруженные комментарии
    dispatch(DataOperation.loadComments(filmId));
  }
});

export {MovieDescription};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
