import {useState} from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, X } from "react-feather";

import "./Nav.css";
import fretHouseLogo from "../../assets/fretHouseLogo.svg";
import {useAuth} from "../../context/AuthContext";
import {useData} from "../../context/DataContext";
import {useFilter} from "../../context/FilterContext";
import ItemsCount from "../ItemsCount/ItemsCount";
import SearchResult from "./searchResult/SearchResult";

const Nav = () => {
  const [searchInput, setSearchInput] = useState("");
  const  {token} = useAuth();
  const {state: {cartList, wishList}} = useData();
  const {filterProduct} = useFilter();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login")
  }

  const goToWishlist = () => {
    navigate("/wishlist")
  }

  const goToCart = () => {
    navigate("/cart")
  }

  const goToProfile = () => {
    navigate("/profile")
  }

  const handleSearchForm = (e) => {
    e.preventDefault()
    const form = e.target;
    const userInput = form.search.value;
    filterProduct({type: "SEARCH_PRODUCTS", payload: userInput});
    navigate("/products");
  }

  const handleSearchOnChange = (e) => {
    setSearchInput(e.target.value);
    
    if(location.pathname === "/products"){
      filterProduct({type: "SEARCH_PRODUCTS", payload: e.target.value})
    }
  }

  const handleCancelSearch = () => {
    console.log("cancel clicked")
  }

  return (
    <nav className="nav-bar bg-accent-bg">
      <div className="nav-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={fretHouseLogo} alt="fret house logo" />
        </div>

        <form className="search-form" onSubmit={handleSearchForm}>
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
            {searchInput && <X size={24} className="cancel-search" onClick={handleCancelSearch} />}
          </label>

          <SearchResult searchInput={searchInput} setSearchInput={setSearchInput}/>
        </form>

        

        <ul className="links-container text-primary-400">
          {!token && (
            <li>
              <button className="accent-button" onClick={goToLogin}>Login</button>
            </li>
          )}
          <li className="mobile-search">
            <Search size={24} className="nav-icons" />
          </li>
          {token && (
            <li>
              <User className="nav-icons" onClick={goToProfile}/>
            </li>
          )}
          <li className="icon-with-count">
            <Heart className="nav-icons" onClick={goToWishlist} />
            <ItemsCount count={wishList.length}/>
          </li>
          <li className="icon-with-count">
            <ShoppingCart className="nav-icons" onClick={goToCart}/>
            <ItemsCount count={cartList.length}/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
