import camelize from "camelize";
import React, { useState, createContext, useEffect, useMemo, useContext, useReducer } from "react";
import { mockImages } from "./mock";
import RestaurantReducer from "./restaurants.reducer";

import { restaurantsRequest } from "./restaurants.service";

const RestaurantsContext = createContext();

const initialState = {
  restaurants: [],
  isLoading: false
}
const RestaurantsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RestaurantReducer, initialState)

  const getRestaurant = () => {
    dispatch({ type: 'GET_LOADING', payload: true })
    setTimeout(() => {
      restaurantsRequest().then(data => {
        const mappedResults = data.results.map((restaurant) => {
          restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
          });

          return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
          };
        });
        dispatch({ type: 'GET_RESTAURANT', payload: camelize(mappedResults) })
        dispatch({ type: 'GET_LOADING', payload: false })
      })
        .catch(err => {
          dispatch({ type: 'GET_RESTAURANT', payload: err });
          dispatch({ type: 'GET_LOADING', payload: false })
        })
    }, 2000)
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  return (
    <RestaurantsContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurantsContext = () => {
  return useContext(RestaurantsContext)
}

export default RestaurantsContextProvider;