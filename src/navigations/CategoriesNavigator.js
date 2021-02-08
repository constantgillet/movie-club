import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryMoviesListScreen from '../screens/CategoryMoviesListScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import { MainStyle } from '../styles/styles'

const Stack = createStackNavigator()

export default function CategoriesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CategoryMoviesList" component={CategoryMoviesListScreen}/>
        </Stack.Navigator>
    )
}
