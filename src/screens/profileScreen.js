import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';
import {Title, SimpleButton} from '../components';
import {logout} from '../ducks/modules/authDuck';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <SafeAreaView>
        <Title text="Usuário" />
        <Text>{this.props.email}</Text>
        <SimpleButton onPress={() => this.props.logout(this.props.navigation)}>Sair</SimpleButton>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
});

export default connect(
  mapStateToProps,
  {logout},
)(ProfileScreen);
