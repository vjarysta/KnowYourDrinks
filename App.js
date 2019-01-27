import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './components/Home';
import History from './components/History';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: <MaterialIcons name="home" size={32} />,
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: <MaterialIcons name="history" size={32} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);


export default createAppContainer(AppNavigator);
