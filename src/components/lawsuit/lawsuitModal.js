import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';
import {
  HeaderWithIcon,
  LawsuitModalBody,
  LawsuitHistory,
} from '../../components';
import {scale} from '../../utils';
import PropTypes from 'prop-types';

const LawsuitModal = props => {
  console.log(props);
  return (
    <ScrollView>
      <View style={styles.headerContainerStyle}>
        <TouchableOpacity onPress={() => props.onRequestClose()}>
          <Icon type="FontAwesome" name="arrow-left" style={styles.iconStyle} />
        </TouchableOpacity>

        <View style={styles.titleContainerStyle}>
          <HeaderWithIcon text="Processo" iconName="paperclip" />
        </View>
      </View>
      <View style={{padding: scale(10)}}>
        <LawsuitModalBody lawsuitItem={props.lawsuitItem} />
        <LawsuitHistory lawsuitHistoricals={props.lawsuitItem.historicals} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(10),
    backgroundColor: '#DCDCDC',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleContainerStyle: {
    flex: 1,
    marginLeft: scale(10),
  },
  iconStyle: {
    color: '#0080FF',
  },
});

LawsuitModal.propTypes = {
  lawsuitItem: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export {LawsuitModal};
