import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainBottomNavigator from './src/navigations/MainBottomNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainBottomNavigator/>
    </NavigationContainer>
  );
}
