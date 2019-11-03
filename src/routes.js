import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';

const RoutesContainer = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  /* { 
    initialRouteName: 'SplashScreen',
  } */
});

const Routes = createAppContainer(RoutesContainer);

export default Routes;
