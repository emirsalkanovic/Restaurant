import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY_WHITE, COLOR_BUTTON_LIGHT_GRAY, COLOR_FONT_GRAY, COLOR_PRIMARY_ERROR_RED } from '../../../assets/colors/colors';

export default StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  profileHeaderContainer: {
    marginLeft: '3%',
    marginTop: '3%'
  },

  profileContentContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE,
    marginLeft: '5%',
    marginTop: '5%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  accountInformationContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: COLOR_PRIMARY_WHITE,
    marginTop: '10%',
    justifyContent: 'flex-start',
  },

  profileInformationContainer: {
    height: '30%',
    width: '95%',
    backgroundColor: COLOR_PRIMARY_WHITE,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: '5%'
  },

  profileInformaitonTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: '100%',
    textAlign: 'center'
  },

  profileInformationLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLOR_FONT_GRAY,
    textAlign: 'center'
  },

  accountInformationInnerContainer: {
    flexDirection: 'row',
    borderBottomColor: COLOR_FONT_GRAY,
    borderBottomWidth: 2,
    height: 80,
    width: '100%',
    backgroundColor: COLOR_PRIMARY_WHITE,
    flexDirection: 'row',
    alignItems: 'center'
  },

  profileIcon: {
    marginLeft: '3%',
    height: 50,
    width: 50
  },

  arrowRightIconContainer: {
    flex: 1,
    marginRight: '5%'
  },

  arrowRightIcon: {
    height: 22,
    width: 18,
    alignSelf: 'flex-end',
  },

  accountInformationText: {
    marginLeft: '3%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  accountInformationLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOR_FONT_GRAY
  },

  accountInformationContent: {
    fontSize: 16,
    fontWeight: '400'
  },

  profileLogoutContainer: {
    height: 80,
    width: '100%',
    backgroundColor: COLOR_PRIMARY_WHITE,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginBottom: '10%',
    alignItems: 'center',
    borderBottomColor: COLOR_PRIMARY_ERROR_RED,
    borderBottomWidth: 3
  },

  accountInformationLogoutTextContainer: {
    marginLeft: '3%',
    height: 80,
    justifyContent: 'center',
  },

  logoutText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_FONT_GRAY
  },

  logOutIcon: {
    height: 40,
    width: 40
  }

})