import MovieCard from "./MovieCard";

const MovieList = ({ movies, favorites, setFavorites }) => {
  return (
    <div>
      <h5 className="fw-bold mt-3 mb-4">Movies</h5>
      <div className="row">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} favorites={favorites} setFavorites={setFavorites} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
