import React from 'react';
import {View, Text, Button} from 'react-native';
import {layouts} from '../styles/layouts';

export default function Login(props) {
  return (
    <View style={layouts.container}>
      <Text>Login</Text>
      <Button
        title={'Login'}
        onPress={() => {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }}
      />
    </View>
  );
}
