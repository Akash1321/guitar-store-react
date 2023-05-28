import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { Star } from "react-feather";

import "./ProductDetails.css";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { checkPresence } from "../../utils/checkPresence";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { token } = useAuth();
  const {
    state: { cartList, wishList },
    handleAddToCart,
    handleAddToWishlist,
    handleRemoveFromWishlist,
  } = useData();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/products/${productId}`);

      if (response.ok) {
        const data = await response.json();
        setProduct(data.product);
      }
    })();
  });

  const { _id, title, image, description, inStock, rating, price } = product;

  const inCart = checkPresence(cartList, _id);
  const inWishlist = checkPresence(wishList, _id);

  return (
    <>
      {console.log(product)}
      {console.log(productId)}

      {_id && (
        <main className="container text-primary-400 detail-container">
          <div className="imageContainer">
            <img src={image} alt={title} className="productImage" />
          </div>

          <div className="details">
            <div className="detail-header">
              <h1 className="fs-heading fw-regular">{title}</h1>
              <p
                className={`stockCheck ${
                  inStock ? "text-accent-green" : "text-accent-red"
                }`}
              >
                {inStock ? "InStock" : "Out of Stock"}
              </p>
              <p className="fs-heading fw-semiBold">₹ {price}</p>
              <div className="line"></div>
            </div>
            <div>
              <h2 className="fw-semiBold detail-headings">Rating</h2>
              <p className="card-rating info">
                {rating}{" "}
                <Star fill="#FBBF24" color="#FBBF24" className="rating-star" />
              </p>
            </div>
            <div>
              <h2 className="fw-semiBold detail-headings">Description</h2>
              <p className="info">{description}</p>
            </div>
            <div className="detail-buttons">
              {inCart ? (
                <button
                  className="accent-button"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="primary-button"
                  disabled={!inStock}
                  onClick={() => handleAddToCart(token, product)}
                >
                  ADD TO CART{" "}
                </button>
              )}
              {inWishlist ? (
                <button
                  className="accent-button"
                  onClick={() => handleRemoveFromWishlist(token, _id)}
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                className="accent-button"
                 onClick={() => handleAddToWishlist(token, product)}>
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ProductDetails;
