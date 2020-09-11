import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY_WHITE, COLOR_BUTTON_LIGHT_GRAY, COLOR_FONT_GRAY, COLOR_PRIMARY_ERROR_RED, COLOR_LIGHT_GRAY_BACKGROUND, COLOR_PRIMARY_BLUE } from '../../../assets/colors/colors';

export default StyleSheet.create({
  calendarContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  calendarHeaderContainer: {
    marginTop: '3%',
    marginLeft: '3%',
  },

  calendarMapaContainer: {
    height: 60, 
    width: '90%',
    alignSelf: 'center',
    justifyContent:'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },

  calendarMapaFirstShift: {
    height: 40,
    width: 140,
    backgroundColor: COLOR_PRIMARY_BLUE,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  }, 

  calendarMapaFirstShiftText: {
    color: COLOR_PRIMARY_WHITE, 
    fontWeight: 'bold'
  },
  
  calendarMapaSecondShift: {
    height: 40,
    width: 140,
    backgroundColor: '#50cebb',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },

  calendarMapaSecondShiftText: {
    color: COLOR_PRIMARY_WHITE, 
    fontWeight: 'bold'
  },

  calendarOpenContainer: {
    borderWidth: 2,
    borderColor: COLOR_PRIMARY_BLUE,
    flex: 1,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center'
  }

})