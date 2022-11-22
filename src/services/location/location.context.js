import React, { useReducer, useContext, useEffect } from "react";
import LocationReducer from "./location.reducer";

import { locationRequest, locationTransform } from "./location.service";

const LocationContext = React.createContext();

const initialState = {
  keyword: "San Francisco",
  location: null,
  isLoading: false
}

const LocationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState)

  const onSearch = (searchKeyword) => {
    console.log(searchKeyword);
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_KEYWORD', payload: searchKeyword })
    // neu khong nhap thi khong lam gi ca
    if (!searchKeyword.length) {
      return;
    }
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
    onSearch(state.keyword)
  }, [])

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