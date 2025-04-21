import { useState } from "react";

const AddMovie = ({ setMovies, movies }) => {
  const [newMovie, setNewMovie] = useState({title: "",posterURL: "",rating: "",});
    // func updates the state when user types stuff e.target.name refers to input's name like title
    // ...newMovie keeps existing values and updates only new one
  const handleChange = (e) => {setNewMovie({ ...newMovie, [e.target.name]: e.target.value });};
  // func adds new movie when user clicks da button
  const handleSubmit = (e) => {
    // prevent refresh so we can see the new movie
    e.preventDefault();
    // check if all fields r filled
    if (newMovie.title && newMovie.posterURL && newMovie.rating) {
      console.log('adding movie:', newMovie);
      // adds new movie using the spread operator to keep existing ones 
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
      // reset the form to empty
      setNewMovie({ title: "", posterURL: "", rating: "" });
    }
  };

  return (
    <div className="p-3 bg-dark text-white">
      <h5 className="fw-bold">Add a New Movie</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" className="form-control mb-2" value={newMovie.title} onChange={handleChange} required />
        <input type="text" name="posterURL" placeholder="Poster URL" className="form-control mb-2" value={newMovie.posterURL} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-10)" className="form-control mb-2" value={newMovie.rating} onChange={handleChange} required min="1" max="10" />
        <button type="submit" className="btn btn-warning w-100">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
