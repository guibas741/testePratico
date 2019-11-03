import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Title, SimpleButton} from '../components';
import {logout} from '../ducks/modules/authDuck';
import {scale} from '../utils';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Title text="Usuário" />
        <View style={{marginTop: scale(20), marginBottom: scale(45)}}>
          <Text>{this.props.user}</Text>
        </View>
        <SimpleButton onPress={() => this.props.logout(this.props.navigation)}>
          Sair
        </SimpleButton>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(10),
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  {logout},
)(ProfileScreen);
