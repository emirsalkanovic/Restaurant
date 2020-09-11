import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../style/profile-style';
import Header from '../../../components/Header';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <SafeAreaView style={styles.profileContainer}>
        <View style={styles.profileHeaderContainer}>
          <Header title='Profile' />
        </View>
        <View style={styles.profileContentContainer}>

          <View style={styles.accountInformationContainer}>
            <View style={styles.profileInformationContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/img/bottom_nav_icon_profile.png')}
              />
              <View style={styles.profileInformaitonTextContainer}>
                <Text style={styles.profileInformationLabel}>Ime Prezime</Text>
              </View>
            </View>
            <View style={styles.accountInformationInnerContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/img/account_information_icon.png')}
              />
              <View style={styles.accountInformationText}>
                <Text style={styles.accountInformationLabel}>Informacije o Korisniku</Text>
              </View>
              <View style={styles.arrowRightIconContainer}>
                <Image
                  style={styles.arrowRightIcon}
                  source={require('../../../assets/img/arrow_right.png')}
                />
              </View>
            </View>
            <View style={styles.accountInformationInnerContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/img/question_icon.png')}
              />
              <View style={styles.accountInformationText}>
                <Text style={styles.accountInformationLabel}>Pomoc</Text>
              </View>
              <View style={styles.arrowRightIconContainer}>
                <Image
                  style={styles.arrowRightIcon}
                  source={require('../../../assets/img/arrow_right.png')}
                />
              </View>
            </View>
            <View style={styles.accountInformationInnerContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/img/icon_settings.png')}
              />
              <View style={styles.accountInformationText}>
                <Text style={styles.accountInformationLabel}>Podesavanja</Text>
              </View>
              <View style={styles.arrowRightIconContainer}>
                <Image
                  style={styles.arrowRightIcon}
                  source={require('../../../assets/img/arrow_right.png')}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.profileLogoutContainer}
            onPress={() => this.props.navigation.navigate('Landing')}
          >
            <Image
              style={styles.logOutIcon}
              source={require('../../../assets/img/logout_icon.png')}
            />
            <View style={styles.accountInformationLogoutTextContainer}>
              <Text style={styles.logoutText}>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;