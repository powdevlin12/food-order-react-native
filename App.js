import 'react-native-gesture-handler';
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import RestaurantsContextProvider from './src/services/restaurants/restaurants.context'
import LocationContextProvider from './src/services/location/location.context'
import AppNavigator from './src/infrastructure/navigation/app.navigator'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <AppNavigator />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  )
}

export default App