import React, { useState, useEffect, useReducer, useContext } from "react";
import LocationReducer from "./location.reducer";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

const initialState = {
  keyword: "san francisco",
  location: null,
  isLoading: false
}

const LocationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState)
  const onSearch = (searchKeyword = "Antwerp") => {
    console.log(searchKeyword);
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_KEYWORD', payload: searchKeyword })

    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        dispatch({ type: 'SET_LOADING', payload: false })
        dispatch({ type: 'SET_LOCATION', payload: result })
        console.log(result);
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: 'SET_LOADING', payload: false })
      });
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        ...state,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  return useContext(LocationContext)
}
export default LocationContextProvider