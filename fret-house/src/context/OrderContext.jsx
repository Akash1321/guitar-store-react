import { createContext, useContext, useReducer } from "react";

const OrderContext = createContext();

const initialState = {
  addressSelected: {},
  orderDetail: {
    deliveryAddress: {},
    orderedItems: []
  },
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ADDRESS":
      return { ...state, addressSelected: action.payload };

    case "ORDER_PLACED":
      return { ...state, orderedItems: action.payload };

    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [{ addressSelected }, dispatchOrder] = useReducer(
    orderReducer,
    initialState
  );
  return (
    <OrderContext.Provider value={{ addressSelected, dispatchOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
