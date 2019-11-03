import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';

const LabelWithText = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.numberLabelStyle}>{props.label}</Text>
    <Text style={styles.numberStyle}>{props.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    margin: scale(5),
  },
  numberLabelStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(12),
    color: '#d3d3d3',
  },
  numberStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(14),
    color: '#4D4E4F',
  },
});

export {LabelWithText};
