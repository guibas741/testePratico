import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} color="#0080FF" />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

const styles = {
  spinnerStyle: {
    margin: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export {Spinner};
