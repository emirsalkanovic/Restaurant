import React from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import styles from '../style/supplies-style';
import ManagerMainScreen from '../../manager/components/ManagerMainScreen';
import Header from '../../../components/Header';

class MainSupplyScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      errorMessage: '',
      routes: [
        { key: 'current', title: 'Trenutne Zalihe' },
        { key: 'add', title: 'Dodati' },
        { key: 'edit', title: 'Izmjeniti' }
      ],
    }
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'current':
        return (
          <ManagerMainScreen />
        );
      case 'add':
        return (
          <ManagerMainScreen

          />
        );
      case 'edit':
        return (
          <ManagerMainScreen

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
      <SafeAreaView style={styles.suppliesContainer}>
        <View style={styles.suppliesHeaderContainer}>
          <Header title='Zalihe' />
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

export default MainSupplyScreen;