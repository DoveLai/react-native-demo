import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

export default class MainScreen extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', { name: 'Jane' })
                }
            />
        )
    }
}

