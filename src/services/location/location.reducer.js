const LocationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING': 
      return { ...state, isLoading: action.payload }
    case 'SET_KEYWORD':
      return { ...state, keyword: action.payload }
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    default:
      return { ...state }
  }
}

export default LocationReducer;