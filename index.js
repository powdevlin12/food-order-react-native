import * as React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App.js';
import { NavigationContainer } from '@react-navigation/native';
export default function Main() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <PaperProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);