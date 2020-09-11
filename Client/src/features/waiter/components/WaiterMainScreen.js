import React from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  Platform,
  Text,
  SafeAreaView
} from 'react-native';
import { TabView, TabBar, PagerScroll } from 'react-native-tab-view';

import styles from '../styles/waiter-main-screen-styles';
import Header from '../../../components/Header';
import ReadyOrderScreen from '../../order/components/ReadyOrderScreen';
import NewOrderScreen from '../../order/components/NewOrderScreen';
import OrderInProcessScreen from '../../order/components/OrderInProcessScreen';


class WaiterMainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      errorMessage: '',
      routes: [
        { key: 'readyOrder', title: 'Gotove Narudzbe' },
        { key: 'newOrder', title: 'Nova Narudzba' },
        { key: 'processingOrder', title: 'U pripremi' } 
      ],
      //Dummy Data
      readyOrder: [
        // { table: '4', order: 'Palacinak sa Nutelom', price: 4.25 },
        // { table: '6', order: 'Kafa sa mlijekom', price: 1.25 },
        // { table: '11', order: 'Palacinak i kafa', price: 7.00 },
        // { table: '8', order: 'Palacinak sa Nutelom', price: 4.25 }
      ],
      orderInProcess: [],
    }
  }

  sendOrderToKitchen = (data) => {
    console.log('SENDED', data)
    this.setState({

      orderInProcess: this.state.orderInProcess.concat([data]),
    })
  }

  changeIndex = (newIndex) => {
    this.setState({
      index: newIndex
    })
  }

  orderFinished= (order) => {
    console.log('ZAVRSENO', order)
    this.setState({
      readyOrder: this.state.readyOrder.concat([order]),
      orderInProcess: this.state.orderInProcess.filter( item => item !== order)
    })
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'readyOrder':
        return (
          <ReadyOrderScreen data={this.state.readyOrder} />
        );
      case 'newOrder':
        return (
          <NewOrderScreen
            changeIndex={this.changeIndex}
            navigation={this.props.navigation}
            sendOrder={this.sendOrderToKitchen}
          />
        );
      case 'processingOrder':
        return (
          <OrderInProcessScreen
            orderFinished={this.orderFinished}
            data={this.state.orderInProcess}
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
    // const spinnerSize = Platform.OS === 'ios' ? 1 : 50;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerOrderContainer}>
          <Header title="Narudzbe" />
        </View>
        <TabView
          // renderPager={(props) =>
          // 	<PagerScroll {...props} />}
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

export default WaiterMainScreen;