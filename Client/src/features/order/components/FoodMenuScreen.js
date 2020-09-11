import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from '../styles/order-styles';

const FoodMenuScreen = (props) => {

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

  const renderItems = () => {
    if (props.section === 0) {
      return props.pancackes;
    } if (props.section === 1) {
      return props.chocolates
    } if (props.section === 2) {
      return props.extras
    } else {
      props.sectionBack()
    }
  }

  return (
    <View style={styles.drinksMenu}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        disableVirtualization={false}
        style={styles.foodListHolder}
        data={renderItems()}
        renderItem={(item) => renderData(item)}
        keyExtractor={(item, index) => index.toString()}
        refreshing={false}
      />
    </View>
  )
}

export default FoodMenuScreen;