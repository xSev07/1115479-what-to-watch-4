import React from "react";
import PropTypes from "prop-types";
import {transformToFirstCapitalSymbol} from "../../utils/common/common";

const GenreList = (props) => {
  const {genres, activeGenre, onClick} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => {
        const className = `catalog__genres-item ${it === activeGenre ? `catalog__genres-item--active` : ``}`;
        return (
          <li key={it} className={className}>
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onClick(it);
              }}
            >{transformToFirstCapitalSymbol(it)}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GenreList;
