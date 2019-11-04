import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SimpleButton} from '../../components';
import {pickDocument, scale} from '../../utils';
import {Icon} from 'native-base';

const AttachmentComponent = props => (
  <View>
    <Text style={styles.labelStyle}>Anexo</Text>
    <View style={styles.attachmentContainerStyle}>
      <SimpleButton
        onPress={() => pickDocument(props.setFileUri, props.setFileName)}>
        {props.fileName}
      </SimpleButton>
      <TouchableOpacity
        onPress={() => {
          props.setFileUri('');
          props.setFileName('Anexo');
        }}>
        <Icon type="MaterialIcons" name="close" style={styles.closeIconStyle} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(12),
    color: '#d3d3d3',
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

export {AttachmentComponent};
