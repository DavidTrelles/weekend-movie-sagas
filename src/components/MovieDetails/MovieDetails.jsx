import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MovieDetails.css";
const MovieDetails = () => {
  const history = useHistory();
  const movie = useSelector((store) => store.movie);
  const genres = useSelector((store) => store.genres);
  console.log(movie);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      {genres.length > 0 && (
        <>
          <div id="display">
            <h3>{movie[0].title}</h3>
            <img src={movie[0].poster} alt={movie[0].title} />
            <div id="desc">
              <p>{movie[0].description}</p>
            </div>
            <div id="genre">
              <p>
                Genre:{" "}
                {genres.map((genre) => (
                  <div key={genre.id}>{genre.name}</div>
                ))}
              </p>
            </div>
            <button onClick={handleClick}>Go Back</button>
          </div>
        </>
      )}
    </>
  );
};
export default MovieDetails;
