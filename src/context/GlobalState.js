  
  import React, { createContext, useReducer } from "react";
  import AppReducer from "./reducer";
  // const axios =require('axios');
  
  //initial state
  const initialstate = {
    user_id: null,
    email: null,
    isLoggedIn: false,
  };
  
  export const GlobalContext = createContext(initialstate);
  //provider component
  
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);
    async function updateState(Userdetails) {
      dispatch({
        type: "update_user_details",
        data: Userdetails,
      });
    }
  
    async function logout() {
      dispatch({
        type: "user_logout",
      });
    }
  
    return (
      <GlobalContext.Provider
        value={{
          isLoggedIn: state.isLoggedIn,
          user_id: state.user_id,
          email: state.email,
          updateState,
          logout,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  