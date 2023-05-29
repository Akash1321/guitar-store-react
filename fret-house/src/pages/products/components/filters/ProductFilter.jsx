import { X } from "react-feather";

import "./ProductFilter.css";
import { useFilter } from "../../../../context/FilterContext";

const ProductFilter = ({ view, handleFilterView }) => {

  const { filterProduct, productsSorted, priceSelected, categories, ratingSelected, sort } =
    useFilter();

  const ratingArray = [4, 3, 2, 1];

  const handleRadioFilter = (ratingSelected) => {
    filterProduct({ type: "RATING_FILTER", payload: ratingSelected });
  };

  const handleCategoryFilter = (e) => {
    filterProduct({ type: "CATEGORY_FILTER", payload: e.target.value });
  };

  const handlePriceRange = (e) => {
    filterProduct({ type: "PRICE_FILTER", payload: e.target.value });
  };

  const handlePriceSorting = (e) => {
    filterProduct({ type: "PRICE_SORTING", payload: e.target.value });
  };

  const handleClearFilters = () => {
    filterProduct({ type: "CLEAR_FILTERS" });
  };

  return (
    <>
      <div
        className={`filter-container text-primary-400 ${view ? "show" : ""}`}
      >
        <X className="filter-view" onClick={handleFilterView} />
        <div className="category-choice">
          <h2 className="fw-semiBold">TYPES OF PRODUCT</h2>

          <div className="category-options">
            <div className="separate-option">
              <label className="option-label">
                <input
                  type="checkbox"
                  value="acoustic"
                  checked={categories.includes("acoustic")}
                  onChange={handleCategoryFilter}
                  className="check-box"
                />
                ACOUSTIC
              </label>
              <label className="option-label">
                <input
                  type="checkbox"
                  value="electric"
                  checked={categories.includes("electric")}
                  onChange={handleCategoryFilter}
                  className="check-box"
                />
                ELECTRIC
              </label>
            </div>
            <div className="separate-option">
              <label className="option-label">
                <input
                  type="checkbox"
                  value="bass"
                  checked={categories.includes("bass")}
                  onChange={handleCategoryFilter}
                  className="check-box"
                />
                BASS
              </label>
              <label className="option-label">
                <input
                  type="checkbox"
                  value="accessories"
                  checked={categories.includes("accessories")}
                  onChange={handleCategoryFilter}
                  className="check-box"
                />
                ACCESSORIES
              </label>
            </div>
          </div>
        </div>

        <div className="rating-choice">
          <h2 className="fw-semiBold">RATING</h2>
          <div className="rating-options">
            {ratingArray.map((rating) => (
              <label
                key={rating}
                className={`rating-label ${
                  ratingSelected === rating ? "rating-active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="rating"
                  onChange={() => handleRadioFilter(rating)}
                  className="rating-radio"
                />
                {rating}+
              </label>
            ))}
          </div>
        </div>

        <div className="range">
          <h2 className="fw-semiBold">PRICE RANGE</h2>
          <div className="price-range">
            <span>0</span>
            <input
              type="range"
              min="50"
              max="100000"
              steps="100"
              value={priceSelected}
              onChange={handlePriceRange}
              className="range-input"
            />
            <span>90000</span>
          </div>
        </div>

        <div className="price-sorting">
          <h2 className="fw-semiBold">SORT WITH PRICE</h2>
          <div className="sortPrice-choice">
            <label
              className={
                sort === "HIGH_TO_LOW" ? "active-sort" : ""
              }
            >
              <input
                type="radio"
                name="sort-price"
                value="HIGH_TO_LOW"
                onChange={handlePriceSorting}
                className="priceSort-radio"
              />
              HIGH TO LOW
            </label>

            <label
              className={sort === "LOW_TO_HIGH" ? "active-sort" : ""}
            >
              {console.log(sort)}
              <input
                type="radio"
                name="sort-price"
                value="LOW_TO_HIGH"
                onChange={handlePriceSorting}
                className="priceSort-radio"
              />
              LOW TO HIGH
            </label>
          </div>
        </div>

        <div className="label-clear">
          <div className="total-products">
            PRODUCTS ({productsSorted.length})
          </div>
          <button
            className="accent-button clear-button"
            onClick={handleClearFilters}
          >
            CLEAR
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
