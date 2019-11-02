import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../ducks/modules/authDuck';
import {SimpleButton, Title, Input, Spinner} from '../components';
import {scale} from '../utils';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <SimpleButton
        onPress={() => this.props.login(this.state.user, this.state.password)}>
        ENTRAR
      </SimpleButton>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Title text={'Login'} />
        <View style={styles.inputsContainerStyle}>
          <Input
            placeholder="Usuário"
            onChangeText={value => this.setState({user: value})}
            value={this.state.user}
          />

          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={value => this.setState({password: value})}
            value={this.state.password}
          />
        </View>
        {this.renderLoginButton()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: scale(10),
    justifyContent: 'center',
  },
  inputsContainerStyle: {
    marginTop: scale(20),
    marginBottom: scale(25),
  },
});

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  {login},
)(LoginScreen);
