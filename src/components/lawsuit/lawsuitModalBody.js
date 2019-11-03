import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LabelWithText, SimpleButton} from '../../components';
import {scale} from '../../utils';

const LawsuitModalBody = props => {
  return (
    <View>
      <Text>{props.name}</Text>
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
});

export {LawsuitModalBody};
