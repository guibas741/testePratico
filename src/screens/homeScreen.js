/* eslint-disable react-native/no-inline-styles */
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
        let iconName = `user-circle${focused ? '' : '-o'}`;
        if (routeName === 'Processos') {
          iconName = 'folder-o';
        }

        return (
          <Icon
            type="FontAwesome"
            name={iconName}
            style={{
              paddingBottom: 0,
              paddingTop: scale(10),
              color: focused ? '#FFF' : '#0080FF',
              fontSize: scale(20),
            }}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0080FF',
      inactiveTintColor: '#FFF',
      activeBackgroundColor: '#484848',
      style: {
        backgroundColor: '#484848',
        height: scale(56),
      },
      labelStyle: {
        fontSize: scale(16),
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        paddingBottom: scale(10),
      },
      //labelPosition: 'beside-icon',
    },
  },
);

export default HomeScreen;
