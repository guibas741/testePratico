import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {LawsuitHistoryItem} from './lawsuitHistoryItem';

const LawsuitHistory = props => (
  <View>
    <Text>HISTORICO</Text>
    <FlatList
      data={props.lawsuitHistoricals}
      renderItem={({item}) => <LawsuitHistoryItem historyItem={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export {LawsuitHistory};
