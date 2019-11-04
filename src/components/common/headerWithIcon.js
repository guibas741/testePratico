import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {Title} from './title';

const HeaderWithIcon = ({text, iconName, iconFunction}) => (
  <View style={styles.headerStyle}>
    <Title text={text} />
    <TouchableOpacity onPress={() => iconFunction()}>
      <Icon type="FontAwesome" name={iconName} style={styles.iconStyle} />
    </TouchableOpacity>
  </View>
);

HeaderWithIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconFunction: PropTypes.func,
};

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
