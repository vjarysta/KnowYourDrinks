import React from 'react';
import { View, Text } from 'react-native';

import { getProducts } from '../../services/productsHistory';

export default class History extends React.Component {
  componentWillMount() {
    getProducts()
      .then((products) => {
        console.log(products);
      });
  }

  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    );
  }
}
