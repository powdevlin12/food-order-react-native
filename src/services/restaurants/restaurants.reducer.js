const RestaurantReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RESTAURANT' : {
      return {...state, restaurants : action.payload}
    }
    case 'GET_LOADING' : {
      return {...state, isLoading : action.payload}
    }
    default : return {...state}
  }
}

export default RestaurantReducer