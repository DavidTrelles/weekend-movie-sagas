import { useSelector } from "react-redux";

const MovieDetails = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <>
      <p>CUrrently under construction, this is your Movie: {movie}</p>
    </>
  );
};

export default MovieDetails;
