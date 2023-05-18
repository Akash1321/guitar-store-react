import { useParams } from "react-router-dom";
import { Star, Heart } from "react-feather";

import "./ProductDetails.css";
import { useData } from "../../context/DataContext";

const ProductDetails = () => {
  const { state: {products} } = useData();
  const { productId } = useParams();

  const product = products.find(({ _id }) => _id === productId) || {};

  const { _id, title, image, description, inStock, rating, price } = product;

  return (
    <>
    {console.log(products)}
    {console.log(product)}
    {console.log(productId)}
    
    {_id && (
        <main className="container text-primary-400 detail-container">
        <div className="imageContainer">
          <img src={image} alt={title} className="productImage"/>
        </div>
  
        <div className="details">
          <div className="detail-header">
            <h1 className="fs-heading fw-regular">{title}</h1>
            <p className={`stockCheck ${inStock ? "text-accent-green" : "text-accent-red"}`}>
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
          <button className="primary-button" disabled={!inStock}>
            ADD TO CART{" "}
          </button>
          <button className="accent-button">Add to Wishlist</button>
  
          </div>
          
        </div>
      </main>
    )}
    </>
  );
};

export default ProductDetails;
