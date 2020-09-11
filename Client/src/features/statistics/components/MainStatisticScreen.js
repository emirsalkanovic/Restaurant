import React from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import styles from '../style/statistic-style'
import Header from '../../../components/Header';
import DailyStatisticScreen from './DailyStaticticScreen';
import MonthlyStatisticScreen from './MonthlyStatisticScreen';
import YearlyStatisticScreen from './YearlyStatisticScreen';

class MainStatisticScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      errorMessage: '',
      routes: [
        { key: 'day', title: 'Dnevni' },
        { key: 'month', title: 'Mjesecni' },
        { key: 'year', title: 'Godisnji' }
      ],
    }
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'day':
        return (
          <DailyStatisticScreen />
        );
      case 'month':
        return (
          <MonthlyStatisticScreen

          />
        );
      case 'year':
        return (
          <YearlyStatisticScreen

          />
        );
      default:
        return null;
    }
  }

  renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      getLabelText={(text) => text.route.title}
    />
  );

  handleBackButtonClick = () => true;

  render() {
    const initialLayout = {
      height: 0,
      width: Dimensions.get('window').width
    };
    return (
      <SafeAreaView style={styles.statisticContainer}>
        <View style={styles.statisticHeaderContainer}>
          <Header title='Statistika' />
        </View>
        <TabView
          initialLayout={initialLayout}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => this.setState({ index })}
          getLabelText={this.getLabelText}
        />
      </SafeAreaView>
    );
  }
}

export default MainStatisticScreen;