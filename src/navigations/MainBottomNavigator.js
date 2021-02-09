import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen'
import SearchScreen from '../screens/SearchScreen'
import { MainStyle } from '../styles/styles'
import { FontAwesome5 } from '@expo/vector-icons'; 
import CategoriesNavigator from './CategoriesNavigator'
import SearchNavigator from './SearchNavigator'

const TabNavigator = createBottomTabNavigator()

export default function MainBottomNavigator() {
    return (
        <TabNavigator.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 48,
                    backgroundColor: MainStyle.primaryColor
                },
            }}
        >
            <TabNavigator.Screen 
                name="Categories" 
                component={CategoriesNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 
                            name="home" 
                            size={styles.tabBarIcon.height} 
                            color={ focused ? styles.tabBarIconFocused.color : styles.tabBarIcon.color }
                        />
                    ),
                }}
            />
            <TabNavigator.Screen 
                name="Search" 
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 
                            name="search" 
                            size={styles.tabBarIcon.height} 
                            color={ focused ? styles.tabBarIconFocused.color : styles.tabBarIcon.color } 
                        />
                    )
                }}
            />
        </TabNavigator.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarIcon: {
        height: 22,
        color: MainStyle.lightColor,
    },
    tabBarIconFocused: {
        color: MainStyle.secondaryColor
    },
    tabBarIconFocusedTopBorder: {
        color: MainStyle.secondaryColor
    }
})