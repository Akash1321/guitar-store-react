import {useState} from "react";

import { useData } from "../../context/DataContext";
import ProductCard from "../../components/productCard/ProductCard";
import ProductFilter from "./components/filters/ProductFilter";
import "./Products.css";

const Products = () => {
  const [view, setView] = useState({ filters: false, types: false });

  const { state } = useData();

  const handleFilterView = () => {
    setView(prev => ({...prev, filters: !prev.filters}))
  };

  const handleTypesView = () => {
    setView((prev) => ({ ...prev, types: !prev.types }));
  };


  return (
    <main className="container products-container">
      <ProductFilter view={view} handleFilterView={handleFilterView} handleTypesView={handleTypesView}/>
      <header className="section-header">
        <h1 className="fs-heading fw-bold products-heading">All Products</h1>
        <button className="accent-button filters-button" onClick={handleFilterView}>Filters</button>
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
