import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from '../styles/order-styles';

const DrinkMenuScreen = (props) => {

  const renderData = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => props.select(item)}
        style={styles.drinkMenuItemContainer}
      >
        <Text style={styles.drinkMenuSingleItem}>{item.name}</Text>
        <Text style={styles.drinkMenuSingleItem}>{item.price} KM</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.drinksMenu}>
      {/* <Text>Pice</Text> */}
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        disableVirtualization={false}
        style={styles.foodListHolder}
        data={props.drinks}
        renderItem={(item) => renderData(item)}
        keyExtractor={(item, index) => index.toString()}
        refreshing={false}
      // onRefresh={this.props.fetchCertificates}
      // ListEmptyComponent={!this.props.isLoading && this.renderEmptyComponent()}
      />
    </View>
  )
}

export default DrinkMenuScreen;