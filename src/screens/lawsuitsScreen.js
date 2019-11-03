import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {getAllLawsuits} from '../ducks/modules/lawsuitsDuck';

class LawsuitsScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getAllLawsuits();
  }

  render() {
    return (
      <SafeAreaView>
        <Text>PROCESSOS</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  lawsuitsItems: state.lawsuit.lawsuitsItems,
  loading: state.lawsuit.loading,
  error: state.lawsuit.error,
});

export default connect(
  mapStateToProps,
  {
    getAllLawsuits,
  },
)(LawsuitsScreen);
