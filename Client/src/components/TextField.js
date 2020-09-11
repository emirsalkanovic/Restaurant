import React from 'react';

import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import {
  COLOR_PRIMARY_GRAY,
  COLOR_PRIMARY_PURPLE,
  COLOR_FONT_BLACK
} from '../assets/colors/colors';

// import { FONT_AVENIR_MEDIUM } from '../assets/fonts/fonts';

//TextInput - form components used for login/registration forms
class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      secureTextEntry: this.props.secureTextEntry
    };
  }

  onEyeIconPressed = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    const underlineColor = this.state.focused ? COLOR_PRIMARY_PURPLE : COLOR_PRIMARY_GRAY;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            autoFocus={this.props.autoFocus}
            onBlur={() => this.setState({ focused: false })}
            onFocus={() => this.setState({ focused: true })}
            autoCapitalize={this.props.autoCapitalize}
            secureTextEntry={this.state.secureTextEntry}
            onSubmitEditing={this.props.onSubmitEditing}
            placeholder={this.props.placeholder}
            returnKeyType={this.props.returnKeyType}
          />
          {this.state.secureTextEntry !== undefined ?
            <TouchableOpacity onPress={this.onEyeIconPressed}>
              <Image
                style={styles.eyeIcon}
                source={
                  this.state.secureTextEntry ?
                    require('../assets/img/eye_off_icon.png')
                    : require('../assets/img/eye_icon.png')
                }
              />
            </TouchableOpacity>
            : null}
        </View>
        <View style={[styles.underline, { backgroundColor: underlineColor }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLOR_PRIMARY_GRAY,
    // fontFamily: FONT_AVENIR_MEDIUM,
    marginTop: Platform.OS === 'ios' ? '5%' : '1.5%',
    width: '93%',
    marginBottom: Platform.OS === 'ios' ? '5%' : '1.5%',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  eyeIcon: {
    height: 16,
    width: 22
  },

  input: {
    fontSize: 17,
    color: COLOR_FONT_BLACK,
    // fontFamily: FONT_AVENIR_MEDIUM,
    width: '90%'
  },

  underline: {
    marginTop: Platform.OS === 'ios' ? 7 : '-1.5%',
    height: 2,
    backgroundColor: COLOR_PRIMARY_GRAY
  }
});

export default TextField;
