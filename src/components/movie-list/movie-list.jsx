import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {movies, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          const key = `${movie.title.split(` `)[0]}-${movie.year}`;
          return (
            <MovieCard
              key={key}
              title={movie.title}
              year={movie.year}
              onClick={onTitleClick}
              onHover={(evt) => {
                this.setState({activeCard: evt.target});
              }}
            />
          );
        }).join(`/n`)
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
      })
  ),
  onTitleClick: PropTypes.func.isRequired,
};
