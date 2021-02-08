import React from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from "react-native";
import { color } from 'react-native-reanimated';
import { MainStyle } from '../styles/styles'

export default class ButtonCategories extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity  style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>text</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30
       
    },
    ButtonContainer: {
        elevation: 8,
        backgroundColor: MainStyle.lightColor,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowColor: MainStyle.primaryColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
    ButtonText: {
        fontSize: 18,
        color: MainStyle.primaryColor,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})
