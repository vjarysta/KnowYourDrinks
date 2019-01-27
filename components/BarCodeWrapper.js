/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, StyleSheet, Dimensions,
} from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;

export default class BarCodeWrapper extends Component {
  state = {
    hasCameraPermission: null,
  };

  componentDidMount() {
    // @TODO: Display error if the permission is denied (and reenable eslint rule)
    this.requestCameraPermission();
  }

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  render() {
    const { onBarCodeScanned } = this.props;

    // @TODO: Accept only barcode types
    return (
      <BarCodeScanner
        onBarCodeScanned={onBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <Text style={styles.description}>SCANNE TA BINCHE</Text>
        <Ionicons name="ios-qr-scanner" size={qrSize} style={styles.qr} />
      </BarCodeScanner>
    );
  }
}

BarCodeWrapper.propTypes = {
  onBarCodeScanned: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
    color: '#999',
    opacity: 0.6,
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
});
