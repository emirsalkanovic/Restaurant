import { StyleSheet, Dimensions } from 'react-native';
// import { FONT_AVENIR_MEDIUM } from '../../../assets/fonts/fonts';
import {
  COLOR_NAVIGATION_TAB_BLUE,
  COLOR_FONT_BLACK,
  COLOR_FONT_LIGHT_BLACK,
  COLOR_PRIMARY_WHITE,
  COLOR_PRIMARY_GRAY,
  COLOR_NEW_FONT_BLACK,
  COLOR_NEW_FONT_GRAY,
  COLOR_BUTTON_LIGHT_GRAY,
  COLOR_PRIMARY_PURPLE,
  COLOR_LIGHT_GRAY_BACKGROUND,
  COLOR_PRIMARY_PURPLE_DARK,
  COLOR_PRIMARY_RED,
  COLOR_PRIMARY_ERROR_RED,
  COLOR_VALID_LIGHT_GREEN,
  COLOR_VALID_GREEN
} from '../../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  headerOrderContainer: {
    marginLeft: '3%',
    marginTop: '3%'
  },

  listDivider: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    width: '100%',
    // height: 50,
    zIndex: 0,
    position: 'absolute',
  },

  listHolder: {
    flex: 1,
    marginTop: '2%',
    backgroundColor: 'yellow'
  },

  singleReadyOrderContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: COLOR_NEW_FONT_GRAY,
    padding: '2%'
  },

  //NEW ORDER SCREEN
  // newOrderContainer: {
  //   flex: 1,
  //   backgroundColor: COLOR_PRIMARY_WHITE,
  //   flexDirection: ''
  // },
  creatingOrderContainer: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: COLOR_PRIMARY_WHITE,
    // backgroundColor: 'green',
    // borderWidth: 1,
    // borderRadius: 4,
    // borderColor: COLOR_LIGHT_GRAY_BACKGROUND,
    marginLeft: '3%',
    marginRight: '3%'
  },

  finalOrderList: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  currentOrderHolder: {
    backgroundColor: COLOR_LIGHT_GRAY_BACKGROUND,
    padding: '3%'
  },

  currentOrderText: {
    color: COLOR_FONT_BLACK,
    fontWeight: '400',
    fontSize: 14
  },

  orderPresentContainer: {
    padding: '3%',
    borderWidth: 2,
    borderColor: COLOR_PRIMARY_PURPLE,
    margin: '1%',
    borderRadius: 7
  },

  showingOrderContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE,
    // backgroundColor: 'purple',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLOR_LIGHT_GRAY_BACKGROUND,
  },

  tablesListHolder: {
    flex: 1,
    marginTop: '2%',
    backgroundColor: COLOR_PRIMARY_WHITE,
    // justifyContent: 'center',
    // alignItems:'center'    
  },

  tableItem: {
    height: 55,
    flex: 1,
    maxWidth: Dimensions.get('window').width / 5 - 6,
    backgroundColor: COLOR_NEW_FONT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },

  tableText: {
    fontWeight: '400',
    color: COLOR_PRIMARY_WHITE
  },

  orderMenuContainer: {
    flex: 4,
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  orderButtonContainer: {
    height: 130,
    backgroundColor: COLOR_PRIMARY_WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },

  sendButtonContainer: {
    height: 80,
    backgroundColor: COLOR_PRIMARY_WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },

  orderNavigationButtonsHolder: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },

  cancelOrderButton: {
    backgroundColor: COLOR_PRIMARY_ERROR_RED,
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: '1%'
  },

  nextOrderButton: {
    backgroundColor: COLOR_PRIMARY_PURPLE,
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: '1%'
  },

  sendOrderButton: {
    backgroundColor: COLOR_PRIMARY_GRAY,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    // margin: '2%'
  },

  sendOrderActiveButton:{
    backgroundColor: COLOR_PRIMARY_PURPLE,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    // margin: '2%'
  },

  activeButton: {
    backgroundColor: COLOR_PRIMARY_PURPLE,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: '5%'
  },

  buttonTitle: {
    fontWeight: 'bold',
    // fontFamily: FONT_AVENIR_MEDIUM,
    fontSize: 18,
    color: COLOR_PRIMARY_WHITE
  },

  singleOrderPresentContainer:{
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: COLOR_VALID_GREEN,
    padding: '3%',
    margin: '1%'
  },

  singleOrderPresent: {
    flex: 1, 
    fontSize: 15,
  },

  singleOrderPresentBold: {
    fontSize: 15, 
    fontWeight: 'bold'
  },

  singlePricePresent: {
    flex: 1, 
    fontSize: 14,
  },

  //DRINKS MENU 

  drinksMenu: {
    flex: 1,
    backgroundColor: 'orange'
  },

  drinkMenuItemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    height: 30,
    marginBottom: '1%',
    borderBottomColor: COLOR_PRIMARY_GRAY,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY_WHITE,
  },

  drinkMenuSingleItem: {
    fontWeight: '400', 
    fontSize: 16,
    marginBottom: 3
  },

  // FOOD MENU

  foodListHolder: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // maxWidth: Dimensions.get('window').width / 5 - 6,
    // backgroundColor: COLOR_NEW_FONT_GRAY,
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 2,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  // ORDER IN PROCESS

  orderInProcessContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR_PRIMARY_GRAY,
    // borderRadius: 4,
    // margin: '1%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '1.5%',

  },

  singleOrderInProcessContainer: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    flex: 1,
    borderColor: COLOR_NEW_FONT_GRAY,
    borderWidth: 2,
    borderRadius: 7,
    margin: '1%'
  },

  readyOrderList:{
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE,
    margin: '1%'
  },

  // novaProba: {
  //   flex: 1,
  //   backgroundColor: 'orange',
  //   borderBottomWidth: 4,
  //   borderBottomColor: 'red'
  // },
  readyOrderContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE,
    // marginLeft: '1.5%',
    borderColor: COLOR_PRIMARY_PURPLE,
    borderWidth: 2,
    borderRadius: 7
  }
})