import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation';

import styles from '../styles/order-styles';
import TextButton from '../../../components/TextButton';
import DrinkMenuScreen from './DrinksMenuScreen';
import FoodMenuScreen from './FoodMenuScreen';

// const NewOrderScreen = (props) => {
//     return (
//         <View>
//             <Text>
//                 NEW ORDER SCREEN
//             </Text>
//         </View>
//     );
// }
class NewOrderScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      table: [
        { tableId: 1, tableNumber: 1 },
        { tableId: 2, tableNumber: 2 },
        { tableId: 3, tableNumber: 3 },
        { tableId: 4, tableNumber: 4 },
        { tableId: 5, tableNumber: 5 },
        { tableId: 6, tableNumber: 6 },
        { tableId: 7, tableNumber: 7 },
        { tableId: 8, tableNumber: 8 },
        { tableId: 9, tableNumber: 9 },
        { tableId: 10, tableNumber: 10 },
        { tableId: 11, tableNumber: 11 },
        { tableId: 12, tableNumber: 12 },
        { tableId: 13, tableNumber: 13 },
        { tableId: 14, tableNumber: 14 },
        { tableId: 15, tableNumber: 15 },
        { tableId: 16, tableNumber: 16 },
        { tableId: 17, tableNumber: 17 },
        { tableId: 18, tableNumber: 18 },
        { tableId: 19, tableNumber: 19 },
        { tableId: 20, tableNumber: 20 },
        // { tableId: 21, tableNumber: 21 },
        // { tableId: 22, tableNumber: 22 },
      ],
      pancackes: [
        { panckackeId: 1, name: 'Cokoladna Palacinka', price: 3.5 },
        { panckackeId: 2, name: 'Proteinska Palacinka', price: 5 },
        { panckackeId: 3, name: 'Obicna Palacinka', price: 2.5 },
        { panckackeId: 4, name: 'Bezglutenska Palacinka', price: 4.5 },
      ],
      chocolates: [
        { chocolateId: 1, name: 'Bijela Cokolada', price: 1.5 },
        { chocolateId: 2, name: 'PREMIUM Cokolada', price: 2.5 },
        { chocolateId: 3, name: 'Crna Cokolada', price: 0.75 },
        { chocolateId: 4, name: 'Nutela Cokolada', price: 1.25 },
        { chocolateId: 5, name: 'Eurokrem Cokolada', price: 0.75 },
        { chocolateId: 6, name: 'Linolada Cokolada', price: 1.0 },
        { chocolateId: 7, name: 'KinderBueno Cokolada', price: 0.5 },
      ],
      extras: [
        { extrasId: 1, name: 'Bademi', price: 0.5 },
        { extrasId: 2, name: 'Orasi', price: 0.5 },
        { extrasId: 3, name: 'Keks Plazma', price: 0.5 },
        { extrasId: 4, name: 'Preliv', price: 0.5 },
        { extrasId: 5, name: 'Sladoled', price: 0.5 },
      ],
      drinks: [
        { drinkId: 1, name: 'Esspresso', price: 2.0 },
        { drinkId: 2, name: 'Esspresso sa mlijekom', price: 2.5 },
        { drinkId: 3, name: 'Esspresso sa slagom', price: 3.0 },
        { drinkId: 4, name: 'Pivo', price: 3.5 },
        { drinkId: 5, name: 'Limunada', price: 3.0 },
        { drinkId: 6, name: 'Voda', price: 1.0 },
        { drinkId: 7, name: 'Kisela Voda', price: 1.5 },
        { drinkId: 8, name: 'Cijedjena Narandza', price: 4.0 },
        { drinkId: 9, name: 'Ness kafa', price: 3.0 },
      ],
      totalPrice: 0,
      finalOrder: { order: '', drinks: '', orderPrice: 0 },
      finalOrderArray: [],
      selectedTable: null,
      selectedDrinks: [],
      selectedFood: [],
      showTableScreen: true,
      showOrderMenu: false,
      showDrinkMenu: false,
      showFoodMenu: false,
      foodSection: 0
    }
  }

  renderFinalOrderArray = ({ item }) => {
    return (
      <View style={styles.singleOrderPresentContainer}>
        <Text style={styles.singleOrderPresent}><Text style={styles.singleOrderPresentBold}>Pice: </Text>{item.drinks}</Text>
        <Text style={styles.singleOrderPresent}><Text style={styles.singleOrderPresentBold}>Hrana: </Text>{item.order}</Text>
        <Text style={styles.singlePricePresent}><Text style={styles.singleOrderPresentBold}>Cijena: </Text>{item.orderPrice} KM</Text>
      </View>
    );
  }

  renderTable = ({ item }) => {

    let tableNumber = item.tableNumber
    return (
      <TouchableOpacity
        style={styles.tableItem}
        onPress={() => this.onTablePress(item)}>
        <Text style={styles.tableText}>Stol: {tableNumber}</Text>
      </TouchableOpacity>
    );
  }

  onTablePress = (data) => {
    this.setState({
      selectedTable: data,
      showTableScreen: false,
      showOrderMenu: true
    })
  }

  openMenu = (value) => {
    if (value === 'drinks') {
      this.setState({
        showOrderMenu: false,
        showDrinkMenu: true,
      })
    } else {
      this.setState({
        showOrderMenu: false,
        showFoodMenu: true
      })
    }

  }

  selectDrinks = (item) => {
    this.setState({
      selectedDrinks: this.state.selectedDrinks.concat(item),
      finalOrder: {
        ...this.state.finalOrder,
        drinks: this.state.finalOrder.drinks.concat(`-${item.name}`),
        orderPrice: this.state.finalOrder.orderPrice + item.price
      },
      totalPrice: this.state.totalPrice + item.price,
      // showDrinkMenu: false,
      // showOrderMenu: true,
    })
  }

  selectFood = (item) => {
    this.setState({
      selectedFood: this.state.selectedFood.concat(item),
      finalOrder: {
        ...this.state.finalOrder,
        order: this.state.finalOrder.order.concat(`-${item.name}`),
        orderPrice: this.state.finalOrder.orderPrice + item.price
      },
      totalPrice: this.state.totalPrice + item.price,
    })
    if (this.state.foodSection === 0) {
      this.setState({
        foodSection: this.state.foodSection + 1
      })
    }
  }

  sectionBack = () => {
    this.setState({

      showFoodMenu: false
    })
  }

  onNextButtonPress = (value) => {
    if (value === 'food') {
      if (this.state.foodSection < 3) {
        this.setState({
          foodSection: this.state.foodSection + 1
        })
      } if (this.state.foodSection === 3) {
        this.setState({
          foodSection: 0,
          showFoodMenu: false,
          showOrderMenu: true,
        })
      }
    } else {
      this.setState({
        showDrinkMenu: false,
        showOrderMenu: true,
      })
    }

  }

  addOrderToList = () => {
    this.setState({
      foodSection: 0,
      showFoodMenu: false,
      showDrinkMenu: false,
      showOrderMenu: true,
      finalOrderArray: this.state.finalOrderArray.concat(this.state.finalOrder),
      finalOrder: { order: '', drinks: '', orderPrice: 0 },
    })
  }

  canceleOrder = () => {
    this.setState({
      foodSection: 0,
      showFoodMenu: false,
      showDrinkMenu: false,
      showOrderMenu: true,
      totalPrice: this.state.totalPrice - this.state.finalOrder.orderPrice,
      finalOrder: { order: '', drinks: '', orderPrice: 0 },
    })
  }

  sendOrder = () => {
    this.props.sendOrder(this.state.finalOrderArray);
    this.setState({
      totalPrice: 0,
      finalOrder: { order: '', drinks: '', orderPrice: 0 },
      finalOrderArray: [],
    })
    // this.props.changeIndex(2)
    // this.props.navigation.navigate('Landing')
    //   this.props.navigation.navigate(
    //     'WaiterDashboard', 
    //     {}, 
    //     NavigationActions.navigate({ 
    //         route: 'U pripremi' 
    //     })
    // )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.creatingOrderContainer}>
          {this.state.showTableScreen &&
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              disableVirtualization={false}
              numColumns={5}
              style={styles.tablesListHolder}
              data={this.state.table}
              renderItem={(item) => this.renderTable(item)}
              keyExtractor={(item, index) => index.toString()}
              refreshing={false}
            // onRefresh={this.props.fetchCertificates}
            // ListEmptyComponent={!this.props.isLoading && this.renderEmptyComponent()}
            />
          }
          {this.state.showOrderMenu &&
            <View style={styles.orderMenuContainer}>
              <TextButton
                // onPress={() => this.onPressLogin(this.props)}
                onPress={() => this.openMenu('food')}
                title="Palacinci"
                buttonStyle={styles.activeButton}
                titleStyle={styles.buttonTitle}
              />
              <TextButton
                // onPress={() => this.onPressLogin(this.props)}
                onPress={() => this.openMenu('drinks')}
                title="Pice"
                buttonStyle={styles.activeButton}
                titleStyle={styles.buttonTitle}
              />
              {this.state.finalOrder.orderPrice !== 0 &&
                <TextButton
                  onPress={this.addOrderToList}
                  title="Dodaj Narudzbu"
                  buttonStyle={styles.sendOrderActiveButton}
                  titleStyle={styles.buttonTitle}
                />
              }
            </View>
          }
          {this.state.showDrinkMenu &&
            <DrinkMenuScreen
              drinks={this.state.drinks}
              select={this.selectDrinks}
            />
          }
          {this.state.showFoodMenu &&
            <FoodMenuScreen
              section={this.state.foodSection}
              pancackes={this.state.pancackes}
              chocolates={this.state.chocolates}
              extras={this.state.extras}
              select={this.selectFood}
              sectionBack={this.sectionBack}
            />
          }
          {this.state.foodSection > 0 &&
            <View style={styles.orderButtonContainer}>
              {this.state.foodSection > 0 && this.state.foodSection < 4 &&
                <View style={styles.orderNavigationButtonsHolder}>
                  <TextButton
                    onPress={this.canceleOrder}
                    title="Ponisti"
                    buttonStyle={styles.cancelOrderButton}
                    titleStyle={styles.buttonTitle}
                  />
                  <TextButton
                    onPress={() => this.onNextButtonPress('food')}
                    title="Dalje"
                    buttonStyle={styles.nextOrderButton}
                    titleStyle={styles.buttonTitle}
                  />
                </View>
              }
              <TextButton
                onPress={this.state.foodSection > 1 ? this.addOrderToList : () => console.log()}
                title="Dodaj Narudzbu"
                buttonStyle={this.state.foodSection > 1 ? styles.sendOrderActiveButton : styles.sendOrderButton}
                titleStyle={styles.buttonTitle}
              />
            </View>
          }
          {this.state.showDrinkMenu &&
            <View style={styles.orderButtonContainer}>
              <View style={styles.orderNavigationButtonsHolder}>
                <TextButton
                  onPress={this.canceleOrder}
                  title="Ponisti"
                  buttonStyle={styles.cancelOrderButton}
                  titleStyle={styles.buttonTitle}
                />
                <TextButton
                  onPress={() => this.onNextButtonPress('drinks')}
                  title="Dalje"
                  buttonStyle={styles.nextOrderButton}
                  titleStyle={styles.buttonTitle}
                />
              </View>
              <TextButton
                onPress={this.state.finalOrder.orderPrice > 0 ? this.addOrderToList : () => console.log()}
                title="Dodaj Narudzbu"
                buttonStyle={this.state.finalOrder.orderPrice > 0 ? styles.sendOrderActiveButton : styles.sendOrderButton}
                titleStyle={styles.buttonTitle}
              />
            </View>
          }
        </View>
        {(this.state.finalOrder.orderPrice > 0 || this.state.finalOrderArray.length > 0) &&
          <View style={styles.showingOrderContainer}>
            {this.state.finalOrder.orderPrice > 0 &&
              <View style={styles.currentOrderHolder}>
                <Text style={styles.currentOrderText}>Trenutna Narudzba: {this.state.finalOrder.order}</Text>
                <Text style={styles.currentOrderText}>Pice: {this.state.finalOrder.drinks}</Text>
              </View>
            }
            <View style={styles.orderPresentContainer}>
              <Text>Stol: {this.state.selectedTable ?.tableNumber}</Text>
              <Text>Ukupna cijena: {this.state.totalPrice} KM</Text>
            </View>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              disableVirtualization={false}
              style={styles.finalOrderList}
              data={this.state.finalOrderArray}
              renderItem={(item) => this.renderFinalOrderArray(item)}
              keyExtractor={(item, index) => index.toString()}
              refreshing={false}
            />
            <View style={styles.sendButtonContainer}>
              <TextButton
                onPress={this.state.finalOrderArray.length > 0 ? () => this.sendOrder() : () => console.log()}
                title="Posalji Narudzbu"
                buttonStyle={this.state.finalOrderArray.length > 0 ? styles.sendOrderActiveButton : styles.sendOrderButton}
                titleStyle={styles.buttonTitle}
              />
            </View>
          </View>
        }
      </SafeAreaView>
    );
  }
}


export default NewOrderScreen;