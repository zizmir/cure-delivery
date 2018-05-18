import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Home } from './screens/home'
import { SignIn } from './screens/sign-in'
import { SignUp } from './screens/sign-up'


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    }
  },
  {
    initialRouteName: 'Home',
  }

);
export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
