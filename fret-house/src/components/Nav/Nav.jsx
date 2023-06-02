import { useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingCart, User} from "react-feather";

import "./Nav.css";
import fretHouseLogo from "../../assets/fretHouseLogo.svg";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import ItemsCount from "../ItemsCount/ItemsCount";
import SearchBox from "../search/SearchBox";


const Nav = ({setMobileView}) => {

  const { token } = useAuth();
  const {
    state: { cartList, wishList },
  } = useData();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="nav-bar bg-accent-bg">
      <div className="nav-container">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={fretHouseLogo} alt="fret house logo" />
        </div>

       <SearchBox view="search-form" />

        <ul className="links-container text-primary-400">
          {!token && (
            <li>
              <button className="accent-button" onClick={goToLogin}>
                Login
              </button>
            </li>
          )}
          <li className="mobile-search">
            <Search size={24} className="nav-icons" onClick={() => setMobileView(true)}/>
          </li>
          {token && (
            <li>
              <User className="nav-icons" onClick={goToProfile} />
            </li>
          )}
          <li className="icon-with-count" onClick={goToWishlist}>
            <Heart className="nav-icons" />
            <ItemsCount count={token && wishList?.length} />
          </li>
          <li className="icon-with-count" onClick={goToCart}>
            <ShoppingCart className="nav-icons" />
            <ItemsCount count={token && cartList?.length} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
