import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {scale} from '../../utils';

const SimpleButton = ({onPress, children, newButtonStyle, newTextStyle}) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, newButtonStyle]}>
      <Text style={[textStyle, newTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

SimpleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  newButtonStyle: PropTypes.object,
  newTextStyle: PropTypes.object,
};

const styles = {
  buttonStyle: {
    backgroundColor: '#0080FF',
    borderRadius: 10,
    padding: scale(10),
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: scale(14),
  },
};

export {SimpleButton};
