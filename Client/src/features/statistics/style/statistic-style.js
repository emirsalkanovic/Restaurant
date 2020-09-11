import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_PRIMARY_WHITE, COLOR_PRIMARY_ERROR_RED, COLOR_PRIMARY_PURPLE, COLOR_FONT_BLACK, COLOR_PRIMARY_PURPLE_DARK } from '../../../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  statisticContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE
  },

  statisticHeaderContainer: {
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

  dailyContainer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY_WHITE,
    marginLeft: '3%',
    marginRight: '3%'
  },

  dailyButtonsContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginTop: '2%'
  },

  singleDaylyButtonActive: {
    borderColor: COLOR_PRIMARY_PURPLE_DARK,
    borderWidth: 1,
    borderRadius: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    backgroundColor: COLOR_PRIMARY_PURPLE,
  },

  singleDaylyButton: {
    borderColor: COLOR_PRIMARY_PURPLE_DARK,
    borderWidth: 1,
    borderRadius: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    backgroundColor: COLOR_PRIMARY_WHITE,
  },

  singleDailyButtonTextActive: {
    color: COLOR_PRIMARY_WHITE,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },

  singleDailyButtonText: {
    color: COLOR_PRIMARY_PURPLE,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },

  showingContainer: {
    flex: 1,
    borderColor: COLOR_PRIMARY_PURPLE,
    borderWidth: 1,
    margin: '1%',
    borderRadius: 7
  },

  showingContainerHeader: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLOR_PRIMARY_PURPLE,
    borderBottomWidth: 1
  },

  showingContainerContent: {
    flex: 1,
  },

  showingIncomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  showingTextContainer: {
    flexDirection: 'row',
    height: 25,
    flex: 1,
    marginTop: '2%',
    borderBottomColor: COLOR_PRIMARY_PURPLE,
    borderBottomWidth: 0.5
  },

  showingContainerLabel: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    color: COLOR_FONT_BLACK,
    flex: 1,
    marginLeft: '5%'
  },

  showingContainerSingleContent: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    color: COLOR_PRIMARY_PURPLE,
    flex: 1,
    fontWeight: 'bold'
  },
  // MONTH
  monthChangeContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
  },

  currentMonth: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_PRIMARY_PURPLE,
    flex: 4,
    textAlign: 'center'
  },

  monthButton: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  monthlyTotalIncomeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderBottomColor: COLOR_PRIMARY_ERROR_RED,
    borderBottomWidth: 1
  },

  monthlyTotalLabel: {
    color: COLOR_FONT_BLACK,
    width: '45%'
  },

  monthlyTotalValue: {
    color: COLOR_PRIMARY_PURPLE,
    fontWeight: 'bold',
    width: '45%'
  },

  monthlyTopDayContainer: {
    height: '90%'
  },

  monthlyTopDaySingleContainer: {
    height: 25,
    flexDirection: 'row',
    borderBottomColor: COLOR_PRIMARY_PURPLE,
    borderBottomWidth: 0.5,
    marginTop: '2%'
  }

})