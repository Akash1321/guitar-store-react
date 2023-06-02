import { createContext, useContext, useReducer } from "react";

const OrderContext = createContext();

const initialState = {
  addressSelected: {},
  orderList: [],
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ADDRESS":
      return { ...state, addressSelected: action.payload };

    case "ORDER_PLACED":
      return { ...state, orderList: [...state.orderList, action.payload] };

    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
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
