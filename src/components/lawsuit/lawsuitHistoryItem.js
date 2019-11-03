import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../utils';

const LawsuitHistoryItem = props => (
  <View style={{padding: scale(5)}}>
    <View style={styles.headerContainerStyle}>
      <View style={styles.dayContainerStyle}>
        <Text style={styles.dayTextStyle}>13</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.monthTextStyle}>Agosto</Text>
        <Text style={styles.yearTextStyle}>1995</Text>
      </View>
    </View>
    <Text style={styles.descriptionStyle}>{props.historyItem.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
  },
  dayContainerStyle: {
    borderRadius: 5,
    backgroundColor: '#0080FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(10),
    margin: scale(3),
  },
  dayTextStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: scale(14),
  },
  monthTextStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: scale(14),
    color: '#4D4E4F',
  },
  yearTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(12),
    color: '#d3d3d3',
  },
  descriptionStyle: {
    fontFamily: 'sans-serif',
    fontSize: scale(14),
    color: '#4D4E4F',
  },
});

export {LawsuitHistoryItem};
