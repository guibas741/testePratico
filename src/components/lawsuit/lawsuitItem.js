import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';
import PropTypes from 'prop-types';

const LawsuitItem = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.titleStyle}>{props.lawsuitItem.title}</Text>
    <Text style={styles.numberLabelStyle}>Número</Text>
    <Text style={styles.numberStyle}>{props.lawsuitItem.number}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(5),
    margin: scale(10),
  },
  titleStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: scale(18),
    color: '#4D4E4F',
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

LawsuitItem.propTypes = {
  lawsuitItem: PropTypes.object.isRequired,
};

export {LawsuitItem};
