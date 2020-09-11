import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from '../styles/order-styles';

const OrderInProcessScreen = (props) => {

  renderOrdersInProcess = ({ item }) => {
    console.log('STIGAO', item)
    return (
      <TouchableOpacity
        onPress={() => props.orderFinished(item)}
      >
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          style={styles.singleOrderInProcessContainer}
          data={item}
          renderItem={(item) => renderSingleOrder(item)}
          keyExtractor={(item, index) => index.toString()}
          refreshing={false}
        />
      </TouchableOpacity>
    );
  }

  renderSingleOrder = ({ item }) => {
    return (
      <View style={styles.orderInProcessContainer}>
        <Text>PICE: {item.drinks}</Text>
        <Text>PALACINAK: {item.order}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
      disableVirtualization={false}
      style={styles.foodListHolder}
      data={props.data}
      renderItem={(item) => renderOrdersInProcess(item)}
      keyExtractor={(item, index) => index.toString()}
      refreshing={false}
    />
  );
}

export default OrderInProcessScreen;