import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Details screen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
})