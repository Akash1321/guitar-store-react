import { X, Plus, Minus } from "react-feather";

import "./ProductFilter.css";
import {useFilter} from "../../../../context/FilterContext";

const ProductFilter = ({view, handleTypesView, handleFilterView}) => {

    const {filterProduct} = useFilter();

    const ratingArray = [4, 3, 2, 1];

    const handleRadioFilter = (ratingSelected) => {
        filterProduct({type: "RATING_FILTER", payload: ratingSelected})
    }

    const handleCategoryFilter = (e) => {
        filterProduct({type: "CATEGORY_FILTER", payload: e.target.value})
        console.log(e.target.value)
    }

    const handlePriceRange = (e) => {
        filterProduct({type: "PRICE_FILTER", payload: e.target.value})
    }

    const handlePriceSorting = (e) => {
        filterProduct({type: "PRICE_SORTING", payload: e.target.value})
    }

    const handleClearFilters = () => {
        filterProduct({type: "CLEAR_FILTERS"})

    }
    
  return (
    <>
    <div className="filter-container text-primary-400" style={{display: view.filters ? "flex" : "none"}}>
      <X className="filter-view" onClick={handleFilterView}/>
      <div className="category-choice">
        <h2>TYPES OF PRODUCT</h2>
        <span onClick={handleTypesView}>{view.types ? <Minus /> : <Plus />}</span>
        </div>
    
          <div className={view.types ? "category-options" : "hideItem"}>
            <div className='separate-option'>
              <label className="option-label">
                 <input type="checkbox" value="acoustic" onChange={handleCategoryFilter} />ACOUSTIC
               </label>
              <label className="option-label">
                 <input type="checkbox" value="electric" onChange={handleCategoryFilter} />ELECTRIC
              </label>
            </div>
            <div className='separate-option'>
              <label className="option-label">
                 <input type="checkbox" value="bass" onChange={handleCategoryFilter} />BASS
              </label>
              <label className="option-label">
                 <input type="checkbox" value="accessories" onChange={handleCategoryFilter} />ACCESSORIES 
              </label>
            </div>
             
          </div>
      

      <div className="rating-choice">
        <h2>RATING</h2>
        <div>
            {ratingArray.map(rating => (
            <label key={rating}>
                <input type="radio" name='rating' onChange={() => handleRadioFilter(rating)}/>{rating}+
            </label>
            ))}
        </div>
      </div>

      <div className="range">
        <h2>PRICE RANGE</h2>
        <div><input type="range" min="50" max="100000" steps="100" onChange={handlePriceRange}/> </div>
      </div>

      <div className="price-sorting">
        <h2 >SORT WITH PRICE</h2>
        <div>
          <div>

            <label>
                <input type="radio" name="sort-price" value="HIGH_TO_LOW" onChange={handlePriceSorting}/>HIGH TO LOW
            </label>

            <label>
                <input type="radio" name="sort-price" value="LOW_TO_HIGH" onChange={handlePriceSorting}/>LOW TO HIGH
            </label>

          </div>
        </div>
      </div>

      <div className="label-clear">
        <div>PRODUCT 40</div>
        <button className="accent-button" onClick={handleClearFilters}>CLEAR</button>
      </div>
    </div>
    </>
  );
};

export default ProductFilter;

// {`filter-container text-primary-400 ${view.filters ? `showFilter` : `hideFilter`}`}
