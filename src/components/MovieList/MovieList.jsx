import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>Movie List</h1>
      <section className="movies">
        {movies.map((movie) => {
          const handleClick = () => {
            dispatch({ type: "FETCH_MOVIE", payload: movie.id });
            dispatch({ type: "FETCH_GENRES", payload: movie.id });
            history.push("/MovieDetails");
          };

          return (
            <div class="movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={handleClick} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
