import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LabelWithText, SimpleButton} from '../../components';
import {scale} from '../../utils';
import PropTypes from 'prop-types';

const LawsuitModalBody = props => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.lawsuitItem.title}</Text>
      <LabelWithText label="Número" text={props.lawsuitItem.number} />
      <LabelWithText
        label="Cliente"
        text={props.lawsuitItem.customers[0].name}
      />
      <LabelWithText
        label="Parte"
        text={props.lawsuitItem.customers[0].roleName}
      />
      <LabelWithText label="Fórum" text={props.lawsuitItem.court} />
      <LabelWithText label="Valor" text={`R$ ${props.lawsuitItem.amount}`} />
      <Text style={styles.labelStyle}>Anexo</Text>
      <SimpleButton onPress={() => console.log('aa')}>Anexo</SimpleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(12),
    color: '#d3d3d3',
  },
  titleStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: scale(18),
    color: '#4D4E4F',
  },
});

LawsuitModalBody.propTypes = {
  lawsuitItem: PropTypes.object.isRequired,
};

export {LawsuitModalBody};
