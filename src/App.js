/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from './styles';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, web world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {padding: Dimensions.TextSizes.extraLargeText},
  text: {fontWeight: 'bold'},
});

export default App;
