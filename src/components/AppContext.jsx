import React, { createContext, useEffect, useReducer } from "react";
import { reducers, initialState } from "./Reducers";
import { FETCH_PRODUCTS } from "./actions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_PRODUCTS, payload: data.products }));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, products: state.products }}>
      {children}
    </AppContext.Provider>
  );
};