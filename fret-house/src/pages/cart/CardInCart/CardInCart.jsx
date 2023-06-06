import { Plus, Minus } from "react-feather";
import {toast} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";

import "./CardInCart.css";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { checkPresence } from "../../../utils/checkPresence";

const CardInCart = (product) => {
  const { token } = useAuth();
  const {
    state: { wishList },
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToWishlist,
  } = useData();
  const navigate = useNavigate();

  const { _id, title, image, price, qty } = product;

  const handlePlusQuantity = () => {
    handleIncreaseQuantity(token, _id);
  };

  const handleMinusQuantity = () => {
    if (qty <= 1) {
      handleRemoveFromCart(token, _id);
      toast.warn("Item removed from cart");
    } else {
      handleDecreaseQuantity(token, _id);
    }
  };

  const onMoveToWishlist = () => {
    if (!checkPresence(wishList, _id)) {
      handleAddToWishlist(token, product);
      handleRemoveFromCart(token, _id);
      toast.success("Item moved to wishlist");
    }else{
      toast.warn("Item already in wishlist");
    }
  };

  const handleOnRemove = () => {
    handleRemoveFromCart(token, _id);
    toast.warn("Item removed from cart");
  };

  return (
    <li className="cartItems text-primary-400 bg-neutral-400">
      <div className="cartItem-image-container" onClick={() => navigate(`/products/${_id}`)}>
        <img src={image} alt={title} className="cartItem-image" />
      </div>

      <div className="cartItem-detail-container">
        <Link to={`/products/${_id}`}><h2>{title}</h2></Link>
        <p className="fw-semiBold">₹ {price}</p>
        <div className="quantity-area">
          <h3>Quantity: </h3>
          <div className="quantity-area">
            <span onClick={handleMinusQuantity}>
              <Minus className="quantity-icons" />
            </span>
            <p>{qty}</p>
            <span onClick={handlePlusQuantity}>
              <Plus className="quantity-icons" />
            </span>
          </div>
        </div>

        <div className="cart-buttons">
          <button
            className="accent-button cartItem-button"
            onClick={handleOnRemove}
          >
            Remove from cart
          </button>
          <button
            className="accent-button cartItem-button"
            onClick={onMoveToWishlist}
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardInCart;
