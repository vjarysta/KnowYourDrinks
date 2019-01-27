import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import BarCodeWrapper from '../BarCodeWrapper';


const toggleBarCodeScanner = ({ showBarCodeScanner }) => ({
  showBarCodeScanner: !showBarCodeScanner,
});

export default class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBarCodeScanner: true,
    };
  }

  toggleBarCodeScanner = () => {
    this.setState(toggleBarCodeScanner);
  }

  onBarCodeScanned = ({ data }) => {
    const { navigation } = this.props;
    navigation.navigate('Result', {
      barCodeId: data,
    });
  }

  render() {
    const { showBarCodeScanner } = this.state;
    return (
      <View style={styles.container}>

        {showBarCodeScanner
          ? (
            <BarCodeWrapper
              onBarCodeScanned={this.onBarCodeScanned}
            />
          )
          : (
            <Button
              onPress={this.toggleBarCodeScanner}
              title="Scan"
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
