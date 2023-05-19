import { X, Plus, Minus } from "react-feather";

import "./ProductFilter.css";

const ProductFilter = ({view, handleTypesView, handleFilterView}) => {
  return (
    <>
    {view.filters && (<div className="filter-container text-primary-400">
      <X className="filter-view" onClick={handleFilterView}/>
      <div className="category-choice">
        <h2>TYPES OF PRODUCT</h2>
        <span onClick={handleTypesView}>{view.types ? <Minus /> : <Plus />}</span>
        </div>
        {view.types && (
          <div className="category-options">
            <div className='separate-option'>
              <label className="option-label"><input type="checkbox" />ACOUSTIC</label>
              <label className="option-label"><input type="checkbox" />ELECTRIC</label>
            </div>
            <div className='separate-option'>
              <label className="option-label"><input type="checkbox" />BASS</label>
              <label className="option-label"><input type="checkbox" />ACCESSORIES</label>
            </div>
             
          </div>
        )}
      

      <div className="rating-choice">
        <h2>RATING</h2>
        <div>
           <label><input type="radio" name="rating"/>4+</label>
           <label><input type="radio" name="rating"/>3+</label>
           <label><input type="radio" name="rating"/>2+</label>
           <label><input type="radio" name="rating"/>1+</label>
        </div>
      </div>

      <div className="range">
        <h2>PRICE RANGE</h2>
        <div><input type="range" /> </div>
      </div>

      <div className="price-sorting">
        <h2 >SORT WITH PRICE</h2>
        <div>
          <div>
             <label><input type="radio" name="sort-price"/>HIGH TO LOW</label>
             <label><input type="radio" name="sort-price"/>LOW TO HIGH</label>
          </div>
        </div>
      </div>

      <div className="label-clear">
        <div>PRODUCT 40</div>
        <button className="accent-button">CLEAR</button>
      </div>
    </div>)}
    </>
  );
};

export default ProductFilter;

// {`filter-container text-primary-400 ${view.filters ? `showFilter` : `hideFilter`}`}
