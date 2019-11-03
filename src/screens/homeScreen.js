import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LawsuitsScreen from './lawsuitsScreen';
import {Icon} from 'native-base';
import {scale} from '../utils';

const HomeScreen = createBottomTabNavigator(
  {
    Processos: LawsuitsScreen,
    Perfil: LawsuitsScreen,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Vendas') {
          iconName = 'money';
        } else if (routeName === 'Comissão') {
          iconName = 'percent';
        } else {
          iconName = `user-circle${focused ? '' : '-o'}`;
        }

        return (
          <Icon
            type="FontAwesome"
            name={iconName}
            style={{
              paddingBottom: 0,
              paddingTop: scale(10),
              color: focused ? '#FFF' : '#FCA700',
              fontSize: scale(20),
            }}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      activeBackgroundColor: '#FCA700',
      style: {
        backgroundColor: '#484848',
        height: scale(56),
      },
      labelStyle: {
        fontSize: scale(16),
        paddingBottom: scale(10),
      },
    },
  },
);

export default HomeScreen;
