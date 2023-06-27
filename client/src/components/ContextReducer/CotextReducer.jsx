import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state,action.payload];
    case "REMOVE":
      const filteredData = state.filter((item) => {
        return item.item.id !== action.payload.id;
      });
      return filteredData;
    case "DROP":
      const newData = []
      return newData;  
    default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cartState, dispatch } = useContext(CartContext);
  return { cartState, dispatch };
};

