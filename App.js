import React from 'react';

import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from './src/pages/main';
import ProfileScreen from './src/pages/profile';



const App = StackNavigator({
  Main: { 
    screen: MainScreen,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  Profile: { 
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile',
    }
  },
});

export default App;
AppRegistry.registerComponent('AwesomeProject', () => App);

