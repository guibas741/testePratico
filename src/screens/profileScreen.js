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
        <Text>{this.props.user}</Text>
        <SimpleButton onPress={() => this.props.logout(this.props.navigation)}>Sair</SimpleButton>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  {logout},
)(ProfileScreen);
