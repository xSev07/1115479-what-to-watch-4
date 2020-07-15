const parseMovie = (movie) => {
  return {
    id: movie.id.toString(),
    actors: movie.starring,
    description: [movie.description],
    duration: movie.run_time,
    genre: movie.genre,
    inList: movie.is_favorite,
    producer: movie.director,
    rating: movie.rating,
    title: movie.name,
    video: movie.video_link,
    videoPreview: movie.preview_video_link,
    votes: movie.scores_count,
    year: movie.released,
    poster: movie.poster_image,
    preview: movie.preview_image,
    background: movie.background_image,
    backgroundColor: movie.background_color,
  };
};

const parseMovies = (data) => {
  return data.map((movie) => parseMovie(movie));
};

export {parseMovies, parseMovie};
