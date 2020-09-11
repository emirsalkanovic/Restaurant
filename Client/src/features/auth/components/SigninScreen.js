import React from 'react';
import { View, Text, Linking, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from '../styles/auth-styles';
import { signup } from '../actions/auth-actions';
import TransparentHeader from '../../../components/TransparentHeader';
import TextButton from '../../../components/TextButton';
import TextField from '../../../components/TextField';
import { auth } from '../../../config/auth';

class SinginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      role: 'manager',
      errors: {}
    };
  }

  //   componentWillReceiveProps = async (nextProps) => {
  //     if (nextProps.shouldSignup) {
  //       this.props.navigation.navigate('Onboard');
  //       await auth.storeToken(nextProps.signup.payload.data.token);
  //     }
  //   };


  isValidUserInputs = () => {
    const { userName, password } = this.state;
    if (userName.trim() === '') {
      this.setErrorMessage('Please enter a valid User Name', 'userName');
    } else if (password.trim() === '') {
      this.setErrorMessage('Please enter your password', 'password');
    } else if (password.trim().length <= 4) {
      this.setErrorMessage('Password must be at least 4 characters long', 'password');
    } else {
      this.setErrorMessage({});
      this.props.actions.signup(this.state.userName, this.state.password, this.state.role);

      fetch('http://192.168.100.7:3000', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: this.state.userName,
          password: this.state.password,
          role: this.state.role
        })
      });
    }}

    //todo add real validation instead of the basic one
    onPressSignup = () => {
      this.isValidUserInputs();

    };

    renderUserNameError = () => {
      const { userName } = this.state.errors;
      if (userName) {
        return (
          <Text style={styles.errorText}>{userName}</Text>
        );
      }
    }

    renderUserNameLabel = () => {
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

    renderPasswordError = () => {
      const { password } = this.state.errors;
      if (password) {
        return (
          <Text style={styles.errorText}>{password}</Text>
        );
      }
    }

    setErrorMessage = (value, key) => {
      this.setState({
        errors: {
          [key]: value
        }
      });
    };

    radioButtonPress = (value) => {
      this.setState({
        role: value
      })
    }

    render() {
      return (
        <SafeAreaView style={styles.containerSignIn}>
          <View style={styles.headerHolder}>
            <TransparentHeader navigation={this.props.navigation} title="Register" />
          </View>
          <View style={styles.inputHolder}>
            {this.renderUserNameLabel()}
            <TextField
              placeholder="User Name"
              autoFocus
              value={this.state.userName}
              onChangeText={(userName) => this.setState({ userName })}
              returnKeyType="next"
            />
            {this.renderUserNameError()}
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

          </View>
          <View style={styles.radioButtonsContainer}>
            <View style={styles.radioButtonSingleContainer}>
              <TouchableOpacity
                onPress={() => this.radioButtonPress('manager')}
                style={this.state.role === 'manager' ? styles.radioButtonActive : styles.radioButton}
              >
                {this.state.role === 'manager' ?
                  <View style={styles.radioButtonBullet}></View>
                  : null
                }
              </TouchableOpacity>
              <Text style={this.state.role === 'manager' ? styles.radioButtonTextActive : styles.radioButtonText}>Manager</Text>
            </View>
            <View style={styles.radioButtonSingleContainer}>
              <TouchableOpacity
                onPress={() => this.radioButtonPress('staff')}
                style={this.state.role !== 'manager' ? styles.radioButtonActive : styles.radioButton}
              >
                {this.state.role !== 'manager' ?
                  <View style={styles.radioButtonBullet}></View>
                  : null
                }
              </TouchableOpacity>
              <Text style={this.state.role !== 'manager' ? styles.radioButtonTextActive : styles.radioButtonText}>Staff</Text>
            </View>
          </View>
          <View style={styles.loginContainer}>
            <TextButton
              onPress={() => this.onPressSignup(this.props)}
              title="Sign Up"
              buttonStyle={this.state.userName.length > 0 || this.state.password.length > 0
                ? styles.activeButton
                : styles.loginButton}
              titleStyle={styles.buttonTitle}
            />
          </View>
        </SafeAreaView>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      // signup: state.signup.results,
      // shouldSignup: state.signup.shouldSignup
    };
  };

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        signup
      },
      dispatch
    )
  };
}

// export default SinginScreen;
export default connect(mapStateToProps, mapDispatchToProps)(SinginScreen);