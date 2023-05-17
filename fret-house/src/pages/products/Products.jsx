import { useData } from "../../context/DataContext";
import ProductCard from "../../components/productCard/ProductCard";
import "./Products.css";

const Products = () => {
  const { state } = useData();
  return (
    <main className="container products-container">
      <header className="section-header">
        <h1 className="fs-heading fw-bold products-heading">All Products</h1>
        <button className="accent-button filters-button">Filters</button>
      </header>

      <ul className="product-list">
        {state?.products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </main>
  );
};

export default Products;
