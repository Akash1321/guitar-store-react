import { createContext, useContext, useReducer, useEffect } from "react";

import { useData } from "./DataContext";

const FilterContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, productList: action.payload };

    case "SEARCH_PRODUCTS":
      return {...state, searchInput: action.payload.toLowerCase()}

    case "ONLY_INSTOCK":
      return { ...state, onlyInStock: !action.payload };

    case "RATING_FILTER":
      return { ...state, ratingSelected: action.payload };

    case "CATEGORY_FILTER":
      const categorySelected = state.categories.includes(action.payload);

      const existedIndex =
        categorySelected && state.categories.indexOf(action.payload);

      return {
        ...state,
        categories: categorySelected
          ? state.categories.toSpliced(existedIndex, 1)
          : [...state.categories, action.payload],
      };

    case "PRICE_FILTER": 
      return {...state, priceSelected: action.payload}

    case "PRICE_SORTING":
      return {...state, sort: action.payload}

    case "CLEAR_FILTERS": 
      return {...initialState, productList: state.productList}

    default:
      return state;
  }
};

const initialState = {
    productList: [],
    onlyInStock: true,
    searchInput: "",
    ratingSelected: null,
    categories: [],
    priceSelected: 50,
    sort: ""
  };

export const FilterProvider = ({ children }) => {
  const { state } = useData();

  useEffect(() => {
    filterProduct({ type: "GET_PRODUCTS", payload: state.products });
  }, [state.products]);

  const [
    { productList, onlyInStock, searchInput ,ratingSelected, categories, priceSelected, sort },
    filterProduct,
  ] = useReducer(filterReducer, initialState);

  const stockFilter = onlyInStock
    ? productList.filter(({ inStock }) => inStock)
    : productList;

  const searchFilter = searchInput ? stockFilter.filter(({title}) => title.toLowerCase().includes(searchInput)) : stockFilter;


  const ratingFiltered = ratingSelected
    ? searchFilter.filter(({ rating }) => Number(rating) > ratingSelected)
    : searchFilter;

  const categoryFiltered =
    categories.length === 0
      ? ratingFiltered
      : ratingFiltered.filter(({ category }) => categories.includes(category));

   const pricingFiltered = categoryFiltered.filter(({ price }) => Number(price) > 0 && Number(price) <= priceSelected);

   const productsSorted = (() => {
    switch(sort){

        case "HIGH_TO_LOW": 
          return pricingFiltered.toSorted((a, b) => b.price - a.price);

        case "LOW_TO_HIGH":
          return pricingFiltered.toSorted((a, b) => a.price - b.price);


        default:
          return pricingFiltered

    }
   })()

  return (
    <FilterContext.Provider
      value={{ filterProduct, productsSorted, onlyInStock }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
