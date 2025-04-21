import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="p-3 bg-dark text-white">
      <h5 className="fw-bold">Filter Movies</h5>
      {/* <h5>Filter Movies</h5> */}
      {/* <br/> */}
      <label className="fw-bold">Title</label>
      <input 
        type="text" 
        className="form-control mb-2" 
        placeholder="Search by title..." 
        onChange={(e) => setFilterTitle(e.target.value)} 
      />

      <label className="fw-bold">Rating</label>
      <input 
        type="number" 
        className="form-control mb-2" 
        placeholder="Enter rating (1-10)..." 
        min="1" 
        max="10" 
        onChange={(e) => setFilterRating(Number(e.target.value))} 
      />
    </div>
  );
};

export default Filter;
