import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {HeaderWithIcon, LawsuitsList} from '../components';
import {getAllLawsuits} from '../ducks/modules/lawsuitsDuck';
import {scale} from '../utils';

class LawsuitsScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getAllLawsuits();
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <HeaderWithIcon text="Processos" iconName="search" />
        <LawsuitsList lawsuitsCases={this.props.lawsuitsCases} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(10),
  },
});

const mapStateToProps = state => ({
  lawsuitsCases: state.lawsuit.lawsuitsCases,
  loading: state.lawsuit.loading,
  error: state.lawsuit.error,
});

export default connect(
  mapStateToProps,
  {
    getAllLawsuits,
  },
)(LawsuitsScreen);
