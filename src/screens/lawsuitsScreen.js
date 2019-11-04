import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {HeaderWithIcon, LawsuitsList, Spinner, Input} from '../components';
import {getAllLawsuits, filterLawsuits} from '../ducks/modules/lawsuitsDuck';
import {scale} from '../utils';

class LawsuitsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false,
      searchQuery: '',
    };

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

  renderSearchBar() {
    if (this.state.showSearchBar) {
      return (
        <View style={styles.searchContainerStyle}>
          <View style={{flex: 1}}>
            <Input
              placeholder="Pesquisar.."
              onChangeText={value => this.setState({searchQuery: value})}
              value={this.state.searchQuery}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.filterLawsuits(this.state.searchQuery)}>
            <Icon
              type="MaterialIcons"
              name="search"
              style={styles.closeIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.filterLawsuits('');
              this.setState({showSearchBar: false, searchQuery: ''});
            }}>
            <Icon
              type="MaterialIcons"
              name="close"
              style={styles.closeIconStyle}
            />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <HeaderWithIcon
        text="Processos"
        iconName="search"
        iconFunction={() => this.setState({showSearchBar: true})}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        {this.renderSearchBar()}
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
  closeIconStyle: {
    padding: scale(10),
    color: '#4D4E4F',
  },
  searchContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
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
    filterLawsuits,
  },
)(LawsuitsScreen);
