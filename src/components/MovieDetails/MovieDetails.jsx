import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const MovieDetails = () => {
  const history = useHistory();
  const movie = useSelector((store) => store.movie);
  console.log(movie);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      {movie.length > 0 && (
        <>
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
