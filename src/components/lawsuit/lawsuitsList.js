import React, {useState} from 'react';
import {FlatList, View, SafeAreaView, Modal} from 'react-native';
import {LawsuitItem} from './lawsuitItem';
import PropTypes from 'prop-types';
import {LawsuitModal} from './lawsuitModal';

const LawsuitsList = props => {
  const [modalVisible, toggleModal] = useState('false');
  const [selectedLawsuit, setLawsuitItem] = useState({});
  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => toggleModal(false)}>
        <SafeAreaView>
          <LawsuitModal lawsuitItem={selectedLawsuit} />
        </SafeAreaView>
      </Modal>

      <FlatList
        data={props.lawsuitsCases}
        renderItem={({item}) => (
          <LawsuitItem
            lawsuitItem={item}
            openModal={() => {
              toggleModal(!modalVisible);
              setLawsuitItem(item);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

LawsuitsList.propTypes = {
  lawsuitsCases: PropTypes.array,
};

export {LawsuitsList};
