import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {SimpleButton, Title, Input} from '../components';
import {scale} from '../utils';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
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
        <SimpleButton onPress={() => console.log(this.state)}>
          ENTRAR
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
  inputsContainerStyle: {
    marginTop: scale(20),
    marginBottom: scale(25),
  },
});

export default LoginScreen;
