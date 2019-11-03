import React from 'react';
import {FlatList, View, Text} from 'react-native';

const LawsuitsList = props => {
  console.log(props.lawsuitsCases);
  return (
    <View>
      <FlatList
        data={props.lawsuitsCases}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export {LawsuitsList};
