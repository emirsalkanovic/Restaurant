import React from 'react';
import { Image, ImageBackground } from 'react-native';
import styles from '../styles/auth-styles';

class SplashScreen extends React.Component {
  handleSplashLoading = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  };

  async componentDidMount() {
    const data = await this.handleSplashLoading();

    if (data !== null) {
      this.props.navigation.navigate('Landing');
    }
  }
  
  render() {
    return (
      <ImageBackground
        source={require('../../../assets/img/bakcground_image.png')}
        style={styles.splashContainer}
      >
        <Image
          source={require('../../../assets/img/milky_logo.jpg')}
          style={styles.splashImage}
        />
      </ImageBackground>
    );
  }
}

export default SplashScreen;
