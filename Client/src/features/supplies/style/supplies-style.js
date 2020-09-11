import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY_WHITE, COLOR_PRIMARY_ERROR_RED, COLOR_PRIMARY_PURPLE, COLOR_FONT_BLACK, COLOR_PRIMARY_PURPLE_DARK } from '../../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    suppliesContainer: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY_WHITE
      },
    
      suppliesHeaderContainer: {
        marginLeft: '5%'
      },
    
      statisticContentContainer: {
        flex: 1,
        backgroundColor: 'orange',
        marginTop: '5%',
        marginLeft: '5%'
      },
    
      indicator: {
        backgroundColor: COLOR_PRIMARY_PURPLE
      },
    
      label: {
        color: COLOR_FONT_BLACK,
        borderTopWidth: 0
      },
    
      tab: {
        width: windowWidth / 3
      },
    
      tabbar: {
        backgroundColor: COLOR_PRIMARY_WHITE,
        borderTopWidth: 0
      },
})



