import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {scale} from '../../utils';

const Input = ({placeholder, secureTextEntry, value, onChangeText}) => (
  <View>
    <TextInput
      style={styles.inputStyle}
      onChangeText={text => onChangeText(text)}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor="#d3d3d3"
      value={value}
    />
  </View>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: '#d3d3d3',
    fontFamily: 'sans-serif',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: scale(12),
    marginBottom: scale(10),
  },
});

export {Input};
