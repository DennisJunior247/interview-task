import React, { useContext, useReducer, createContext } from "react";
import { UseReducer } from "../reducer/index";

export const GlobalContext = createContext({
  templatesData: [],
});

const Provider = ({ children }) => {
  const initialState = useContext(GlobalContext);

  const [state, dispatch] = useReducer(UseReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
