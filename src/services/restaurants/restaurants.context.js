import camelize from "camelize";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useLocationContext } from "../location/location.context";
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
  const { location } = useLocationContext()
  const getRestaurant = (loc) => {
    dispatch({ type: 'GET_LOADING', payload: true })
    setTimeout(() => {
      restaurantsRequest(loc).then(data => {
        const mappedResults = data.results.map((restaurant) => {
          restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
          });
          return {
            ...restaurant,
            address: restaurant.vicinity,
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
    }, 500)
  }

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString)
      getRestaurant(locationString);
    }
  }, [location]);

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