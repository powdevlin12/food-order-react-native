import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapScreen from '../../features/restaurants/screens/map.screen'
import RestaurantScreen from '../../features/restaurants/screens/restaurants.screen'
import SettingScreen from '../../features/restaurants/screens/setting.screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RestaurantStack } from './restaurant.navigator'
const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return <Tab.Navigator
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
      headerShown: false
    })
  }
  >
    <Tab.Screen name="Sichain" component={RestaurantStack} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Setting" component={SettingScreen} />
  </Tab.Navigator>
}

export default AppNavigator