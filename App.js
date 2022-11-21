import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import MapScreen from './src/features/restaurants/screens/map.screen'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import SettingScreen from './src/features/restaurants/screens/setting.screen'
import { theme } from './src/infrastructure/theme'
import RestaurantsContextProvider from './src/services/restaurants/restaurants.context'
import LocationContextProvider from './src/services/location/location.context'
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Sichain') {
                  iconName = focused
                    ? 'md-restaurant'
                    : 'md-restaurant-outline';
                } else if (route.name === 'Setting') {
                  iconName = focused ? 'md-settings-sharp' : 'md-settings-outline';
                } else if (route.name === "Map") {
                  iconName = focused ? 'md-map' : 'md-map-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Sichain" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  )
}

export default App