import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { saveProduct } from '../../services/productsHistory';

function getProductUrl(id) {
  return `https://fr.openfoodfacts.org/api/v0/produit/${id}.json`;
}

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const barCodeId = navigation.getParam('barCodeId', '');

    fetch(getProductUrl(barCodeId))
      .then(res => res.json())
      .then((data) => {
        const { product } = data;
        this.setState({ product });
        // @TODO: Save product correctly
        saveProduct(product);
      });
  }


  render() {
    const { product } = this.state;
    // @TODO: Improve alcohol rate display (sometimes value equals \"40\")
    const alcoholRate = product
      && product.nutriments
      && product.nutriments.alcohol
      && JSON.stringify(product.nutriments.alcohol);
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>
          {alcoholRate}
          {' % d\'alcool'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: '#FF3344',
    fontFamily: 'sans-serif-condensed',
    fontSize: 70,
  },
});
