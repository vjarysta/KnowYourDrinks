import { AsyncStorage } from 'react-native';

const storageKey = 'ProductsHistory:products';

export function saveProduct(product) {
  AsyncStorage.getItem(storageKey)
    .then(item => JSON.parse(item))
    .then(item => AsyncStorage.setItem(storageKey, JSON.stringify([...item || [], product])));
}

export function getProducts() {
  return AsyncStorage.getItem(storageKey);
}
