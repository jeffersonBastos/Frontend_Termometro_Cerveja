import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';

export default function App() {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigation/>
          <StatusBar />
        </SafeAreaProvider>
      </NavigationContainer>
    );
}
