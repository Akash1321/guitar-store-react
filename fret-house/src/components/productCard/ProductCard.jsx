import { useNavigate } from "react-router-dom";
import { Star, Heart } from "react-feather";

import "./ProductCard.css";
import { checkPresence } from "../../utils/checkPresence";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";


const ProductCard = ({product, wishListCard}) => {
  const { _id, title, image, inStock, rating, price } = product;
  const {
    state,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    handleAddToCart,
    handleIncreaseQuantity
  } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const inCart = checkPresence(state?.cartList, _id)

  const handleCardDetail = (id) => {
    navigate(`/products/${id}`);
  };

  const addToWishlist = (e) => {
    e.stopPropagation();
    if (token) {
      handleAddToWishlist(token, product);
      toast.success("Item added to wishlist")
    }else{
      toast.warn("Login to Continue");
    }
  };

  const removeFromWishlist = (e) => {
    e.stopPropagation();
    handleRemoveFromWishlist(token, _id);
    toast.warn("Item removed from wishlist");
  };

  const addToCart = (e) => {
    e.stopPropagation();

    if (token) {
      handleAddToCart(token, product);
      toast.success("Item added to cart")
    }else{
      toast.warn("Login to Continue");
    }
  };

  const handleGoToCart = (e) => {
    e.stopPropagation();
    navigate("/cart");
  };

  const handleAtc = (e) => {
    e.stopPropagation();

    if(inCart){
      handleIncreaseQuantity(token, _id);
      toast.success("Quantity increased");
    }else{
      handleAddToCart(token, product);
      toast.success("Item added to cart");
    }
  }

  return (
    <li
      className="card bg-neutral-400 text-primary-400 fw-regular"
      onClick={() => handleCardDetail(_id)}
    >
      <div className="label">
        <p className={inStock ? "text-accent-green" : "text-accent-red"}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>

        {checkPresence(state?.wishList, _id) ? (
          <Heart
            size={24}
            color="hsla(360, 64%, 62%, 1)"
            fill="hsla(360, 64%, 62%, 1)"
            onClick={removeFromWishlist}
          />
        ) : (
          <Heart size={24} onClick={addToWishlist} />
        )}
      </div>

      <div className="image-container">
        <img src={image} alt={title} />
      </div>

      <div className="card-details">
        <p className="card-rating">
          {rating}{" "}
          <Star
            fill="#FBBF24"
            color="#FBBF24"
            size={16}
            className="rating-star"
          />
        </p>
        <p className="fw-semiBold">₹ {price}</p>
        <p className="product-name">{title}</p>
      </div>

      {!wishListCard ? (inCart ? (
        <button
          className="accent-button product-button go-to-cart"
          onClick={handleGoToCart}
        >
          Go to cart
        </button>
      ) : (
        <button
          className="primary-button product-button"
          disabled={!inStock}
          onClick={addToCart}
        >
          Add to cart
        </button>
      )) : null}

      {wishListCard && <button className="primary-button product-button" onClick={handleAtc}>ADD TO CART</button>}
    </li>
  );
};

export default ProductCard;
