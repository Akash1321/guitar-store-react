import {useState} from "react";

import {useFilter} from "../../context/FilterContext";
import ProductCard from "../../components/productCard/ProductCard";
import ProductFilter from "./components/filters/ProductFilter";
import "./Products.css";

const Products = () => {
  const [view, setView] = useState({ filters: false, types: false });
  const {filterProduct, productsSorted} = useFilter();

  const handleFilterView = () => {
    setView(prev => ({...prev, filters: !prev.filters}))
  };

  const handleTypesView = () => {
    setView((prev) => ({ ...prev, types: !prev.types }));
  };

  const handleInStock = (e) => {
    // console.log(e.target.checked)
    filterProduct({type:"ONLY_INSTOCK", payload: e.target.checked})
  }


  return (
    <main className="container products-container">

      <ProductFilter view={view} handleFilterView={handleFilterView} handleTypesView={handleTypesView}/>

      <header className="section-header">
        <label className="fw-semiBold text-primary-400">
          <input type="checkbox" className="all-products" onChange={handleInStock}/>
            Show All
          </label>
         <h1 className="fs-heading fw-bold products-heading">All Products</h1>
        <button className="accent-button filters-button" onClick={handleFilterView}>Filters</button>
      </header>

      <ul className="product-list">
        {productsSorted?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </main>
  );
};

export default Products;
