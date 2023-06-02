import { createContext, useEffect, useContext, useReducer, useState } from "react";

import { useAuth } from "../context/AuthContext";
import {
  getWishList,
  postToWishlist,
  removeFromWishlist,
  getCartlist,
  postToCartlist,
  removeFromCartlist,
  increaseQuantity,
  decreaseQuantity
} from "../utils/apiCalls";

const DataContext = createContext();

const initialState = {
  products: [],
  wishList: [],
  cartList: [],
  addressList: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload.products };

    case "GET_WISHLIST":
      return { ...state, wishList: action.payload.wishlist };

    case "GET_CARTLIST":
      return { ...state, cartList: action.payload.cart };

    case "INCREASE_QTY":
      return {
        ...state,
        cartList: state.cartList.map((product) =>
          product._id === action.payload
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      };

    case "DECREASE_QTY":
      return {
          ...state,
          cartList: state.cartList.map((product) =>
            product._id === action.payload
              ? { ...product, qty: product.qty - 1 }
              : product
          ),
        };

    case "ADD_ADDRESS":
      return{
        ...state, addressList: [...state.addressList, action.payload]
      }

    case "EDIT_ADDRESS":
      const change = action.payload;
      console.log(change, "check");
      return{
        ...state, addressList: state.addressList.map(details => details.id === change.toEdit ? {...details, ...change.changedDetails} : details)
      }

    case "DELETE_ADDRESS":
      return{
        ...state, addressList: state.addressList.filter(({id}) => id !== action.payload)
      }

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [loader, setLoader] = useState(true);

  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/products");
        setLoader(false);
        const products = await response.json();

        dispatch({ type: "GET_PRODUCTS", payload: products });
      } catch (error) {
        console.log(error);
      }
    })();

    if (token) {
      (async () => {
        try {
          const response = await getWishList(token);
          const list = await response.json();

          dispatch({ type: "GET_WISHLIST", payload: list });
        } catch (error) {
          console.log(error);
        }
      })();

      (async () => {
        try {
          const response = await getCartlist(token);
          const list = await response.json();

          dispatch({ type: "GET_CARTLIST", payload: list });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [token]);

  const handleAddToWishlist = async (token, product) => {
    try {
      const response = await postToWishlist(token, product);
      const list = await response.json();

      dispatch({ type: "GET_WISHLIST", payload: list });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromWishlist = async (token, id) => {
    try {
      const response = await removeFromWishlist(token, id);
      const list = await response.json();

      dispatch({ type: "GET_WISHLIST", payload: list });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async (token, product) => {
    try {
      const response = await postToCartlist(token, product);
      console.log(response)
      const list = await response.json();

      dispatch({ type: "GET_CARTLIST", payload: list });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromCart = async (token, id) => {
    try {
      const response = await removeFromCartlist(token, id);
      const list = await response.json();

      dispatch({ type: "GET_CARTLIST", payload: list });
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncreaseQuantity = async (token, id) => {
    try {
      const response = await increaseQuantity(token, id);
      console.log(response)
      const list = await response.json();

      console.log(list.cart)
      dispatch({ type: "GET_CARTLIST", payload: list });

    } catch (error) {
      console.log(error);
    }
  };

  const handleDecreaseQuantity = async (token, id) => {
    try {
      const response = await decreaseQuantity(token, id);
      const list = await response.json();

      dispatch({ type: "GET_CARTLIST", payload: list });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        loader,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
