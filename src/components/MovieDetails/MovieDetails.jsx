import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
const MovieDetails = () => {
  const movieId = useSelector((store) => store.movieId);
  const movie = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE", payload: movieId });
  }, []);
  const fetchMovie = () => {
    // axios
    //   .get(`api/movie/${movieId}`)
    //   .then((response) => {
    //     console.log("get response data", response.data);
    //   })
    //   .catch(function (error) {
    //     console.log("GET Error:", error);
    //   });
  };
  return (
    <>
      <div>{JSON.stringify(movie)}</div>
      <p>CUrrently under construction, this is your Movie: {movieId}</p>
    </>
  );
};

export default MovieDetails;
