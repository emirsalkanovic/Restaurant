import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import styles from '../style/calendar-style';
import Header from '../../../components/Header';
import { COLOR_PRIMARY_BLUE, COLOR_PRIMARY_GREEN, COLOR_PRIMARY_RED, COLOR_PRIMARY_ERROR_RED } from '../../../assets/colors/colors';

class MainCalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date().toISOString().slice(0,10),
      selectedDate: null,
    }
  }

  render() {
    console.log('TRENUTNI', this.state.currentDate)
    return (
      <SafeAreaView
        style={styles.calendarContainer}
      >
        <View style={styles.calendarHeaderContainer}>
          <Header title='Calendar' />
        </View>
        <View style={styles.calendarMapaContainer}>
          <View style={styles.calendarMapaFirstShift}>
            <Text style={styles.calendarMapaFirstShiftText}>PRVA SMJENA</Text>
          </View>
          <View style={styles.calendarMapaSecondShift}>
          <Text style={styles.calendarMapaSecondShiftText}>DRUGA SMJENA</Text>
          </View>
        </View>
        <Calendar
          current={this.state.currentDate}
          onDayPress={(day) => { 
            console.log('selected day', day) 
            this.setState({
              selectedDate: day.dateString
            })
          }}
          markedDates={{
            '2020-08-10': { startingDay: true, color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-11': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-12': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-13': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-14': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-15': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-16': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-17': { color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-18': { selected: true, endingDay: true, color: COLOR_PRIMARY_BLUE, textColor: 'white' },
            '2020-08-19': { startingDay: true, color: '#50cebb', textColor: 'white' },
            '2020-08-20': { color: '#50cebb', textColor: 'white' },
            '2020-08-21': { color: '#50cebb', textColor: 'white' },
            '2020-08-22': { color: '#50cebb', textColor: 'white' },
            '2020-08-23': { color: '#50cebb', textColor: 'white' },
            '2020-08-24': { color: '#50cebb', textColor: 'white' },
            '2020-08-25': { color: '#50cebb', textColor: 'white' },
            '2020-08-26': { color: '#50cebb', textColor: 'white' },
            '2020-08-27': { selected: true, endingDay: true, color: '#50cebb', textColor: 'white' }
          }}
          markingType={'period'}
        />

        {this.state.selectedDate && 
          <View style={styles.calendarOpenContainer}>
            <Text>{this.state.selectedDate}</Text>
          </View>
        }
      </SafeAreaView>
    );
  }
}

export default MainCalendarScreen;