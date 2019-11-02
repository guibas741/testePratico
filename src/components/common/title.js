import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';

const Title = ({text, textContainerStyle, newTextStyle}) => (
  <View style={textContainerStyle}>
    <Text style={[styles.titleStyle, newTextStyle]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(30),
    fontWeight: 'bold',
  },
});

Title.propTypes = {
  text: PropTypes.string.isRequired,
  textContainerStyle: PropTypes.object,
  newTextStyle: PropTypes.object,
};

export {Title};
