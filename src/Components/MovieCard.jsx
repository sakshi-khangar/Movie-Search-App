import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} width="180" />
      <h3>{movie.Title}</h3>
      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Type:</b> {movie.Type}</p>
    </div>
  );
};

export default MovieCard
