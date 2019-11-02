import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View} from 'react-native';
import {scale} from '../../utils';

const SimpleButton = ({onPress, children, newButtonStyle, newTextStyle}) => {
  const {buttonStyle, textStyle, viewStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, newButtonStyle]}>
      <View style={viewStyle}>
        <Text style={[textStyle, newTextStyle]}>{children}</Text>
      </View>
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
    margin: scale(5),
  },
  viewStyle: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
    padding: scale(10),
  },
  textStyle: {
    color: '#FFF',
    fontSize: scale(14),
  },
};

export {SimpleButton};
