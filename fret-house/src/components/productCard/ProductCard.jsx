import { Star, Heart } from "react-feather";

import "./ProductCard.css";

const ProductCard = (product) => {
  const { id, title, image, inStock, rating, price } = product;
  return (
    <li className="card bg-neutral-400 text-primary-400 fw-regular">
      <div className="label">
        <p className={inStock ? "text-accent-green" : "text-accent-red"}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
        <Heart size={24} />
      </div>

      <div className="image-container">
        <img src={image} alt={title} style={{ maxWidth: "100%" }} />
      </div>

      <div className="card-details">
        <p className="card-rating">
          {rating} <Star fill="#FBBF24" color="#FBBF24" size={16} className="rating-star" />
        </p>
        <p className="fw-semiBold">₹ {price}</p>
        <p className="product-name">{title}</p>
      </div>

      <button className="primary-button product-button" disabled={!inStock}>
        ADD TO CART
      </button>
    </li>
  );
};

export default ProductCard;
