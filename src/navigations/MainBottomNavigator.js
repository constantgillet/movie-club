import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import SearchScreen from '../screens/SearchScreen'
import { MainStyle } from '../styles/styles'
import { FontAwesome5 } from '@expo/vector-icons'; 

const TabNavigator = createBottomTabNavigator()

export default function MainBottomNavigator() {
    return (
        <TabNavigator.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: MainStyle.primaryColor
                }
            }}
        >
            <TabNavigator.Screen 
                name="Categories" 
                component={CategoriesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={24} color="white" />
                    ),
                }}
            />
            <TabNavigator.Screen 
                name="Search" 
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="search" size={24} color="white" />
                    ),
                }}
            />
        </TabNavigator.Navigator>
    )
}
