import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LabelWithText, AttachmentComponent} from '../../components';
import {scale, formatValue} from '../../utils';
import PropTypes from 'prop-types';

const LawsuitModalBody = props => {
  const [fileUri, setFileUri] = useState('');
  const [fileName, setFileName] = useState('Anexo');

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
      <LabelWithText
        label="Valor"
        text={`R$ ${formatValue(props.lawsuitItem.amount)}`}
      />
      <AttachmentComponent
        setFileName={setFileName}
        setFileUri={setFileUri}
        fileName={fileName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
