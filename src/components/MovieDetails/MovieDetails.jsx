import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const MovieDetails = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  // const movieId = useSelector((store) => store.movieId);
  // useEffect(() => {
  //   dispatch({ type: "FETCH_MOVIE", payload: movieId });
  // }, []);
  const movie = useSelector((store) => store.movie);
  console.log(movie);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      {movie.length > 0 && (
        <>
          {/* <div>{JSON.stringify(movie)}</div> */}
          {/* <p>
            CUrrently under construction, this is your Movie: {movie[0].title}
          </p> */}
          <h3>{movie[0].title}</h3>
          <img src={movie[0].poster} alt={movie[0].title} />
          <p>{movie[0].description}</p>
        </>
      )}
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
export default MovieDetails;
