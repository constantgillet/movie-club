import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryMoviesListScreen from '../screens/CategoryMoviesListScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import DetailScreen from '../screens/DetailScreen'
import { MainStyle } from '../styles/styles'

const Stack = createStackNavigator()

export default function CategoriesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='CategoriesScreen' component={CategoriesScreen} options={{headerShown: false}}/>
            <Stack.Screen 
                name='MoviesListScreen'
                component={CategoryMoviesListScreen}
                options={
                    {
                        headerTintColor: MainStyle.secondaryColor,
                        headerStyle: {
                            backgroundColor: MainStyle.primaryColor,
                            height: 68,
                            borderBottomStartRadius: 20,
                            borderBottomEndRadius: 20,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        headerTitleAlign: 'center'
                    }
                } 
            />
            <Stack.Screen 
                name='DetailScreen' 
                component={DetailScreen} 
                options={
                    {
                        headerTransparent: true, 
                        headerTitle: false,
                        headerTintColor: 'white',
                    }
                } 
            />
        </Stack.Navigator>
    )
}
