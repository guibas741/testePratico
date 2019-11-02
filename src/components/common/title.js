import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';

const Title = ({text}) => (
  <View>
    <Text style={styles.titleStyle}>{text}</Text>
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
};

export {Title};
