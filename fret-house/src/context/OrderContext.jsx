import { createContext, useContext, useReducer } from "react";
import {useData} from "../context/DataContext";

const OrderContext = createContext();

const initialState = {
  addressSelected: {},
  orderList: [],
};

export const OrderProvider = ({ children }) => {

  const orderReducer = (state, action) => {
    switch (action.type) {
      case "SELECT_ADDRESS":
        return { ...state, addressSelected: addressList.find(({id}) => id === action.payload) };
  
      case "ORDER_PLACED":
        return { ...state, orderList: [...state.orderList, action.payload] };
  
      default:
        return state;
    }
  };

  const {state: {addressList}} = useData();
  const [{ addressSelected, orderList }, dispatchOrder] = useReducer(
    orderReducer,
    initialState
  );

  return (
    <OrderContext.Provider
      value={{ addressSelected, orderList, dispatchOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
