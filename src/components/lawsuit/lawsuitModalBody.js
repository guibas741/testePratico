import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {LabelWithText, SimpleButton} from '../../components';
import {scale, pickDocument, formatValue} from '../../utils';
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

      <Text style={styles.labelStyle}>Anexo</Text>
      <View style={styles.attachmentContainerStyle}>
        <SimpleButton onPress={() => pickDocument(setFileUri, setFileName)}>
          {fileName}
        </SimpleButton>
        <TouchableOpacity
          onPress={() => {
            setFileName('');
            setFileName('Anexo');
          }}>
          <Icon
            type="MaterialIcons"
            name="close"
            style={styles.closeIconStyle}
          />
        </TouchableOpacity>
      </View>
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
  closeIconStyle: {
    flex: 1,
    padding: scale(10),
    color: '#4D4E4F',
  },
  attachmentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

LawsuitModalBody.propTypes = {
  lawsuitItem: PropTypes.object.isRequired,
};

export {LawsuitModalBody};
