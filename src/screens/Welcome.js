import React from 'react';
import {View, Text, Button} from 'react-native';
import {layouts} from '../styles/layouts';

export default function Welcome(props) {
  return (
    <View style={layouts.container}>
      <Text>Welcome To AIA Test</Text>
      <Button
        title="Get Started"
        onPress={() => {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
      />
    </View>
  );
}
