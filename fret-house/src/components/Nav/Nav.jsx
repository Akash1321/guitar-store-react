import { useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, User } from "react-feather";

import "./Nav.css";
import fretHouseLogo from "../../assets/fretHouseLogo.svg";
import {useAuth} from "../../context/AuthContext";

const Nav = () => {
  const  {token} = useAuth();

  const navigate = useNavigate();

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


  return (
    <nav className="nav-bar bg-accent-bg">
      <div className="nav-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={fretHouseLogo} alt="fret house logo" />
        </div>

        <form>
          <label className="searchInput text-primary-300">
            <Search size={24} />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="bg-accent-bg fw-regular search"
            />
          </label>
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
          <li>
            <Heart className="nav-icons" onClick={goToWishlist} />
          </li>
          <li>
            <ShoppingCart className="nav-icons" onClick={goToCart}/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
