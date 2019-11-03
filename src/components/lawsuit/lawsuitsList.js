import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {LawsuitItem} from './lawsuitItem';
import PropTypes from 'prop-types';

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

LawsuitsList.propTypes = {
  lawsuitsCases: PropTypes.array,
};

export {LawsuitsList};
