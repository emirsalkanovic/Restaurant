import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from '../style/statistic-style';
import StatisticButtons from './StatisticButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR_FONT_GRAY } from '../../../assets/colors/colors';

let topTables = [
  { tableId: 4, income: 4358.55 },
  { tableId: 8, income: 2514.75 },
  { tableId: 14, income: 2002.55 },
  { tableId: 22, income: 1458.25 },
  { tableId: 45, income: 1211.85 },
];

let topTables1 = [
  { tableId: 8, income: 3958.55 },
  { tableId: 4, income: 3514.75 },
  { tableId: 14, income: 2245.55 },
  { tableId: 11, income: 1962.25 },
  { tableId: 20, income: 1950.85 },
];

let topStaff = [
  { staffName: 'Bakir', income: 8543.25 },
  { staffName: 'Mile', income: 7943.00 },
  { staffName: 'Dragan', income: 6502.25 },
  { staffName: 'Elmedin', income: 3254.25 },
  { staffName: 'Mirsad', income: 2500.00 },
]

let topStaff1 = [
  { staffName: 'Mile', income: 8054.25 },
  { staffName: 'Dragan', income: 7611.00 },
  { staffName: 'Bakir', income: 6945.25 },
  { staffName: 'Nermin', income: 3654.25 },
  { staffName: 'Mirsad', income: 3492.00 },
]

let totalInocome = [
  { month: 'April', totalIncome: 36554.00, topTables: topTables, topStaff: topStaff },
  { month: 'Maj', totalIncome: 32654.35, topTables: topTables1, topStaff: topStaff1 },
  { month: 'Jun', totalIncome: 47654.40, topTables: topTables, topStaff: topStaff },
  { month: 'Jul', totalIncome: 52354.35, topTables: topTables1, topStaff: topStaff1 },
  { month: 'Avgust', totalIncome: 57454.35, topTables: topTables, topStaff: topStaff },
]

class MonthlyStatisticScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 'total',
      totalIncome: totalInocome,
      selectedDate: null,
      months: [
        'April', 'Maj', 'Jun', 'Jul', 'Avgust'
      ],
      index: 4
    }
  }

  onButtonPress = (value) => {
    this.setState({
      activeSection: value
    })
  }

  onNextMonth = () => {
    if (this.state.index === 4) {

    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  onPreviousMonth = () => {
    if (this.state.index === 0) {

    } else {
      this.setState({
        index: this.state.index - 1,
      })
    }
  }

  renderCurrentMonth = () => {
    return (
      <Text style={styles.currentMonth}>{this.state.months[this.state.index]}</Text>
    )
  }

  renderSubcontent = (monthlyInocme) => {
    if (this.state.activeSection === 'table') {
      return (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          data={monthlyInocme[0].topTables}
          renderItem={({ item }) => {
            return (
              <View style={styles.showingTextContainer}>
                <Text style={styles.showingContainerLabel}>
                  Sto: {item.tableId}
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
      )
    }
    if (this.state.activeSection === 'staff') {
      return (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          data={monthlyInocme[0].topStaff}
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
    } if (this.state.activeSection === 'total') {
      return (
        <View style={styles.monthlyTopDayContainer}>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>25. {this.state.months[this.state.index]}</Text>
            <Text style={styles.showingContainerSingleContent}>12365.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>01. {this.state.months[this.state.index]}</Text>
            <Text style={styles.showingContainerSingleContent}>11478.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>08. {this.state.months[this.state.index]}</Text>
            <Text style={styles.showingContainerSingleContent}>10000.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>16. {this.state.months[this.state.index]}</Text>
            <Text style={styles.showingContainerSingleContent}>9365.25 KM</Text>
          </View>
          <View style={styles.monthlyTopDaySingleContainer}>
            <Text style={styles.showingContainerLabel}>15. {this.state.months[this.state.index]}</Text>
            <Text style={styles.showingContainerSingleContent}>8365.85 KM</Text>
          </View>
        </View>
      );
    }
  }

  rednerMainContent = () => {
    let monthlyIncome = this.state.totalIncome.filter(item => item.month === this.state.months[this.state.index])
    return (
      <View>
        <View style={styles.monthlyTotalIncomeContainer}>
          <Text style={styles.monthlyTotalLabel}>Ukupan promet: </Text>
          <Text style={styles.monthlyTotalValue}>{monthlyIncome[0].totalIncome} KM</Text>
        </View>
        {this.renderSubcontent(monthlyIncome)}
      </View>
    )
  }

  render() {
    let { activeSection, months, index, totalIncome } = this.state;
    return (
      <View style={styles.dailyContainer}>
        <StatisticButtons
          activeSection={activeSection}
          onButtonPress={this.onButtonPress}
        />
        <View style={styles.monthChangeContainer}>
          <TouchableOpacity
            style={styles.monthButton}
            onPress={() => this.onPreviousMonth()}
          >
          <FontAwesomeIcon icon={faChevronLeft} size={24} color={COLOR_FONT_GRAY} />
          </TouchableOpacity>
          {this.renderCurrentMonth()}
          <TouchableOpacity
            style={styles.monthButton}
            onPress={() => this.onNextMonth()}
          >
          <FontAwesomeIcon icon={faChevronRight} size={24} color={COLOR_FONT_GRAY} />
          </TouchableOpacity>
        </View>
        <View style={styles.showingContainer}>
          <View style={styles.showingContainerHeader}>
            <Text>
              Mjesec: {months[index]}
            </Text>
          </View>
          <View style={styles.showingContainerContent}>
            {this.rednerMainContent()}
          </View>
        </View>
      </View>
    );
  }
}

export default MonthlyStatisticScreen;