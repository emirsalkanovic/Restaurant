import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import styles from '../styles/auth-styles';
import TextButton from '../../../components/TextButton';


const LandingScreen = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../assets/img/bakcground_image.png')}
    >
      <Image
        source={require('../../../assets/img/milky_logo.jpg')}
        style={styles.logo}
      />
      <View style={styles.buttonsContainer}>
        <TextButton
          title="Register"
          titleStyle={styles.signButtonTitle}
          onPress={() => props.navigation.navigate('Signin')}
          buttonStyle={styles.signButton}
        />
        <TextButton
          title="Prijavi se"
          titleStyle={styles.loginButtonTitle}
          onPress={() => props.navigation.navigate('Login')}
          buttonStyle={styles.loginButtonLanding}
        />
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;