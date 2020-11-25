/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Dimensions} from './styles';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, native world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {padding: 10},
  text: {
    fontWeight: 'bold',
    fontSize: Dimensions.TextSizes.extraLargeText,
    color: Colors.background,
  },
});

export default App;
