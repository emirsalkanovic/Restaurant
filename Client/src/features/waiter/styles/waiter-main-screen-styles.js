import { StyleSheet, Dimensions, Platform } from 'react-native';
// import { FONT_AVENIR_MEDIUM, FONT_AVENIR_HEAVY } from '../../../assets/fonts/fonts';
import {
  COLOR_FONT_BLACK,
  COLOR_PRIMARY_BLUE,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_GRAY,
  COLOR_PRIMARY_GREEN,
  COLOR_PENDING_STATUS,
  COLOR_FONT_GRAY,
  COLOR_PRIMARY_RED,
  COLOR_PRIMARY_PURPLE,
  COLOR_PRIMARY_ERROR_RED,
  COLOR_VALID_ORANGE,
  COLOR_VALID_LIGHT_RED,
  COLOR_VALID_LIGHT_ORANGE,
  COLOR_VALID_LIGHT_GREEN,
  COLOR_VALID_GREEN,
  COLOR_BUTTON_LIGHT_GRAY,
  COLOR_NEW_FONT_BLACK,
  COLOR_NEW_FONT_GRAY,
  COLOR_LIGHT_GRAY_BACKGROUND
} from '../../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY_WHITE
      },

      indicator: {
        backgroundColor: COLOR_PRIMARY_PURPLE
      },
    
      label: {
        color: COLOR_FONT_BLACK,
        // fontFamily: FONT_AVENIR_MEDIUM,
        borderTopWidth: 0
      },
    
      tab: {
        width: windowWidth / 3
      },
    
      tabbar: {
        backgroundColor: COLOR_PRIMARY_WHITE,
        borderTopWidth: 0
      },

      headerOrderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '4%',
        alignItems: 'center'
    
      }
})