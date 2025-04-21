import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ favoriteCount, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-title">📀 Best Movies</span>

        <div className="search-container">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="search-icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search Best Movies..."
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
          />
        </div>

        <div className="favorite-container">
          <span className="favorite-text">My Favorite</span>
          <span 
            className="favorite-count">
            {favoriteCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
