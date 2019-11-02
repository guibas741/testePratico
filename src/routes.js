import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';

const RoutesContainer = createStackNavigator({
  Login: {
    screen: LoginScreen,
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
