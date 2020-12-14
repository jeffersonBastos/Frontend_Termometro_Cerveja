import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Termometro from '../screens/termometro';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Termomêtro" component={Termometro} />
    </Stack.Navigator>
  );
}
