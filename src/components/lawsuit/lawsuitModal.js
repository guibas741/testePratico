import React from 'react';
import {ScrollView, Text} from 'react-native';

const LawsuitModal = props => {
  console.log(props);
  return (
    <ScrollView>
      <Text>{props.lawsuitItem.title}</Text>
    </ScrollView>
  );
}

export {LawsuitModal};
