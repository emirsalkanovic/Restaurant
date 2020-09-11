import React from 'react';
import { View, Text, KeyboardAvoidingView, SafeAreaView } from 'react-native';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import styles from '../styles/auth-styles';
import TransparentHeader from '../../../components/TransparentHeader';
import TextField from '../../../components/TextField';
import TextButton from '../../../components/TextButton';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            errors: {},
            isValid: false
        }
    }

    validateEmailPasswordSrnNumber = () => {
        const { userName, password } = this.state;
        if (userName.trim() === '') {
          this.setErrorMessage('Please enter your User Name', 'userName');
        } else if (password.trim() === '') {
          this.setErrorMessage('Please enter your password', 'password');
        } else if (password.trim().length <= 4) {
          this.setErrorMessage('Password must be at least 4 characters long', 'password');
        } else {
          this.setErrorMessage('');
        }
      }

      renderEmailLabel = () => {
        if (this.state.userName.length > 0) {
          return (
            <Text
              style={this.state.errors.userName
                ? styles.errorText
                : styles.labelText}
            >
              User Name
            </Text>
          );
        }
      }

      renderPasswordLabel = () => {
        if (this.state.password.length > 0) {
          return (
            <Text
              style={this.state.errors.password
                ? styles.errorText
                : styles.labelText}
            >
              Password
            </Text>
          );
        }
      }

      renderEmailError = () => {
        if (this.state.errors.userName) {
          return (
            <Text style={styles.errorText}>
              {this.state.errors.userName}
            </Text>
          );
        }
      }
    
      renderPasswordError = () => {
        if (this.state.errors.password) {
          return (
            <Text style={styles.errorText}>
              {this.state.errors.password}
            </Text>
          );
        }
      }

      setErrorMessage = (value, key) => {
        if (key === undefined) {
          this.setState({
            errors: {},
            isValid: true
          });
        } else {
          this.setState({
            errors: {
              [key]: value,
              isValid: false
            }
          });
        }
      };

      onPressLogin = async () => {
        await this.validateEmailPasswordSrnNumber();
        if (this.state.isValid) {
          //TO DO LOGIN 
        //   Add Navigation
        
        }
      }

    render(){
        return(
            <SafeAreaView style={styles.containerLogin}>
        {/*  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> */}
        <View style={styles.headerHolder}>
          <TransparentHeader navigation={this.props.navigation} title="Log In" />
        </View>
        <View style={styles.inputHolder}>
          {this.renderEmailLabel()}
          <TextField
            placeholder="User Name"
            autoFocus
            value={this.state.userName}
            onChangeText={(userName) => this.setState({ userName })}
            returnKeyType="next"
          />
          {this.renderEmailError()}
          {this.renderPasswordLabel()}
          <TextField
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            containerInputStyle={styles.containerInputPassword}
            returnKeyType="done"
          />
          {this.renderPasswordError()}
          {/* {this.renderErrorMessages(wrongCredentials, networkError)} */}
        </View>
        <View style={styles.loginContainer}>
          <TextButton
            // onPress={() => this.onPressLogin(this.props)}
            onPress={() => this.props.navigation.navigate('WaiterDashboard')}
            title="Log In"
            buttonStyle={this.state.userName.length > 0 || this.state.password.length > 0
              ? styles.activeButton
              : styles.loginButton}
            titleStyle={styles.buttonTitle}
          />
        </View>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
        );
    }
}

export default LoginScreen;