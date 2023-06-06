import { useNavigate } from "react-router-dom";

import "./Wishlist.css";
import { useData } from "../../context/DataContext";
import ProductCard from "../../components/productCard/ProductCard";

const Wishlist = () => {
  const {
    state: { wishList },
  } = useData();
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate("/products");
  };

  return (
    <main className="container products-container">

      <header className="section-header">

        <h1 className="fs-heading fw-bold products-heading">Wishlist</h1>
        {console.log(wishList)}

        {(wishList?.length === 0 || wishList === undefined) && (
          <div className="empty-list">
            <p className="fw-semiBold text-primary-400 fs-heading">
              No Items Added
            </p>
            <button
              className="primary-button explore-button"
              onClick={handleExploreProducts}
            >
              Explore Products
            </button>
          </div>
        )}
        
      </header>

      <ul className="product-list">
        {wishList?.map((product) => (
          <ProductCard key={product.id} product={product} wishListCard />
        ))}
      </ul>

    </main>
  );
};

export default Wishlist;
