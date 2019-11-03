import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';
import PropTypes from 'prop-types';
import {LabelWithText} from '../common/labelWithText';

const LawsuitItem = props => (
  <TouchableOpacity
    style={styles.containerStyle}
    onPress={() => props.openModal()}>
    <Text style={styles.titleStyle}>{props.lawsuitItem.title}</Text>
    <LabelWithText label="Número" text={props.lawsuitItem.number} />
  </TouchableOpacity>
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
});

LawsuitItem.propTypes = {
  lawsuitItem: PropTypes.object.isRequired,
};

export {LawsuitItem};
