import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';
import {LawsuitHistoryHeader} from './lawsuitHistoryHeader';

const LawsuitHistoryItem = props => {
  const historyDateFormat = new Date(props.historyItem.date);

  return (
    <View style={{padding: scale(5)}}>
      <LawsuitHistoryHeader historyDateFormat={historyDateFormat} />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.lineSeparatorStyle} />
        <View style={{flex: 1}}>
          <Text style={styles.descriptionStyle}>
            {props.historyItem.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(14),
    color: '#4D4E4F',
  },
  lineSeparatorStyle: {
    borderLeftWidth: 2,
    borderColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
    margin: scale(10),
  },
});

export {LawsuitHistoryItem};
