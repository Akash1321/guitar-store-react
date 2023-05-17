import { createContext, useEffect, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  products: []
};

const dataReducer = (state, action) => {
    switch(action.type){
        case "GET_PRODUCTS": 
        return {...state, products: action.payload.products}

        default: 
        return state;
    }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

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
  }, []);

  return <DataContext.Provider value={{state}}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
