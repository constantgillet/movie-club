import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import SearchScreen from '../screens/SearchScreen'

const TabNavigator = createBottomTabNavigator()

export default function MainBottomNavigator() {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Categories" component={CategoriesScreen}/>
            <TabNavigator.Screen name="Search" component={SearchScreen}/>
        </TabNavigator.Navigator>
    )
}
