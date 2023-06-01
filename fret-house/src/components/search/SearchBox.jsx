import {useState} from "react";

import {useNavigate} from "react-router-dom";
import {X, Search} from "react-feather";

import "./SearchBox.css";
import SearchResult from  "../Nav/searchResult/SearchResult";
import {useFilter} from "../../context/FilterContext";

const SearchBox = ({view, setMobileView ,mobile}) => {
  const [searchInput, setSearchInput] = useState("");
    const {filterProduct} = useFilter();

    const navigate = useNavigate();

    const handleSearchForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const userInput = form.search.value;
        if (userInput) {
          filterProduct({ type: "SEARCH_PRODUCTS", payload: userInput });
          navigate("/products");
        }
      };
    
      const handleSearchOnChange = (e) => {
        setSearchInput(e.target.value);
        filterProduct({ type: "SEARCH_PRODUCTS", payload: e.target.value });
      };
    
      const handleCancelSearch = () => {
        setSearchInput("");
        filterProduct({ type: "SEARCH_PRODUCTS", payload: "" });
      };

    return (
        <form className={view}  onSubmit={handleSearchForm}>
          <label className="searchInput text-primary-300">
            <Search size={24} />
            <input
              type="text"
              name="search"
              value={searchInput}
              placeholder="Search"
              className="bg-accent-bg fw-regular search"
              onChange={handleSearchOnChange}
            />
            {searchInput && (
              <X
                size={24}
                className="cancel-search"
                onClick={handleCancelSearch}
              />
            )}
          </label>

          <SearchResult
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setMobileView={setMobileView}
            mobile={mobile}
          />
        </form>
    )
}

export default SearchBox;