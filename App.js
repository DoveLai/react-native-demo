import React from 'react';

import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';



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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  nav: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  font30: {
    fontSize: 90,
  },
  height160: {
    height: 160
  },
  part1_left: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  part1_right: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'red'
  },
});
