import { createContext, useEffect, useContext, useReducer } from "react";

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

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/products");
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

  console.log(state.cartList);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
