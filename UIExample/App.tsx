import React, { Component } from 'react';
import { View, TextInput, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    username: '',
    password: '',
    phone:'',
    email:'',
    address:''
  };

  handleUsernameChange = (username) => {
    this.setState({ username });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handleAddressChange = (address) => {
    this.setState({ address });
  };

  handlePhoneChange = (phone) => {
    this.setState({ phone });
  };

  handleLogin = () => {
    const { username, password,email,phone,address } = this.state;
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={this.handleUsernameChange}
            value={this.state.username}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={this.handleEmailChange}
            value={this.state.email}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            onChangeText={this.handlePhoneChange}
            value={this.state.phone}
            autoCapitalize="none"
          />
           <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={this.handleAddressChange}
            value={this.state.address}
            returnKeyType='done'
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
            returnKeyType='done'
            secureTextEntry
          />
          <Button title="Login" onPress={this.handleLogin} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default App;