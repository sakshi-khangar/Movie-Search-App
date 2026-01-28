import React, { useState } from "react";
import MovieCard from "./MovieCard.jsx";


function Movie() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    if (!search) return;

    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=4169a4b8&s=${search}`
    );

    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Movie Search Application</h2>

      <input
        type="text"
        placeholder="Enter Movie Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="search-btn" onClick={searchMovie}>Search</button>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
