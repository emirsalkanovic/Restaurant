import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

import styles from '../style/statistic-style';
import StatisticButtons from './StatisticButtons';
import { COLOR_PRIMARY_PURPLE } from '../../../assets/colors/colors';

let topTables = [
  [
    { tableId: '4', income: 218.15 },
    { tableId: '16', income: 199.65 },
    { tableId: '21', income: 163.35 },
    { tableId: '25', income: 121.75 },
    { tableId: '8', income: 85.40 },
  ]
];

let topTables1 = [
  [
    { tableId: '18', income: 300.15 },
    { tableId: '12', income: 224.65 },
    { tableId: '6', income: 221.35 },
    { tableId: '9', income: 184.75 },
    { tableId: '8', income: 165.40 },
  ]
];

let topStaff = [
  { staffName: 'Bakir', income: 218.15 },
  { staffName: 'Mile', income: 216.25 },
  { staffName: 'Zeljko', income: 114.2 },
  { staffName: 'Dragan', income: 65.25 },
  { staffName: 'Haris', income: 4.20 },
];

let topStaff1 = [
  { staffName: 'Mile', income: 455.15 },
  { staffName: 'Dragan', income: 420.25 },
  { staffName: 'Bakir', income: 385.2 },
  { staffName: 'Zeljko', income: 165.25 },
  { staffName: 'Fahro', income: 20.20 },
];

let totalIncome = [
  { date: '2020-08-16', income: 1250.75, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-17', income: 1347.25, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-18', income: 2250.75, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-19', income: 3330.75, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-20', income: 4440.75, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-21', income: 1890.75, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-22', income: 1650.75, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-23', income: 1440.40, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-24', income: 1230.75, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-25', income: 250.30, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-26', income: 750.70, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-27', income: 1150.70, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-28', income: 2340.75, topTables: topTables, topStaff: topStaff },
  { date: '2020-08-29', income: 5200.00, topTables: topTables1, topStaff: topStaff1 },
  { date: '2020-08-30', income: 1134.00, topTables: topTables, topStaff: topStaff },
]

class DailyStatisticScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSection: 'total',
      currentDate: new Date().toISOString().slice(0, 10),
      selectedDate: null,
      totalIncome: totalIncome
    }
  }

  onButtonPress = (value) => {
    this.setState({
      activeSection: value
    })
  }

  renderShowingData = () => {
    if (this.state.activeSection === 'total') {
      let income = this.state.totalIncome.filter(item => item.date === this.state.selectedDate)
      return (
        <View style={styles.showingIncomContainer}>
          <Text>
            PROMET: {income[0].income} KM
          </Text>
        </View>
      );
    } else if (this.state.activeSection === 'table') {
      let data = this.state.totalIncome.filter(item => item.date === this.state.selectedDate)
      return (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          data={data[0].topTables[0]}
          renderItem={({ item }) => {
            return (
              <View style={styles.showingTextContainer}>
                <Text style={styles.showingContainerLabel}>
                  STO: {item.tableId}
                </Text>
                <Text style={styles.showingContainerSingleContent}>
                  {item.income} KM
                </Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          refreshing={false}
        />
      );
    } else if (this.state.activeSection === 'staff') {
      let data = this.state.totalIncome.filter(item => item.date === this.state.selectedDate)
      return (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          data={data[0].topStaff}
          renderItem={({ item }) => {
            return (
              <View style={styles.showingTextContainer}>
                <Text style={styles.showingContainerLabel}>
                  {item.staffName}
                </Text>
                <Text style={styles.showingContainerSingleContent}>
                  {item.income} KM
                </Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          refreshing={false}
        />
      );
    }
  }

  render() {
    let { activeSection } = this.state;
    return (
      <View style={styles.dailyContainer}>
        <StatisticButtons
          activeSection={activeSection}
          onButtonPress={this.onButtonPress}
        />
        <Calendar
          markedDates={{
            [this.state.selectedDate]: { selected: true, selectedColor: COLOR_PRIMARY_PURPLE }
          }}
          onDayPress={(day) => {
            this.setState({
              selectedDate: day.dateString
            })
          }}
        />
        {this.state.selectedDate &&
          <View style={styles.showingContainer}>
            <View style={styles.showingContainerHeader}>
              <Text>
                Datum: {this.state.selectedDate}
              </Text>
            </View>
            <View style={styles.showingContainerContent}>
              {this.renderShowingData()}
            </View>
          </View>
        }
      </View>
    );
  }
}

export default DailyStatisticScreen;