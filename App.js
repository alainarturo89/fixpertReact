import React from 'react';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

import { createAppContainer} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
}, {
  initialRouteName: 'Home',
  headerLayoutPreset: 'center' ,
  defaultNavigationOptions: {
    title: 'fixperto',
    headerStyle: {
      backgroundColor: '#483d8b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer / > ;
  }
}