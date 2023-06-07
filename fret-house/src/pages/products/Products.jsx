import {useState} from "react";

import {Sliders} from "react-feather";

import {useFilter} from "../../context/FilterContext";
import ProductCard from "../../components/productCard/ProductCard";
import ProductFilter from "./components/filters/ProductFilter";
import "./Products.css";



const Products = () => {
  const [view, setView] = useState(false);
  const {filterProduct, productsSorted} = useFilter();


  const handleFilterView = () => {
    setView(prev => !prev)
  };

  const handleInStock = (e) => {
    filterProduct({type:"ONLY_INSTOCK", payload: e.target.checked})
  }

  return (
    <main className="container products-container">

      <ProductFilter view={view} handleFilterView={handleFilterView}/>

      <header className="section-header">
        <h1 className="fs-heading fw-bold">All Products</h1>
        <div className="section-header-filters">
        <label className="fw-semiBold text-primary-400">
          <input type="checkbox" className="all-products" onChange={handleInStock}/>
            Show All
          </label>
        <button className="accent-button filters-button" onClick={handleFilterView}> <Sliders size={16} color="#2D2A22"/> Filters</button>
        </div>
        
      </header>

      {productsSorted?.length > 0 ? (<ul className="product-list">
        {productsSorted?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>) : <p className="text-accent-red fs-heading not-available">Item not found</p>}
    </main>
  );
};

export default Products;
