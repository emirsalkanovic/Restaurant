import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from '../style/statistic-style';
import StatisticButtons from './StatisticButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR_FONT_GRAY } from '../../../assets/colors/colors';

let topStaff = [
  { staffName: 'Bakir', income: 145652.00 },
  { staffName: 'Mile', income: 123654.25 },
  { staffName: 'Dragan', income: 95687.45 },
  { staffName: 'Asim', income: 89620.25 },
  { staffName: 'Zeljko', income: 75000.40 },
  { staffName: 'Nerko', income: 52360.25 },
];

let topTables = [
  { tableId: '4', income: 145652.00 },
  { tableId: '16', income: 123654.25 },
  { tableId: '8', income: 95687.45 },
  { tableId: '3', income: 89620.25 },
  { tableId: '21', income: 75000.40 },
  { tableId: '17', income: 52360.25 },
]

let yearlyTotalInocme = { year: '2020', totalIncome: 678954.50, topStaff: topStaff, topTables: topTables }

class YearlyStatisticScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 'total',
      currentYear: '2020',
      yearlyIncome: yearlyTotalInocme
    }
  }

  onButtonPress = (value) => {
    this.setState({
      activeSection: value
    })
  }

  renderMainContent = () => {
    if (this.state.activeSection === 'total') {
      return (
        <View style={styles.monthlyTopDayContainer}>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>Jul</Text>
            <Text style={styles.showingContainerSingleContent}>12365.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>April</Text>
            <Text style={styles.showingContainerSingleContent}>11478.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>Jun</Text>
            <Text style={styles.showingContainerSingleContent}>10000.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>Maj</Text>
            <Text style={styles.showingContainerSingleContent}>9365.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>Avgust</Text>
            <Text style={styles.showingContainerSingleContent}>8365.85 KM</Text>
          </View>
        </View>
      );
    }
    if (this.state.activeSection === 'table') {
      let data = this.state.yearlyIncome.topTables;
      return (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          data={data}
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
    }
    if (this.state.activeSection === 'staff') {
      let data = this.state.yearlyIncome.topStaff;
      return (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          data={data}
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
        <View style={styles.monthChangeContainer}>
          <TouchableOpacity
            style={styles.monthButton}
          // onPress={() => this.onPreviousMonth()}
          >
            <FontAwesomeIcon icon={faChevronLeft} size={24} color={COLOR_FONT_GRAY} />
          </TouchableOpacity>
          <Text style={styles.currentMonth}>{this.state.currentYear}</Text>
          <TouchableOpacity
            style={styles.monthButton}
          // onPress={() => this.onNextMonth()}
          >
            <FontAwesomeIcon icon={faChevronRight} size={24} color={COLOR_FONT_GRAY} />
          </TouchableOpacity>
        </View>
        <View style={styles.showingContainer}>
          <View style={styles.showingContainerHeader}>
            <Text>
              Godina: {this.state.currentYear}
            </Text>
          </View>
          <View style={styles.showingContainerContent}>
            <View>
              <View style={styles.monthlyTotalIncomeContainer}>
                <Text style={styles.monthlyTotalLabel}>Ukupan promet: </Text>
                <Text style={styles.monthlyTotalValue}>{this.state.yearlyIncome.totalIncome} KM</Text>
              </View>
            </View>
            {this.renderMainContent()}
          </View>
        </View>
      </View>
    );
  }
}

export default YearlyStatisticScreen;