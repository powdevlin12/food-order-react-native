import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import { theme } from './src/infrastructure/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen/>
    </ThemeProvider>
  )
}

export default App