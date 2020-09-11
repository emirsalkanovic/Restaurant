import React from 'react';
import { View, Text, FlatList } from 'react-native'

import styles from '../styles/order-styles';

const ReadyOrderScreen = (props) => {

  const { data } = props;

  renderReadyOders = ({ item }) => {
    console.log('DA VIDIMO', item)
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        disableVirtualization={false}
        style={styles.readyOrderContainer}
        data={item}
        renderItem={(item) => renderSingleOrder(item)}
        keyExtractor={(item, index) => index.toString()}
        refreshing={false}
      />
    )
  }

  renderSingleOrder = ({ item }) => {
    console.log('DDDDDD', item)
    return (
      <View style={styles.singleReadyOrderContainer}>
        <Text>Cijena: {item.orderPrice}</Text>
        <Text>PICE: {item.drinks}</Text>
        <Text>PALACINCI: {item.order}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.listDivider}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          disableVirtualization={false}
          style={styles.readyOrderList}
          data={data}
          renderItem={(item) => this.renderReadyOders(item)}
          keyExtractor={(itemdata, index) => index.toString()}
          refreshing={false}
        // onRefresh={this.props.fetchCertificates}
        // ListEmptyComponent={!this.props.isLoading && this.renderEmptyComponent()}
        />
      </View>
    </View>
  );
}

export default ReadyOrderScreen;