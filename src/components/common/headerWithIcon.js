import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {Title} from './title';

const HeaderWithIcon = ({text, iconName}) => (
  <View style={styles.headerStyle}>
    <Title text={text} />
    <Icon type="FontAwesome" name={iconName} style={styles.iconStyle} />
  </View>
);

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    justifyContent: 'flex-end',
    color: '#0080FF',
  },
});

export {HeaderWithIcon};
