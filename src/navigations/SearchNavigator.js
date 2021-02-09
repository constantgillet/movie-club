import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'


const Stack = createStackNavigator()

export default function SearchNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen 
            name="DetailScreen" 
            component={DetailScreen} 
            options={
                {
                    headerTransparent: true, 
                    headerTitle: false,
                    headerTintColor: 'white'
                }
            } 
            />
        </Stack.Navigator>
    )
}
