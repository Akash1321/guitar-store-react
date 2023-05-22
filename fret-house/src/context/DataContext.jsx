import { createContext, useEffect, useContext, useReducer } from "react";

import {useAuth} from "../context/AuthContext";
import {getWishList, postToWishlist, removeFromWishlist, getCartlist, postToCartlist, removeFromCartlist} from "../utils/apiCalls";

const DataContext = createContext();

const initialState = {
  products: [],
  wishList: [],
  cartList: []
};

const dataReducer = (state, action) => {
    switch(action.type){
        case "GET_PRODUCTS": 
         return {...state, products: action.payload.products}

        case "GET_WISHLIST":
          return {...state, wishList: action.payload.wishlist}

        case "GET_CARTLIST":
            return {...state, cartList: action.payload.cart}

        default: 
        return state;
    }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const {token} = useAuth();

  useEffect(() => {
    (async () => {
        try{
            const response = await fetch("/api/products");
            const products = await response.json();

            dispatch({type: "GET_PRODUCTS", payload: products })
            
        }catch(error){
            console.log(error);
        }
    })()

    if(token){

      (async () => {
        try{
            const response = await getWishList(token);
            const list = await response.json();

            dispatch({type: "GET_WISHLIST", payload: list })
            
        }catch(error){
            console.log(error);
        }
    })();

    (async () => {
      try{
          const response = await getCartlist(token);
          const list = await response.json();

          dispatch({type: "GET_CARTLIST", payload: list })
          
      }catch(error){
          console.log(error);
      }
  })();



  }

  }, [token]);

  const handleAddToWishlist = async (token, product) => {
    try{
      const response = await postToWishlist(token, product);
      const list = await response.json();

        dispatch({type: "GET_WISHLIST", payload: list })


    }catch(error){
      console.log(error)
    }
  }

  const handleRemoveFromWishlist = async (token, id) => {
    try{
      const response = await removeFromWishlist(token, id);
      const list = await response.json();

        dispatch({type: "GET_WISHLIST", payload: list })


    }catch(error){
      console.log(error)
    }
  }

  const handleAddToCart = async (token, product) => {
    try{
      const response = await postToCartlist(token, product);
      const list = await response.json();

        dispatch({type: "GET_CARTLIST", payload: list })


    }catch(error){
      console.log(error)
    }
  }

  const handleRemoveFromCart = async (token, id) => {
    try{
      const response = await removeFromCartlist(token, id);
      const list = await response.json();

        dispatch({type: "GET_CARTLIST", payload: list })


    }catch(error){
      console.log(error)
    }
  }
  
  

  console.log(state.cartList)

  return <DataContext.Provider value={{state, handleAddToWishlist, handleRemoveFromWishlist, handleAddToCart, handleRemoveFromCart}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
