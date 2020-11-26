/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Colors, Dimensions} from './styles';

export default function App() {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{num}</Text>
      <Button title={'123'} onPress={() => setNum(num + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {padding: 10},
  text: {
    fontWeight: 'bold',
    fontSize: Dimensions.TextSizes.extraLargeText,
    color: Colors.themeBackground,
  },
});
