const MovieCard = ({ movie, favorites = [], setFavorites }) => {
  const isFavorite = favorites.some((fav) => fav.title === movie.title);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.title !== movie.title));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white">
        <img src={movie.posterURL} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text text-light">{movie.description}</p>
          <p className="fw-bold">⭐ {movie.rating}/10</p>
          <button className="btn btn-outline-light" onClick={toggleFavorite}>
            {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
