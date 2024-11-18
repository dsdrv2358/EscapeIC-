import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; 
import GameScreen from './GameScreen';
import InstructionsScreen from './InstructionsScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B0000', // Dark Red
          },
          headerTintColor: '#FFFFFF', // White text
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Escape IC' }} />
        <Stack.Screen name="GameScreen" component={GameScreen} options={{ title: 'Game Screen' }} />
        <Stack.Screen name="Instructions" component={InstructionsScreen} options={{ title: 'Instructions' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
