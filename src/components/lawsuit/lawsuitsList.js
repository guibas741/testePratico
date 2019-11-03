import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {LawsuitItem} from './lawsuitItem';

const LawsuitsList = props => {
  console.log(props.lawsuitsCases);
  return (
    <View>
      <FlatList
        data={props.lawsuitsCases}
        renderItem={({item}) => <LawsuitItem lawsuitItem={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export {LawsuitsList};
