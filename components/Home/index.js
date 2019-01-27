import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scanner from './Scanner';
import Result from './Result';

const AppNavigator = createStackNavigator(
  {
    Scanner: {
      screen: Scanner,
      navigationOptions: {
        header: null,
      },
    },
    Result,
  },
  {
    initialRouteName: 'Scanner',
  },
);

export default createAppContainer(AppNavigator);
