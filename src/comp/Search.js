import "../App.scss";
import { FiSearch } from "react-icons/fi";

const Search = ({ searchText }) => {
  const handleSearch = (e) => {
    searchText(e.target.value);
  };
  return (
    <div className="search">
      <div className="search-content">
        <FiSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search"
          className="search-inp"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
