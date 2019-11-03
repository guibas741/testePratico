import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {HeaderWithIcon, LawsuitsList, Spinner} from '../components';
import {getAllLawsuits} from '../ducks/modules/lawsuitsDuck';
import {scale} from '../utils';

class LawsuitsScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getAllLawsuits();
  }

  renderList() {
    if (this.props.loading) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      );
    }

    return <LawsuitsList lawsuitsCases={this.props.lawsuitsCases} />;
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <HeaderWithIcon text="Processos" iconName="search" />
        {this.renderList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(10),
  },
  spinnerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(30),
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
